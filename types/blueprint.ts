import { AnyColumn } from "./columns.yaml";
import { AnyScope } from "./config_filter.yaml";
import { ListStructure } from "./config_list.yaml";
import { AnyField, FieldsRoot } from "./fields.yaml";

interface MixinField {
    type: 'mixin',
    source: string,
}

interface EntriesField {
    type: 'entries'
    source: string,
    maxItems?: number,
    displayMode?: 'relation' | 'recordfinder' | 'taglist' | 'controller',
    conditions?: string,
    scope?: string,
    inverse?: boolean,
    toolbarButtons?: string | ('create' | 'update' | 'delete' | 'add' | 'remove')[] | false,
    customMessages?: {
        buttonCreate?: string,
        buttonAdd?: string,
        buttonDelete?: string,
        buttonDeleteMany?: string,
        buttonRemove?: string,
        buttonRemoveMany?: string,
        confirmDelete?: string,
        titleCreateForm?: string,
        titleUpdateForm?: string,
        titleAddForm?: string,
        flashAdd?: string,
        flashCreate?: string,
        flashUpdate?: string,
        flashDelete?: string,
    }
}

interface NestedItemsField {
    type: 'nesteditems'
    maxDepth?: number,
    form: string | FieldsRoot,
    customMessages?: {
        buttonCreate?: string,
        buttonDelete?: string,
        buttonDeleteMany?: string,
        confirmDelete?: string,
        titleCreateForm?: string,
        titleUpdateForm?: string,
        flashCreate?: string,
        flashUpdate?: string,
        flashDelete?: string,
    }
}

type TailorField = (AnyField & {
    validation?: string | string[],
    column?: AnyColumn | boolean | 'invisible',
    scope?: AnyScope | boolean,
    translatable?: boolean,
}) | MixinField | EntriesField | NestedItemsField;

interface Navigation {
    label?: string,
    order?: number,
    parent?: 'settings' | 'content' | string,
    icon?: string,
    iconSvg?: string,
}

interface PageFinder {
    context?: 'item' | 'list' | string,
    replacements?: { [param: string]: string }
}

type BlueprintColumns = { [column: string]: AnyColumn | string | boolean | 'invisible' }
type BlueprintScopes = { [scope: string]: AnyScope | string | boolean }

export interface Blueprint {
    uuid?: string,
    handle: string,
    type?: 'entry' | 'single' | 'structure' | 'stream' | 'global' | 'mixin',
    name: string,
    fields?: { [field: string]: TailorField },
    columns?: BlueprintColumns,
    scopes?: BlueprintScopes,
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
    pagefinder?: PageFinder | 'item' | 'list' | boolean,
    multisite?: boolean | 'sync' | 'locale' | 'all',
    customMessages?: { [key: 'buttonCreate' | string]: string }
    showExport?: boolean,
    showImport?: boolean,
    parentNavigation?: Navigation | false,
    navigation?: Navigation | false
}
