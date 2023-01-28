interface Column {
    type?: string,

    label?: string,
    shortLabel?: string,
    align?: 'left' | 'right' | 'center',
    hidden?: boolean,
    sortable?: boolean,
    searchable?: boolean,
    invisible?: boolean,
    clickable?: boolean,

    valueFrom?: string,
    displayFrom?: string,
    default?: string | number,
    select?: string,
    relation?: string,
    relationCount?: boolean
    width?: string | number,
    cssClass?: string
    headCssClass?: string,
    permissions?: string | string[]
}

interface TextColumn extends Column {
    type: 'text'
}

interface NumberColumn extends Column {
    type: 'number',
    format: string
}

interface ImageColumn extends Column {
    type: 'image',
    width?: number,
    height?: number,
    options?: {
        mode?: 'exact' | 'portrait' | 'landscape' | 'auto' | 'fit' | 'crop',
        offset?: number[],
        quality?: number,
        sharpen?: number
    },
}

interface SwitchColumn extends Column {
    type: 'switch',
    options?: string[]
}

interface SummaryColumn extends Column {
    type: 'summary',
    limitChars?: number,
    endChars?: string
}

interface DateTimeColumn extends Column {
    type: 'datetime',
    format?: string,
    useTimezone?: boolean
}

interface DateColumn extends Column {
    type: 'date',
    useTimezone?: boolean
}

interface TimeColumn extends Column {
    type: 'time',
    useTimezone?: boolean
}

interface TimeSinceColumn extends Column {
    type: 'timesince'
}

interface TimeTenseColumn extends Column {
    type: 'timetense'
}

interface SelectableColumn extends Column {
    type: 'selectable',
    options?: string | string[] | { [key: string]: string }
}

interface PartialColumn extends Column {
    type: 'partial',
    path?: string
}

interface ColorPickerColumn extends Column {
    type: 'colorpicker'
}

interface LinkageColumn extends Column {
    type: 'linkage'
    attributes?: { [key: string]: string }
}

interface CustomColumn extends Column {
    [property: string]: any,
}

export type AnyColumn = TextColumn | NumberColumn | ImageColumn | SwitchColumn | SummaryColumn
    | DateTimeColumn | DateColumn | TimeColumn | TimeSinceColumn | TimeTenseColumn
    | SelectableColumn | PartialColumn | ColorPickerColumn | LinkageColumn | CustomColumn;

export interface ColumnsRoot {
    columns: {
        [column: string]: AnyColumn
    }
}
