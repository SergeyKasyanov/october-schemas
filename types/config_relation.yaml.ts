import { ColumnsRoot } from "./columns.yaml"
import { ConfigFilterRoot } from "./config_filter.yaml"
import { ListStructure } from "./config_list.yaml"
import { FieldsRoot } from "./fields.yaml"

interface Mode {
    form?: string | FieldsRoot,
    list?: string | ColumnsRoot,
    showFlash?: boolean,
    showSearch?: boolean,
    showSorting?: boolean,
    defaultSort?: string | {
        column: string,
        direction: 'asc' | 'desc'
    },
    recordsPerPage?: number,
    noRecordsMessage?: string,
    conditions?: string,
    scope?: string,
    searchMode?: 'all' | 'any' | 'exact',
    searchScope?: string,
    filter?: string | ConfigFilterRoot | [],
    customPageName?: string
}

interface ViewMode extends Mode {
    showCheckboxes?: boolean,
    recordUrl?: string,
    customViewPath?: string,
    recordOnClick?: string | false,
    toolbarPartial?: string,
    toolbarButtons?: string | ('create' | 'update' | 'delete' | 'add' | 'remove' | 'link' | 'unlink')[] | false,
}

interface ManageMode extends Mode {
    title?: string,
    context?: 'create' | 'update' | string
}

interface RelationDefinition {
    label: string
    view?: ViewMode
    manage?: ManageMode
    structure?: ListStructure
    pivot?: {
        form: string | {
            fields: string | FieldsRoot
        }
    }
    emptyMessage?: string
    readOnly?: boolean
    deferredBinding?: boolean
    popupSize?: 'giant' | 'huge' | 'large' | 'small' | 'tiny' | 'adaptive',
    customMessages?: {
        buttonCreate?: string,
        buttonUpdate?: string,
        buttonAdd?: string,
        buttonLink?: string,
        buttonDelete?: string,
        buttonDeleteMany?: string,
        buttonRemove?: string,
        buttonRemoveMany?: string,
        buttonUnlink?: string,
        buttonUnlinkMany?: string,
        confirmDelete?: string,
        confirmUnlink?: string,
        titlePreviewForm?: string,
        titleCreateForm?: string,
        titleUpdateForm?: string,
        titleLinkForm?: string,
        titleAddForm?: string,
        titlePivotForm?: string,
        flashCreate?: string,
        flashUpdate?: string,
        flashDelete?: string,
        flashAdd?: string,
        flashLink?: string,
        flashRemove?: string,
        flashUnlink?: string,
    }
}

export interface ConfigRelationRoot {
    [relation: string]: RelationDefinition
}
