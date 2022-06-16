interface Trigger {
    action: 'show' | 'hide' | 'enable' | 'disable' | 'empty' | string,
    field: string,
    condition: 'checked' | 'unchecked' | 'value[]' | string,
}

interface Preset {
    field: string,
    type: 'exact' | 'slug' | 'url' | 'camel' | 'file',
    prefixInput?: string,
}

interface Field {
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
    span?: 'auto' | 'left' | 'right' | 'full' | string,
    spanClass?: string,
    comment?: string,
    commentAbove?: string,
    commentHtml?: boolean,
    type?: string,
    context?: 'create' | 'update' | 'preview' | string | string[],
    required?: boolean,
    stretch?: boolean,
    attributes?: string[] & object,
    containerAttributes?: string[] & object,
    cssClass?: string,
    dependsOn?: string | string[],
    changeHandler?: string,
    trigger?: Trigger,
    preset?: string | Preset,
    permissions?: string | string[],
    placeholder?: string,
}

interface TextField extends Field {
    type?: 'text',
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
    size?: 'tiny' | 'small' | 'large' | 'huge' | 'giant' | string
}

interface DropdownField extends Field {
    type: 'dropdown',
    options?: string | string[] | object,
    emptyOption?: string,
    showSearch?: boolean
}

interface RadioListField extends Field {
    type: 'radio',
    options?: string | string[] | object,
    cssClass?: 'inline-options' | string
}

interface BalloonSelectorField extends Field {
    type: 'balloon-selector',
    options?: string | string[] | object,
}

interface CheckboxField extends Field {
    type: 'checkbox',
    default?: boolean
}

interface CheckboxListField extends Field {
    type: 'checkboxlist',
    options?: string | string[] | object,
    quickselect?: boolean,
    cssClass?: 'inline-options' | string
}

interface SwitchField extends Field {
    type: 'switch',
    default?: boolean
}

interface CustomField extends Field {
    [property: string]: any,
}

interface Fields {
    [field: string]: TextField | NumberField
}

interface Root {
    fields: Fields,
    tabs: {
        fields: Fields
    },
    secondaryTabs: {
        fields: Fields
    }
}
