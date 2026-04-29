import type { Schema, Struct } from '@strapi/strapi';

export interface LandingBulletItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_bullet_items';
  info: {
    displayName: 'BulletItem';
    icon: 'check-circle';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface LandingCompanyAbout extends Struct.ComponentSchema {
  collectionName: 'components_landing_company_abouts';
  info: {
    displayName: 'CompanyAbout';
    icon: 'building';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'landing.bullet-item', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    metaItems: Schema.Attribute.Component<'landing.meta-item', true>;
    title: Schema.Attribute.String;
    venues: Schema.Attribute.Component<'landing.tag-item', true>;
    venuesLabel: Schema.Attribute.String;
  };
}

export interface LandingCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_landing_cta_banners';
  info: {
    displayName: 'CtaBanner';
    icon: 'arrow-right';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_feature_items';
  info: {
    displayName: 'FeatureItem';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingFeaturesGrid extends Struct.ComponentSchema {
  collectionName: 'components_landing_features_grids';
  info: {
    displayName: 'FeaturesGrid';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'landing.feature-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingHero extends Struct.ComponentSchema {
  collectionName: 'components_landing_heroes';
  info: {
    displayName: 'Hero';
    icon: 'star';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    headlineAccent: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    subheadline: Schema.Attribute.Text;
  };
}

export interface LandingMetaItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_meta_items';
  info: {
    displayName: 'MetaItem';
    icon: 'information';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LandingStatsItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_stats_items';
  info: {
    displayName: 'StatsItem';
    icon: 'chart-bar';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LandingTagItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_tag_items';
  info: {
    displayName: 'TagItem';
    icon: 'tag';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface LandingTeamShowcase extends Struct.ComponentSchema {
  collectionName: 'components_landing_team_showcases';
  info: {
    displayName: 'TeamShowcase';
    icon: 'users';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBranding extends Struct.ComponentSchema {
  collectionName: 'components_sections_brandings';
  info: {
    displayName: 'Branding';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsColorPalette extends Struct.ComponentSchema {
  collectionName: 'components_sections_color_palettes';
  info: {
    displayName: 'ColorPalette';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_cards';
  info: {
    displayName: 'ContactCard';
    icon: 'user';
  };
  attributes: {
    color: Schema.Attribute.String;
    initials: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface SectionsContactList extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_lists';
  info: {
    displayName: 'ContactList';
    icon: 'users';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'sections.contact-card', true>;
  };
}

export interface SectionsFolderArch extends Struct.ComponentSchema {
  collectionName: 'components_sections_folder_arches';
  info: {
    displayName: 'FolderArch';
    icon: 'folder';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.folder-card', true>;
    maincode: Schema.Attribute.Component<'shared.code-block', false>;
  };
}

export interface SectionsFolderCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_folder_cards';
  info: {
    displayName: 'FolderCard';
    icon: 'folder';
  };
  attributes: {
    accent: Schema.Attribute.String;
    body: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGettingStarted extends Struct.ComponentSchema {
  collectionName: 'components_sections_getting_starteds';
  info: {
    displayName: 'GettingStarted';
    icon: 'play';
  };
  attributes: {
    mainCode: Schema.Attribute.JSON;
    steps: Schema.Attribute.Component<'shared.step', true>;
  };
}

export interface SectionsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_grids';
  info: {
    displayName: 'Grid';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsIconography extends Struct.ComponentSchema {
  collectionName: 'components_sections_iconographies';
  info: {
    displayName: 'Iconography';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsMistakes extends Struct.ComponentSchema {
  collectionName: 'components_sections_mistakes';
  info: {
    displayName: 'Mistakes';
    icon: 'alert-circle';
  };
  attributes: {
    mistakeTable: Schema.Attribute.Component<'shared.table', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNcDesignBasics extends Struct.ComponentSchema {
  collectionName: 'components_sections_nc_design_basics';
  info: {
    displayName: 'NcDesignBasics';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsNcPrototype extends Struct.ComponentSchema {
  collectionName: 'components_sections_nc_prototypes';
  info: {
    displayName: 'NcPrototype';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsNcUxDesign extends Struct.ComponentSchema {
  collectionName: 'components_sections_nc_ux_designs';
  info: {
    displayName: 'NcUxDesign';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsNcWebDesign extends Struct.ComponentSchema {
  collectionName: 'components_sections_nc_web_designs';
  info: {
    displayName: 'NcWebDesign';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsProjects extends Struct.ComponentSchema {
  collectionName: 'components_sections_projects';
  info: {
    displayName: 'Projects';
    icon: 'briefcase';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsSpacing extends Struct.ComponentSchema {
  collectionName: 'components_sections_spacings';
  info: {
    displayName: 'Spacing';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsTechStack extends Struct.ComponentSchema {
  collectionName: 'components_sections_tech_stacks';
  info: {
    displayName: 'TechStack';
    icon: 'layers';
  };
  attributes: {
    dataTable: Schema.Attribute.Component<'shared.table', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTypography extends Struct.ComponentSchema {
  collectionName: 'components_sections_typographies';
  info: {
    displayName: 'Typography';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedCallout extends Struct.ComponentSchema {
  collectionName: 'components_shared_callouts';
  info: {
    displayName: 'Callout';
    icon: 'alert-circle';
  };
  attributes: {
    message: Schema.Attribute.Text;
    type: Schema.Attribute.String;
  };
}

export interface SharedCodeBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_code_blocks';
  info: {
    displayName: 'CodeBlock';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.Text;
    language: Schema.Attribute.String;
  };
}

export interface SharedCodeStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_code_steps';
  info: {
    displayName: 'code-step';
  };
  attributes: {
    code: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    language: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCodingPatterns extends Struct.ComponentSchema {
  collectionName: 'components_shared_coding_patterns';
  info: {
    displayName: 'CodingPatterns';
    icon: 'code';
  };
  attributes: {
    layout: Schema.Attribute.String;
    patterns: Schema.Attribute.Component<'shared.pattern', true>;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
    icon: 'user';
  };
  attributes: {
    color: Schema.Attribute.String;
    initials: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedPattern extends Struct.ComponentSchema {
  collectionName: 'components_shared_patterns';
  info: {
    displayName: 'Pattern';
    icon: 'code';
  };
  attributes: {
    callout: Schema.Attribute.Component<'shared.callout', false>;
    code: Schema.Attribute.Component<'shared.code-block', false>;
    description: Schema.Attribute.Text;
    rules: Schema.Attribute.Component<'shared.table-cell', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedProjectMeta extends Struct.ComponentSchema {
  collectionName: 'components_shared_project_metas';
  info: {
    displayName: 'ProjectMeta';
    icon: 'layer';
  };
  attributes: {
    deploy: Schema.Attribute.String;
    repo: Schema.Attribute.String;
    sprint: Schema.Attribute.String;
    stack: Schema.Attribute.String;
  };
}

export interface SharedSimpleText extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_texts';
  info: {
    displayName: 'SimpleText';
    icon: 'file-text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface SharedStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Step';
    icon: 'check';
  };
  attributes: {
    code: Schema.Attribute.Component<'shared.code-block', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'Table';
    icon: 'server';
  };
  attributes: {
    headers: Schema.Attribute.Component<'shared.table-cell', true>;
    rows: Schema.Attribute.Component<'shared.table-row', true>;
  };
}

export interface SharedTableCell extends Struct.ComponentSchema {
  collectionName: 'components_shared_table_cells';
  info: {
    displayName: 'TableCell';
    icon: 'grid';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

export interface SharedTableRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_table_rows';
  info: {
    displayName: 'TableRow';
    icon: 'layout';
  };
  attributes: {
    cells: Schema.Attribute.Component<'shared.table-cell', true>;
  };
}

export interface SharedToolFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_tool_features';
  info: {
    displayName: 'tool-feature';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing.bullet-item': LandingBulletItem;
      'landing.company-about': LandingCompanyAbout;
      'landing.cta-banner': LandingCtaBanner;
      'landing.feature-item': LandingFeatureItem;
      'landing.features-grid': LandingFeaturesGrid;
      'landing.hero': LandingHero;
      'landing.meta-item': LandingMetaItem;
      'landing.stats-item': LandingStatsItem;
      'landing.tag-item': LandingTagItem;
      'landing.team-showcase': LandingTeamShowcase;
      'sections.branding': SectionsBranding;
      'sections.color-palette': SectionsColorPalette;
      'sections.contact-card': SectionsContactCard;
      'sections.contact-list': SectionsContactList;
      'sections.folder-arch': SectionsFolderArch;
      'sections.folder-card': SectionsFolderCard;
      'sections.getting-started': SectionsGettingStarted;
      'sections.grid': SectionsGrid;
      'sections.iconography': SectionsIconography;
      'sections.mistakes': SectionsMistakes;
      'sections.nc-design-basics': SectionsNcDesignBasics;
      'sections.nc-prototype': SectionsNcPrototype;
      'sections.nc-ux-design': SectionsNcUxDesign;
      'sections.nc-web-design': SectionsNcWebDesign;
      'sections.projects': SectionsProjects;
      'sections.spacing': SectionsSpacing;
      'sections.tech-stack': SectionsTechStack;
      'sections.typography': SectionsTypography;
      'shared.callout': SharedCallout;
      'shared.code-block': SharedCodeBlock;
      'shared.code-step': SharedCodeStep;
      'shared.coding-patterns': SharedCodingPatterns;
      'shared.contact': SharedContact;
      'shared.link': SharedLink;
      'shared.pattern': SharedPattern;
      'shared.project-meta': SharedProjectMeta;
      'shared.simple-text': SharedSimpleText;
      'shared.step': SharedStep;
      'shared.table': SharedTable;
      'shared.table-cell': SharedTableCell;
      'shared.table-row': SharedTableRow;
      'shared.tool-feature': SharedToolFeature;
    }
  }
}
