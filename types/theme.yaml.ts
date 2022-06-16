import { FieldsRoot } from "./fields.yaml";

export interface ThemeRoot {
    name: string,
    author: string,
    homepage: string,
    description: string,
    previewImage?: string,
    code?: string,
    authorCode?: string,
    form?: string | FieldsRoot,
    require?: string[],
}
