import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsArchCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_arch_cards';
  info: {
    displayName: 'ArchCard';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCodingPatterns extends Struct.ComponentSchema {
  collectionName: 'components_sections_coding_patterns';
  info: {
    displayName: 'coding-patterns';
  };
  attributes: {};
}

export interface SectionsContactList extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_lists';
  info: {
    displayName: 'contact-list';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'sections.contacts', true>;
  };
}

export interface SectionsContacts extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'contacts';
  };
  attributes: {
    color: Schema.Attribute.String;
    initials: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface SectionsFolderArch extends Struct.ComponentSchema {
  collectionName: 'components_sections_folder_arches';
  info: {
    displayName: 'folder_arch';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.arch-card', true>;
    maincode: Schema.Attribute.Component<'shared.shared-code-block', false>;
  };
}

export interface SectionsGettingStarted extends Struct.ComponentSchema {
  collectionName: 'components_sections_getting_starteds';
  info: {
    displayName: 'GettingStarted';
  };
  attributes: {
    mainCode: Schema.Attribute.Component<'shared.shared-code-block', true>;
    steps: Schema.Attribute.Component<'shared.steps', true>;
  };
}

export interface SectionsMistakes extends Struct.ComponentSchema {
  collectionName: 'components_sections_mistakes';
  info: {
    displayName: 'mistakes';
  };
  attributes: {
    mistakeTable: Schema.Attribute.Component<'shared.shared-table', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPatterns extends Struct.ComponentSchema {
  collectionName: 'components_sections_patterns';
  info: {
    displayName: 'patterns';
  };
  attributes: {
    code: Schema.Attribute.Component<'shared.shared-code-block', false>;
    description: Schema.Attribute.Text;
    rules: Schema.Attribute.Component<'shared.simple-text', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProjects extends Struct.ComponentSchema {
  collectionName: 'components_sections_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {};
}

export interface SectionsTechStack extends Struct.ComponentSchema {
  collectionName: 'components_sections_tech_stacks';
  info: {
    displayName: 'TechStack';
  };
  attributes: {
    dataTable: Schema.Attribute.Component<'shared.shared-table', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCodeStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_code_steps';
  info: {
    displayName: 'code-step';
  };
  attributes: {
    code: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    language: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSharedCell extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_cells';
  info: {
    displayName: 'Shared.Cell';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface SharedSharedCodeBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_code_blocks';
  info: {
    displayName: 'Shared.CodeBlock';
  };
  attributes: {
    code: Schema.Attribute.Text;
    language: Schema.Attribute.String;
    mainCode: Schema.Attribute.String;
  };
}

export interface SharedSharedRows extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_rows';
  info: {
    displayName: 'Shared.Rows';
  };
  attributes: {
    cells: Schema.Attribute.Component<'shared.shared-cell', true>;
  };
}

export interface SharedSharedTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_tables';
  info: {
    displayName: 'Shared.Table';
  };
  attributes: {
    headers: Schema.Attribute.Component<'shared.shared-cell', true>;
    rows: Schema.Attribute.Component<'shared.shared-rows', true>;
  };
}

export interface SharedSimpleText extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_texts';
  info: {
    displayName: 'SimpleText';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    code: Schema.Attribute.Component<'shared.shared-code-block', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
      'sections.arch-card': SectionsArchCard;
      'sections.coding-patterns': SectionsCodingPatterns;
      'sections.contact-list': SectionsContactList;
      'sections.contacts': SectionsContacts;
      'sections.folder-arch': SectionsFolderArch;
      'sections.getting-started': SectionsGettingStarted;
      'sections.mistakes': SectionsMistakes;
      'sections.patterns': SectionsPatterns;
      'sections.projects': SectionsProjects;
      'sections.tech-stack': SectionsTechStack;
      'shared.code-step': SharedCodeStep;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.shared-cell': SharedSharedCell;
      'shared.shared-code-block': SharedSharedCodeBlock;
      'shared.shared-rows': SharedSharedRows;
      'shared.shared-table': SharedSharedTable;
      'shared.simple-text': SharedSimpleText;
      'shared.slider': SharedSlider;
      'shared.steps': SharedSteps;
      'shared.tool-feature': SharedToolFeature;
    }
  }
}
