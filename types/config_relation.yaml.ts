import { ColumnsRoot } from "./columns.yaml"
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
    filter?: string,
}

interface ViewMode extends Mode {
    showCheckboxes?: boolean,
    recordUrl?: string,
    customViewPath?: string,
    recordOnClick?: string,
    toolbarPartial?: string,
    toolbarButtons?: string | ('create' | 'update' | 'delete' | 'add' | 'remove' | 'link' | 'unlink')[] | false,
    structure?: {
        showTree: boolean,
        treeExpanded: boolean,
        showReorder: boolean
        maxDepth?: number
        dragRow?: boolean
    }
}

interface ManageMode extends Mode {
    title?: string,
    context?: 'create' | 'update' | string
}

export interface ConfigRelationRoot {
    [relation: string]: {
        label: string,
        view?: ViewMode,
        manage?: ManageMode,
        pivot?: {
            form: string | {
                fields: string | object
            }
        },
        emptyMessage?: string
        readOnly?: boolean,
        deferredBinding?: boolean
        customMessages?: {
            buttonCreate?: string,
            buttonUpdate?: string,
            buttonAdd?: string,
            buttonLink?: string,
            buttonDelete?: string,
            buttonRemove?: string,
            buttonUnlink?: string,
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
}
