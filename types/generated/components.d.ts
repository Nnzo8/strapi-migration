import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsBranding extends Struct.ComponentSchema {
  collectionName: 'components_sections_brandings';
  info: {
    description: 'Company branding assets including logos, favicons, and sidebar variants.';
    displayName: 'Branding';
  };
  attributes: {
    favicon: Schema.Attribute.Component<'shared.brand-asset', false>;
    mainLogos: Schema.Attribute.Component<'shared.brand-asset', true>;
    sidebarCollapsed: Schema.Attribute.Component<'shared.brand-asset', true>;
    sidebarExpanded: Schema.Attribute.Component<'shared.brand-asset', true>;
    subHeader: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsColorPalette extends Struct.ComponentSchema {
  collectionName: 'components_sections_color_palettes';
  info: {
    description: 'Visual color palette with overview, shades, and WCAG compliance tabs.';
    displayName: 'Color Palette';
  };
  attributes: {
    subHeader: Schema.Attribute.Text;
    tabs: Schema.Attribute.Component<'shared.color-tab', true>;
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
    layout: Schema.Attribute.String;
    mainCode: Schema.Attribute.JSON;
    steps: Schema.Attribute.Component<'shared.step', true>;
    title: Schema.Attribute.String;
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

export interface SectionsNcPhase extends Struct.ComponentSchema {
  collectionName: 'components_sections_nc_phases';
  info: {
    displayName: 'NC Phase';
    icon: 'layer-group';
  };
  attributes: {
    phase: Schema.Attribute.Enumeration<
      [
        'nc-design-basics',
        'nc-ux-design',
        'nc-wireframing',
        'nc-prototype',
        'nc-web-design',
        'nc-print-design',
        'nc-brand-storytelling',
      ]
    >;
    subHeader: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPhaseShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_phase_showcases';
  info: {
    description: 'Centralized component for all 7 curriculum phases.';
    displayName: 'Phase Showcase';
    icon: 'layer-group';
  };
  attributes: {
    phase: Schema.Attribute.Enumeration<
      [
        'Phase 1 - Design Basics',
        'Phase 2 - UX Design',
        'Phase 3 - Wireframing',
        'Phase 4 - Prototyping',
        'Phase 5 - Web Design',
        'Phase 6 - Print Design',
        'Phase 7 - Brand & Storytelling',
      ]
    > &
      Schema.Attribute.Required;
    subHeader: Schema.Attribute.Text;
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

export interface SectionsQaStages extends Struct.ComponentSchema {
  collectionName: 'components_sections_qa_stages';
  info: {
    displayName: 'QA Board Stages';
    icon: 'tasks';
  };
  attributes: {
    layout: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.step', true>;
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

export interface SectionsTypographyScale extends Struct.ComponentSchema {
  collectionName: 'components_sections_typography_scales';
  info: {
    description: 'Visual typography scale with tabbed contexts (Web, Mobile, etc.)';
    displayName: 'Typography Scale';
  };
  attributes: {
    subHeader: Schema.Attribute.Text;
    tabs: Schema.Attribute.Component<'shared.typography-tab', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBrandAsset extends Struct.ComponentSchema {
  collectionName: 'components_shared_brand_assets';
  info: {
    displayName: 'Brand Asset';
    icon: 'image';
  };
  attributes: {
    asset: Schema.Attribute.Media<'images' | 'files'>;
    background: Schema.Attribute.String;
    bordered: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    color: Schema.Attribute.String;
    height: Schema.Attribute.String;
    label: Schema.Attribute.String;
    width: Schema.Attribute.String;
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
    subHeader: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedColorGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_color_groups';
  info: {
    displayName: 'Color Group';
    icon: 'layer-group';
  };
  attributes: {
    label: Schema.Attribute.String;
    swatches: Schema.Attribute.Component<'shared.color-swatch', true>;
  };
}

export interface SharedColorSwatch extends Struct.ComponentSchema {
  collectionName: 'components_shared_color_swatches';
  info: {
    displayName: 'Color Swatch';
    icon: 'palette';
  };
  attributes: {
    hex: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedColorTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_color_tabs';
  info: {
    displayName: 'Color Tab';
    icon: 'folder';
  };
  attributes: {
    groups: Schema.Attribute.Component<'shared.color-group', true>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['overview', 'shades', 'wcag']>;
    wcagNote: Schema.Attribute.Text;
    wcagPairs: Schema.Attribute.Component<'shared.wcag-pair', true>;
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

export interface SharedTypographyColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_typography_columns';
  info: {
    displayName: 'Typography Column';
    icon: 'align-justify';
  };
  attributes: {
    label: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'shared.typography-row', true>;
    weight: Schema.Attribute.String;
  };
}

export interface SharedTypographyRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_typography_rows';
  info: {
    displayName: 'Typography Row';
    icon: 'font';
  };
  attributes: {
    size: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface SharedTypographyTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_typography_tabs';
  info: {
    displayName: 'Typography Tab';
    icon: 'folder';
  };
  attributes: {
    columns: Schema.Attribute.Component<'shared.typography-column', true>;
    fontName: Schema.Attribute.String;
    label: Schema.Attribute.String;
    preview: Schema.Attribute.String;
  };
}

export interface SharedWcagPair extends Struct.ComponentSchema {
  collectionName: 'components_shared_wcag_pairs';
  info: {
    displayName: 'WCAG Pair';
    icon: 'check';
  };
  attributes: {
    aaaLarge: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    aaaNormal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    aaLarge: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    aaNormal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    background: Schema.Attribute.String;
    foreground: Schema.Attribute.String;
    label: Schema.Attribute.String;
    ratio: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
      'sections.nc-phase': SectionsNcPhase;
      'sections.phase-showcase': SectionsPhaseShowcase;
      'sections.projects': SectionsProjects;
      'sections.qa-stages': SectionsQaStages;
      'sections.spacing': SectionsSpacing;
      'sections.tech-stack': SectionsTechStack;
      'sections.typography-scale': SectionsTypographyScale;
      'shared.brand-asset': SharedBrandAsset;
      'shared.callout': SharedCallout;
      'shared.code-block': SharedCodeBlock;
      'shared.code-step': SharedCodeStep;
      'shared.coding-patterns': SharedCodingPatterns;
      'shared.color-group': SharedColorGroup;
      'shared.color-swatch': SharedColorSwatch;
      'shared.color-tab': SharedColorTab;
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
      'shared.typography-column': SharedTypographyColumn;
      'shared.typography-row': SharedTypographyRow;
      'shared.typography-tab': SharedTypographyTab;
      'shared.wcag-pair': SharedWcagPair;
    }
  }
}
