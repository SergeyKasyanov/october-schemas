import { ColumnsRoot } from "./columns.yaml"
import { ConfigFilterRoot } from "./config_filter.yaml"

export interface ListStructure {
    showTree?: boolean
    treeExpanded?: boolean
    showReorder?: boolean
    showSorting?: boolean,
    maxDepth?: number
    dragRow?: boolean,
    permissions?: string | string[]
}

export interface ConfigListRoot {
    // required
    title: string,
    list: string | ColumnsRoot | [],
    modelClass: string,

    // optional
    filter?: string | ConfigFilterRoot | [],
    recordUrl?: string,
    recordOnClick?: string | false,
    noRecordsMessage?: string,
    deleteMessage?: string,
    noRecordsDeletedMessage?: string,
    recordsPerPage?: number,
    perPageOptions?: string[]|number[],
    showPageNumbers?: boolean,
    showSorting?: boolean,
    showCheckboxes?: boolean,
    showSetup?: boolean,
    structure?: ListStructure,
    customViewPath?: string,
    customPageName?: string,
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
