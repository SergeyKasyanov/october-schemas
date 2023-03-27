import { Fields } from "./fields.yaml"

interface RepeaterGroup {
    name: string,
    description?: string,
    icon?: string
    titleFrom?: string,
    useTabs?: boolean,
    groupKeyFrom?: string,
    fields: Fields
}

export interface Groups {
    [group: string]: RepeaterGroup
}
