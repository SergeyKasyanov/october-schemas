import { ColumnsRoot } from "./columns.yaml"

interface Trigger {
    action: 'show' | 'hide' | 'enable' | 'disable' | 'empty',
    field: string,
    condition: 'checked' | 'unchecked' | 'value[]' | string,
}

interface Preset {
    field: string,
    type: 'exact' | 'slug' | 'url' | 'camel' | 'file',
    prefixInput?: string,
}

//
// Fields
//

interface Field {
    type?: string,
    label?: string,
    value?: any,
    valueFrom?: string,
    default?: any,
    defaultFrom?: string,
    autoFocus?: boolean,
    readOnly?: boolean,
    disabled?: boolean,
    hidden?: boolean,
    tab?: string,
    span?: 'auto' | 'left' | 'right' | 'full' | 'adaptive',
    spanClass?: string,
    comment?: string,
    commentAbove?: string,
    commentHtml?: boolean,
    context?: 'create' | 'update' | 'preview' | string | string[],
    required?: boolean,
    stretch?: boolean,
    attributes?: object,
    containerAttributes?: string[] & object,
    cssClass?: string,
    dependsOn?: string | string[],
    changeHandler?: string,
    trigger?: Trigger,
    preset?: string | Preset,
    permissions?: string | string[],
    placeholder?: string,
}

interface CustomField extends Field {
    [property: string]: any,
}

interface TextField extends Field {
    type: 'text',
    default?: string,
    placeholder?: string
}

interface NumberField extends Field {
    type: 'number',
    min?: number,
    max?: number,
    step?: number,
    validation?: string[]
}

interface PasswordField extends Field {
    type: 'password',
}

interface EmailField extends Field {
    type: 'email',
    validation?: string[]
}

interface TextareaField extends Field {
    type: 'textarea',
    size?: 'tiny' | 'small' | 'large' | 'huge' | 'giant',
}

interface DropdownField extends Field {
    type: 'dropdown',
    options?: string | string[] | { [key: string]: string },
    emptyOption?: string,
    showSearch?: boolean
}

interface RadioListField extends Field {
    type: 'radio',
    options?: string | string[] | { [key: string]: string },
    cssClass?: 'inline-options' | string
}

interface BalloonSelectorField extends Field {
    type: 'balloon-selector',
    options?: string | string[] | { [key: string]: string },
}

interface CheckboxField extends Field {
    type: 'checkbox',
    default?: boolean
}

interface CheckboxListField extends Field {
    type: 'checkboxlist',
    options?: string | string[] | { [key: string]: string },
    quickselect?: boolean,
    cssClass?: 'inline-options' | string
}

interface SwitchField extends Field {
    type: 'switch',
    default?: boolean
}

//
// UI
//

interface SectionField extends Field {
    type: 'section'
}

interface HintField extends Field {
    type: 'hint',
    mode?: 'tip' | 'info' | 'warning' | 'danger' | 'success',
    path: string
}

interface RulerField extends Field {
    type: 'ruler'
}

interface PartialField extends Field {
    type: 'partial',
    path?: string
}

//
// Widgets
//

interface CodeEditorField extends Field {
    type: 'codeeditor',
    language?: 'html' | 'css' | 'php' | 'javascript' | string,
    showGutter?: boolean,
    wrapWords?: boolean,
    fontSize?: number,
}

interface ColorPickerField extends Field {
    type: 'colorpicker',
    availableColors?: string | string[]
}

interface DataTableField extends Field {
    type: 'datatable',
    adding?: boolean,
    deleting?: boolean,
    searching?: boolean,
    recordsPerPage?: number | false,
    columns: {
        [column: string]: {
            title: string,
            type: 'string' | 'checkbox' | 'dropdown' | 'autocomplete',
            width?: number,
            readOnly?: boolean,
            options?: string,
            validation?: {
                integer?: {
                    allowNegative?: boolean,
                    message: string
                },
                float?: {
                    allowNegative?: boolean,
                    message: string
                },
                length?: {
                    min: number,
                    max: number,
                    message: string
                },
                regex?: {
                    pattern: string,
                    message: string
                },
                required: {
                    message: string
                }
            }
        }
    }
}

interface DatePickerField extends Field {
    type: 'datepicker',
    mode: 'date' | 'datetime' | 'time',
    format?: string,
    minDate?: string,
    maxDate?: string,
    firstDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    showWeekNumber?: boolean,
    useTimezone?: boolean
}

interface FileUploadField extends Field {
    type: 'fileupload',
    mode?: 'file' | 'image',
    size?: 'tiny' | 'small' | 'large' | 'huge' | 'giant' | 'adaptive',
    imageWidth?: number,
    imageHeight?: number,
    fileTypes?: string,
    mimeTypes?: string,
    maxFilesize?: number,
    maxFiles?: number,
    useCaption?: boolean,
    prompt?: string,
    attachOnUpload?: boolean,
    thumbOptions?: {
        mode?: 'exact' | 'portrait' | 'landscape' | 'auto' | 'fit' | 'crop',
        offset?: number[],
        quality?: number,
        sharpen?: number
    },
}

interface MarkdownEditorField extends Field {
    type: 'markdown',
    size?: 'tiny' | 'small' | 'large' | 'huge' | 'giant',
    mode?: 'tab' | 'split',
}

interface MediaFinderField extends Field {
    type: 'mediafinder',
    mode?: 'file' | 'image',
    imageWidth?: number,
    imageHeight?: number,
    maxItems?: number
}

interface NestedFormField extends Field {
    type: 'nestedform',
    showPanel?: boolean,
    form: string | FieldsRoot
}

interface RecordFinderField extends Field {
    type: 'recordfinder',
    keyFrom?: string,
    nameFrom?: string,
    descriptionFrom?: string,
    title?: string,
    prompt?: string,
    list: string | ColumnsRoot,
    recordsPerPage?: number,
    conditions?: string,
    scope?: string,
    searchMode?: 'all' | 'any' | 'exact',
    searchScope?: string,
    useRelation?: boolean,
    modelClass?: string,
}

interface RelationField extends Field {
    type: 'relation',
    nameFrom?: string,
    select?: string,
    order?: 'asc' | 'desc',
    emptyOption?: string,
    scope?: string,
    useController?: boolean,
}

interface RepeaterField extends Field {
    type: 'repeater',
    form: string | FieldsRoot,
    prompt?: string,
    displayMode?: 'accordion' | 'builder',
    itemsExpanded?: boolean,
    titleFrom?: string,
    minItems?: number,
    maxItems?: number,
    groups?: string | {
        [group: string]: {
            name: string,
            description?: string,
            icon?: string,
            fields: FieldsRoot,
        }
    },
    groupKeyFrom?: string,
    showReorder?: boolean,
    showDuplicate?: boolean,
}

interface RichEditorField extends Field {
    type: 'richeditor',
    toolbarButtons?: string | 'fullscreen' | 'bold' | 'italic' | 'underline' | 'strikeThrough' | 'subscript' | 'superscript' | 'fontFamily' | 'fontSize' | '|' | 'color' | 'emoticons' | 'inlineStyle' | 'paragraphStyle' | '|' | 'paragraphFormat' | 'align' | 'formatOL' | 'formatUL' | 'outdent' | 'indent' | 'quote' | 'insertHR' | '-' | 'insertLink' | 'insertImage' | 'insertVideo' | 'insertAudio' | 'insertFile' | 'insertTable' | 'undo' | 'redo' | 'clearFormatting' | 'selectAll' | 'html',
    size?: 'tiny' | 'small' | 'large' | 'huge' | 'giant',
}

interface SensitiveField extends Field {
    type: 'sensitive',
    allowCopy?: boolean,
    hiddenPlaceholder?: string,
    hideOnTabChange?: boolean
}

interface TagListField extends Field {
    type: 'taglist',
    mode?: 'string' | 'array' | 'relation',
    separator?: 'space' | 'comma',
    customTags?: boolean,
    options?: string | string[] | { [key: string]: string },
    nameFrom?: string,
    useKey?: boolean,
}

//
// FieldsRoot
//

interface Fields {
    [field: string]:
    CustomField | TextField | NumberField | PasswordField | EmailField | TextareaField | DropdownField | RadioListField | BalloonSelectorField
    | CheckboxField | CheckboxListField | SwitchField | SectionField | HintField | RulerField | PartialField | CodeEditorField | ColorPickerField | DataTableField | DatePickerField
    | FileUploadField | MarkdownEditorField | MediaFinderField | NestedFormField | RecordFinderField | RelationField | RepeaterField | RichEditorField | SensitiveField | TagListField
}

interface FormTabs {
    stretch?: boolean,
    defaultTab?: string,
    cssClass?: string,
    lazy?: string[],
    paneCssClass?: { [tabNumber: number]: string },
    icons?: { [tabName: number]: string },
    fields: Fields
}

export interface FieldsRoot {
    fields?: Fields,
    tabs?: FormTabs,
    secondaryTabs?: FormTabs
}
