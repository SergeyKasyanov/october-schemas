export interface ConfigImportExportRoot {
    defaultRedirect?: string,

    defaultFormatOptions?: {
        fileFormat?: 'json' | 'csv' | 'csv_custom',
        customJson?: boolean,
        firstRowTitles?: boolean,
        delimiter?: string,
        enclosure?: string,
        escape?: string,
        encoding?: string
    },

    import?: {
        title: string,
        modelClass: string,
        list: string,
        form?: string,
        redirect?: string,
        permissions?: string | string[]
    },

    export?: {
        title?: string,
        modelClass?: string,
        list?: string,
        form?: string,
        fileName?: string,
        redirect?: string,
        useList?: boolean | string | {
            definition?: string,
            raw?: boolean
        }
    }
}
