import type { FieldsRoot } from "./fields.yaml"

interface PageDesign {
    displayMode?: 'custom' | 'basic' | 'survey' | 'sidebar' | 'popup' | 'document',
    horizontalMode?: boolean,
    surveyMode?: boolean,
    size?: number | 'auto',
    sidebarSize?: number,
    secondaryLabel?: string,
}

export interface ConfigFormRoot {
    // required
    name: string,
    form: string | FieldsRoot,
    modelClass: string,

    design?: PageDesign,

    // pages
    create?: {
        design?: PageDesign,
        title?: string,
        form?: string | FieldsRoot,
        redirect?: string,
        redirectClose?: string,
        customMessages?: {
            flashCreate?: string,
        }
    },
    update?: {
        design?: PageDesign,
        title?: string,
        form?: string | FieldsRoot,
        redirect?: string,
        redirectClose?: string,
        customMessages?: {
            notFound?: string,
            flashUpdate?: string,
            flashDelete?: string,
        }
    },
    preview?: {
        design?: PageDesign,
        title?: string,
        form?: string | FieldsRoot,
        customMessages?: {
            notFound?: string,
        }
    }

    // optional
    defaultRedirect?: string,
    customMessages?: {
        notFound?: string,
        flashCreate?: string,
        flashUpdate?: string,
        flashDelete?: string,
    },
    permissions?: {
        modelCreate?: string | string[],
        modelUpdate?: string | string[],
        modelDelete?: string | string[],
        modelPreview?: string | string[],
    },
}
