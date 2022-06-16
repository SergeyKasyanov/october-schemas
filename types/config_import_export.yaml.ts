interface Root {
    defaultRedirect?: string,

    defaultFormatOptions?: {
        fileFormat?: 'json' | 'csv',
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
