// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: any }) {
    // Run migration in background to not block startup
    (async () => {
      try {
        console.log('[Migration] Checking for UI/UX team data migration...');
        const { results: teams } = await strapi.documents('api::team.team').findMany();
        
        if (!teams) return;

        for (const team of teams) {
          if (team.sections) {
            let updated = false;
            const newSections = team.sections.map((s: any) => {
              // If it's an old phase component, migrate to nc-phase
              const oldPhases = [
                'sections.nc-design-basics',
                'sections.nc-ux-design',
                'sections.nc-wireframing',
                'sections.nc-prototype',
                'sections.nc-web-design',
                'sections.nc-print-design',
                'sections.nc-brand-storytelling',
                'sections.phase-6-print-design'
              ];

              if (oldPhases.includes(s.__component)) {
                updated = true;
                let phaseValue = s.__component.replace('sections.', '');
                if (phaseValue === 'phase-6-print-design') phaseValue = 'nc-print-design';
                
                console.log(`[Migration] Mapping ${s.__component} to nc-phase with phase=${phaseValue}`);
                return {
                  __component: 'sections.nc-phase',
                  phase: phaseValue,
                  title: s.title || '',
                  subHeader: s.subHeader || ''
                };
              }
              return s;
            });

            if (updated) {
              console.log(`[Migration] Updating team ${team.documentId} with migrated sections...`);
              await strapi.documents('api::team.team').update({
                documentId: team.documentId,
                data: { sections: newSections }
              });
            }
          }
        }
        console.log('[Migration] Migration check complete.');
      } catch (err) {
        console.error('[Migration] Error during migration:', err);
      }
    })();
  },
};
