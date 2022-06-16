import { ColumnsRoot } from "./columns.yaml"

export interface ConfigListRoot {
    // required
    title: string,
    list: string | ColumnsRoot,
    modelClass: string,

    // optional
    filter?: string,
    recordUrl?: string,
    recordOnClick?: string,
    noRecordsMessage?: string,
    deleteMessage?: string,
    noRecordsDeletedMessage?: string,
    recordsPerPage?: number,
    showPageNumbers?: boolean,
    showSorting?: boolean,
    showCheckboxes?: boolean,
    showSetup?: boolean,
    customViewPath?: string,

    structure?: {
        showTree: boolean,
        treeExpanded: boolean,
        showReorder: boolean
        maxDepth?: number
        dragRow?: boolean
    },
    defaultSort?: string | {
        column: string,
        direction: 'asc' | 'desc'
    },
    toolbar?: {
        buttons?: string,
        search?: {
            prompt?: string,
            mode?: 'all' | 'any' | 'exact',
            scope?: string,
            searchOnEnter?: boolean
        }
    },

    [property: string]: any
}
