import { ThumbsOptions } from "./fields.yaml"

interface Column {
    label?: string,
    type?: string,
    default?: string | number,
    searchable?: boolean,
    invisible?: boolean,
    sortable?: boolean,
    sortableDefault?: 'asc' | 'desc',
    clickable?: boolean,
    select?: string,
    valueFrom?: string,
    displayFrom?: string,
    relation?: string,
    relationCount?: boolean
    cssClass?: string
    headCssClass?: string,
    width?: string | number,
    align?: 'left' | 'right' | 'center',
    hidden?: boolean,
    permissions?: string | string[]
    shortLabel?: string,
    order?: number,
    before?: string,
    after?: string
}

interface TextColumn extends Column {
    type: 'text'
}

interface NumberColumn extends Column {
    type: 'number',
    format?: string
}

interface ImageColumn extends Column {
    type: 'image',
    width?: number,
    height?: number,
    options?: ThumbsOptions
}

interface SwitchColumn extends Column {
    type: 'switch',
    options?: string[]
}

interface SummaryColumn extends Column {
    type: 'summary',
    limitChars?: number,
    limitWords?: number,
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

interface LinkageColumn extends Column {
    type: 'linkage'
    attributes?: { [key: string]: string }
}

interface PartialColumn extends Column {
    type: 'partial',
    path?: string
}

interface ColorPickerColumn extends Column {
    type: 'colorpicker'
}

interface CustomColumn extends Column {
    [property: string]: any,
}

export type AnyColumn = TextColumn | NumberColumn | ImageColumn | SwitchColumn | SummaryColumn
    | DateTimeColumn | DateColumn | TimeColumn | TimeSinceColumn | TimeTenseColumn
    | SelectableColumn | LinkageColumn | PartialColumn | ColorPickerColumn | CustomColumn;

export interface ColumnsRoot {
    columns: {
        [column: string]: AnyColumn
    }
}
