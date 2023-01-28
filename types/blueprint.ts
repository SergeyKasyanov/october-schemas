import { AnyColumn } from "./columns.yaml";
import { AnyScope } from "./config_filter.yaml";
import { ListStructure } from "./config_list.yaml";
import { AnyField, Fields } from "./fields.yaml";

interface MixinField {
    type: 'mixin',
    source: string,
}

interface EntriesField {
    type: 'entries'
    source: string,
    maxItems?: number,
    displayMode?: 'relation' | 'recordfinder',
    conditions?: string,
    scope?: string
}

type TailorField = (AnyField & {
    validation?: string | string[],
    column?: AnyColumn,
    scope?: AnyScope
}) | MixinField | EntriesField;

interface Navigation {
    label?: string,
    order?: number,
    parent?: string,
    icon?: string,
    iconSvg?: string,
}

export interface Blueprint {
    uuid?: string,
    type?: 'entry' | 'single' | 'structure' | 'stream',
    handle: string,
    name: string,

    parentNavigation?: Navigation,
    navigation?: Navigation,

    fields: {
        [field: string]: TailorField
    },

    groups?: {
        [group: string]: {
            name: string,
            fields: {
                [field: string]: TailorField
            }
        }
    },

    structure?: ListStructure,
    drafts?: boolean,
}
