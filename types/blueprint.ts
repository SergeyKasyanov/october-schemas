import { AnyColumn } from "./columns.yaml";
import { AnyScope } from "./config_filter.yaml";
import { ListStructure } from "./config_list.yaml";
import { AnyField } from "./fields.yaml";

interface MixinField {
    type: 'mixin',
    source: string,
}

interface EntriesField {
    type: 'entries'
    source: string,
    maxItems?: number,
    displayMode?: 'relation' | 'recordfinder' | 'taglist',
    conditions?: string,
    scope?: string,
    inverse?: boolean
}

type TailorField = (AnyField & {
    validation?: string | string[],
    column?: AnyColumn | false | 'invisible',
    scope?: AnyScope | false,
    translatable?: boolean,
}) | MixinField | EntriesField;

interface Navigation {
    label?: string,
    order?: number,
    parent?: 'settings' | 'content' | string,
    icon?: string,
    iconSvg?: string,
}

export interface Blueprint {
    uuid?: string,
    handle: string,
    type?: 'entry' | 'single' | 'structure' | 'stream' | 'global' | 'mixin',
    name: string,
    fields?: { [field: string]: TailorField },
    columns?: { [column: string]: AnyColumn },
    scopes?: { [scope: string]: AnyScope },
    groups?: {
        [group: string]: {
            name: string,
            fields: {
                [field: string]: TailorField
            }
        }
    },
    validation?: {
        rules: { [field: string]: string },
        attributeNames: { [field: string]: string },
        customMessages: { [field: string]: string }
    }
    structure?: ListStructure,
    drafts?: boolean,
    pagefinder?: boolean,
    multisite?: true | false | 'sync',
    customMessages?: { [key: 'buttonCreate' | string]: string }
    showExport?: boolean,
    showImport?: boolean,
    parentNavigation?: Navigation | false,
    navigation?: Navigation | false
}
