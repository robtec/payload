/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "array-fields".
 */
export interface ArrayField {
  id: string;
  items: {
    text: string;
    id?: string;
  }[];
  collapsedArray: {
    text: string;
    id?: string;
  }[];
  localized: {
    text: string;
    id?: string;
  }[];
  readOnly: {
    text?: string;
    id?: string;
  }[];
  potentiallyEmptyArray: {
    text?: string;
    id?: string;
  }[];
  rowLabelAsFunction: {
    title?: string;
    id?: string;
  }[];
  rowLabelAsComponent: {
    title?: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "block-fields".
 */
export interface BlockField {
  id: string;
  blocks: (
    | {
        text: string;
        richText?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        number: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        subBlocks: (
          | {
              text: string;
              id?: string;
              blockName?: string;
              blockType: 'text';
            }
          | {
              number: number;
              id?: string;
              blockName?: string;
              blockType: 'number';
            }
        )[];
        id?: string;
        blockName?: string;
        blockType: 'subBlocks';
      }
    | {
        textInCollapsible?: string;
        textInRow?: string;
        id?: string;
        blockName?: string;
        blockType: 'tabs';
      }
  )[];
  collapsedByDefaultBlocks: (
    | {
        text: string;
        richText?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        number: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        subBlocks: (
          | {
              text: string;
              id?: string;
              blockName?: string;
              blockType: 'text';
            }
          | {
              number: number;
              id?: string;
              blockName?: string;
              blockType: 'number';
            }
        )[];
        id?: string;
        blockName?: string;
        blockType: 'subBlocks';
      }
    | {
        textInCollapsible?: string;
        textInRow?: string;
        id?: string;
        blockName?: string;
        blockType: 'tabs';
      }
  )[];
  localizedBlocks: (
    | {
        text: string;
        richText?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        number: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        subBlocks: (
          | {
              text: string;
              id?: string;
              blockName?: string;
              blockType: 'text';
            }
          | {
              number: number;
              id?: string;
              blockName?: string;
              blockType: 'number';
            }
        )[];
        id?: string;
        blockName?: string;
        blockType: 'subBlocks';
      }
    | {
        textInCollapsible?: string;
        textInRow?: string;
        id?: string;
        blockName?: string;
        blockType: 'tabs';
      }
  )[];
  i18nBlocks: {
    text?: string;
    id?: string;
    blockName?: string;
    blockType: 'text';
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "code-fields".
 */
export interface CodeField {
  id: string;
  javascript?: string;
  typescript?: string;
  json?: string;
  html?: string;
  css?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collapsible-fields".
 */
export interface CollapsibleField {
  id: string;
  text: string;
  group: {
    textWithinGroup?: string;
    subGroup: {
      textWithinSubGroup?: string;
    };
  };
  someText?: string;
  functionTitleField?: string;
  componentTitleField?: string;
  nestedTitle?: string;
  arrayWithCollapsibles: {
    innerCollapsible?: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "conditional-logic".
 */
export interface ConditionalLogic {
  id: string;
  text: string;
  toggleField?: boolean;
  fieldToToggle: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "date-fields".
 */
export interface DateField {
  id: string;
  default: string;
  timeOnly?: string;
  dayOnly?: string;
  dayAndTime?: string;
  monthOnly?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "radio-fields".
 */
export interface RadioField {
  id: string;
  radio?: 'one' | 'two' | 'three';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-fields".
 */
export interface GroupField {
  id: string;
  group: {
    text: string;
    defaultParent?: string;
    defaultChild?: string;
    subGroup: {
      textWithinGroup?: string;
      arrayWithinGroup: {
        textWithinArray?: string;
        id?: string;
      }[];
    };
  };
  potentiallyEmptyGroup: {
    text?: string;
  };
  groupInRow: {
    field?: string;
    secondField?: string;
    thirdField?: string;
  };
  secondGroupInRow: {
    field?: string;
    nestedGroup: {
      nestedField?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "indexed-fields".
 */
export interface IndexedField {
  id: string;
  text: string;
  uniqueText?: string;
  /**
   * @minItems 2
   * @maxItems 2
   */
  point?: [number, number];
  group: {
    localizedUnique?: string;
    /**
     * @minItems 2
     * @maxItems 2
     */
    point?: [number, number];
  };
  collapsibleLocalizedUnique?: string;
  collapsibleTextUnique?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "json-fields".
 */
export interface JsonField {
  id: string;
  json?: {
    [k: string]: unknown;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "number-fields".
 */
export interface NumberField {
  id: string;
  number?: number;
  min?: number;
  max?: number;
  positiveNumber?: number;
  negativeNumber?: number;
  decimalMin?: number;
  decimalMax?: number;
  defaultNumber?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "point-fields".
 */
export interface PointField {
  id: string;
  /**
   * @minItems 2
   * @maxItems 2
   */
  point: [number, number];
  /**
   * @minItems 2
   * @maxItems 2
   */
  localized?: [number, number];
  group: {
    /**
     * @minItems 2
     * @maxItems 2
     */
    point?: [number, number];
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relationship-fields".
 */
export interface RelationshipField {
  id: string;
  relationship:
    | {
        value: string | TextField;
        relationTo: 'text-fields';
      }
    | {
        value: string | ArrayField;
        relationTo: 'array-fields';
      };
  relationToSelf?: string | RelationshipField;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "text-fields".
 */
export interface TextField {
  id: string;
  text: string;
  localizedText?: string;
  i18nText?: string;
  defaultFunction?: string;
  defaultAsync?: string;
  overrideLength?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rich-text-fields".
 */
export interface RichTextField {
  id: string;
  title: string;
  selectHasMany?: ('one' | 'two' | 'three' | 'four' | 'five' | 'six')[];
  richText: {
    [k: string]: unknown;
  }[];
  richTextReadOnly?: {
    [k: string]: unknown;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "select-fields".
 */
export interface SelectField {
  id: string;
  select?: 'one' | 'two' | 'three';
  selectReadOnly?: 'one' | 'two' | 'three';
  selectHasMany?: ('one' | 'two' | 'three' | 'four' | 'five' | 'six')[];
  selectHasManyLocalized?: ('one' | 'two')[];
  selectI18n?: 'one' | 'two' | 'three';
  simple?: 'One' | 'Two' | 'Three';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tabs-fields".
 */
export interface TabsField {
  id: string;
  array: {
    text: string;
    id?: string;
  }[];
  blocks: (
    | {
        text: string;
        richText?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        number: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        subBlocks: (
          | {
              text: string;
              id?: string;
              blockName?: string;
              blockType: 'text';
            }
          | {
              number: number;
              id?: string;
              blockName?: string;
              blockType: 'number';
            }
        )[];
        id?: string;
        blockName?: string;
        blockType: 'subBlocks';
      }
    | {
        textInCollapsible?: string;
        textInRow?: string;
        id?: string;
        blockName?: string;
        blockType: 'tabs';
      }
  )[];
  group: {
    number: number;
  };
  textInRow: string;
  numberInRow: number;
  tab?: {
    array: {
      text: string;
      id?: string;
    }[];
    text?: string;
    defaultValue?: string;
  };
  namedTabWithDefaultValue?: {
    defaultValue?: string;
  };
  localizedTab?: {
    text?: string;
  };
  accessControlTab?: {
    text?: string;
  };
  hooksTab?: {
    beforeValidate?: boolean;
    beforeChange?: boolean;
    afterChange?: boolean;
    afterRead?: boolean;
  };
  textarea?: string;
  anotherText: string;
  nestedTab?: {
    text?: string;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uploads".
 */
export interface Upload {
  id: string;
  text?: string;
  media?: string | Upload;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uploads2".
 */
export interface Uploads2 {
  id: string;
  text?: string;
  media?: string | Uploads2;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
