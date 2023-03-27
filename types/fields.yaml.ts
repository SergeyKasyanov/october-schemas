import { ColumnsRoot } from "./columns.yaml"
import { Groups } from "./repeater_groups.yaml";

interface Trigger {
    action: 'show' | 'hide' | 'enable' | 'disable' | 'empty' | 'fill[]' | string,
    field: string,
    condition: 'checked' | 'unchecked' | 'value[]' | string,
}

interface Preset {
    field: string,
    type: 'exact' | 'slug' | 'url' | 'camel' | 'file',
    prefixInput?: string,
}

export interface ThumbsOptions {
    mode?: 'exact' | 'portrait' | 'landscape' | 'auto' | 'fit' | 'crop',
    offset?: number[],
    quality?: number,
    sharpen?: number
}

//
// Fields
//

interface Field {
    attributes?: object,
    autoFocus?: boolean,
    changeHandler?: string,
    comment?: string,
    commentAbove?: string,
    commentHtml?: boolean,
    containerAttributes?: string[] & object,
    context?: 'create' | 'update' | 'preview' | string | string[],
    cssClass?: string,
    default?: any,
    defaultFrom?: string,
    dependsOn?: string | string[],
    disabled?: boolean,
    hidden?: boolean,
    label?: string,
    order?: number,
    permissions?: string | string[],
    placeholder?: string,
    preset?: string | Preset,
    readOnly?: boolean,
    required?: boolean,
    span?: 'auto' | 'left' | 'right' | 'full' | 'adaptive' | 'row',
    spanClass?: string,
    stretch?: boolean,
    tab?: string,
    trigger?: Trigger,
    type?: string,
    value?: any,
    valueFrom?: string,
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
    options?: string | string[] | { [key: number | string]: number | string | string[] },
    emptyOption?: string,
    showSearch?: boolean
}

interface RadioListField extends Field {
    type: 'radio',
    options?: string | string[] | { [key: number | string]: string | number | string[] },
    cssClass?: 'inline-options' | string,
    inlineOptions?: boolean
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
    options?: string | string[] | { [key: number | string]: string | number | string[] },
    quickselect?: boolean,
    cssClass?: 'inline-options' | string,
    inlineOptions?: boolean
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
    path?: string
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
    availableColors?: string | string[],
    allowEmpty?: boolean,
    allowCustom?: boolean,
    showAlpha?: boolean,
    showInput?: boolean
}

interface DataTableField extends Field {
    type: 'datatable',
    adding?: boolean,
    btnAddRowLabel?: string,
    btnAddRowBelowLabel?: string,
    btnDeleteRowLabel?: string,
    deleting?: boolean,
    dynamicHeight?: boolean,
    fieldName?: string,
    height?: number | false,
    keyFrom?: number,
    postbackHandlerName?: string,
    recordsPerPage?: number | false,
    searching?: boolean,
    toolbar?: string[],
    columns: {
        [column: string]: {
            type: 'string' | 'checkbox' | 'dropdown' | 'autocomplete',
            options?: string,
            readOnly?: boolean,
            title: string,
            width?: number,
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
    twelveHour?: boolean,
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
    deferredBinding?: boolean,
    thumbOptions?: ThumbsOptions
}

interface MarkdownEditorField extends Field {
    type: 'markdown',
    size?: 'tiny' | 'small' | 'large' | 'huge' | 'giant',
    sideBySide?: boolean
}

interface MediaFinderField extends Field {
    type: 'mediafinder',
    mode?: 'file' | 'folder' | 'image',
    imageWidth?: number,
    imageHeight?: number,
    maxItems?: number,
    thumbOptions?: ThumbsOptions
}

interface NestedFormField extends Field {
    type: 'nestedform',
    showPanel?: boolean,
    form: string | FieldsRoot,
    defaultCreate?: boolean
}

interface RecordFinderField extends Field {
    type: 'recordfinder',
    keyFrom?: string,
    nameFrom?: string,
    descriptionFrom?: string,
    title?: string,
    list: string | ColumnsRoot | [],
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
    emptyOption?: string,
    conditions?: string,
    scope?: string,
    useController?: boolean,
    showSearch?: boolean,
    defaultSort?: string | string[]
}

interface RepeaterField extends Field {
    type: 'repeater',
    form: string | FieldsRoot,
    prompt?: string,
    displayMode?: 'accordion' | 'builder',
    useTabs?: boolean,
    itemsExpanded?: boolean,
    titleFrom?: string,
    minItems?: number,
    maxItems?: number,
    groups?: string | Groups,
    groupKeyFrom?: string,
    showReorder?: boolean,
    showDuplicate?: boolean,
}

interface RichEditorField extends Field {
    type: 'richeditor',
    toolbarButtons?: string | 'fullscreen' | 'bold' | 'italic' | 'underline' | 'strikeThrough' | 'subscript' | 'superscript' | 'fontFamily' | 'fontSize' | '|' | 'color' | 'emoticons' | 'inlineStyle' | 'paragraphStyle' | '|' | 'paragraphFormat' | 'align' | 'formatOL' | 'formatUL' | 'outdent' | 'indent' | 'quote' | 'insertHR' | '-' | 'insertLink' | 'insertImage' | 'insertVideo' | 'insertAudio' | 'insertFile' | 'insertTable' | 'undo' | 'redo' | 'clearFormatting' | 'selectAll' | 'html',
    size?: 'tiny' | 'small' | 'large' | 'huge' | 'giant',
}

interface PageFinderField extends Field {
    type: 'pagefinder',
    singleMode?: boolean
}

interface SensitiveField extends Field {
    type: 'sensitive',
    mode?: 'textarea' | 'text',
    allowCopy?: boolean,
    hiddenPlaceholder?: string,
    hideOnTabChange?: boolean
}

interface TagListField extends Field {
    type: 'taglist',
    mode?: 'string' | 'array' | 'relation',
    separator?: 'space' | 'comma',
    customTags?: boolean,
    options?: string | string[] | { [key: string]: string } | true,
    nameFrom?: string,
    useKey?: boolean,
}

//
// FieldsRoot
//

export type AnyField = CustomField | TextField | NumberField | PasswordField | EmailField | TextareaField | DropdownField | RadioListField | BalloonSelectorField
    | CheckboxField | CheckboxListField | SwitchField | SectionField | HintField | RulerField | PartialField | CodeEditorField | ColorPickerField | DataTableField | DatePickerField
    | FileUploadField | MarkdownEditorField | MediaFinderField | NestedFormField | RecordFinderField | RelationField | RepeaterField | RichEditorField | PageFinderField | SensitiveField | TagListField;

export interface Fields {
    [field: string]: AnyField
}

export interface FormTabs {
    stretch?: boolean,
    defaultTab?: string,
    activeTab?: string | number,
    icons?: { [tabName: string]: string },
    lazy?: string[],
    linkable?: boolean,
    cssClass?: string,
    paneCssClass?: { [tabName: string]: string },
    fields: Fields
}

export interface FieldsRoot {
    fields?: Fields,
    tabs?: FormTabs,
    secondaryTabs?: FormTabs
}
