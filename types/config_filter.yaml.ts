interface Scope {
    label: string,
    type: string,
    modelScope?: string,
    dependsOn?: string
}

interface CheckboxScope extends Scope {
    type: 'checkbox',
    default?: 0 | 1,
    conditions: string
}

interface SwitchScope extends Scope {
    type: 'switch',
    default?: 0 | 1,
    conditions: string[]
}

interface TextScope extends Scope {
    type: 'text',
    conditions?: {
        exact?: boolean | string,
        contains?: boolean | string
    }
}

interface NumberScope extends Scope {
    type: 'number',
    conditions?: {
        greater?: string,
        between?: string
    },
}

interface DropdownScope extends Scope {
    type: 'dropdown',
    options?: string | string[] | object
    conditions?: string
}

interface GroupScope extends Scope {
    type: 'group',
    nameFrom?: string,
    valueFrom?: string,
    modelClass?: string,
    options?: string | string[] | object,
    conditions?: string,
    default?: string[]
}

interface DateScope extends Scope {
    type: 'date',
    default?: string,
    minDate?: string,
    maxDate?: string,
    conditions?: {
        equals?: boolean,
        between?: boolean | string,
        before?: boolean | string,
        after?: boolean | string,
    }
}

interface Root {
    scopes: {
        [scope: string]: CheckboxScope | SwitchScope | TextScope | NumberScope | DropdownScope | GroupScope | DateScope
    }
}
