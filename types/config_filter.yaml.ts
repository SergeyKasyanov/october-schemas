interface Scope {
    label: string,
    type: string,
    permissions?: string | string[],
    dependsOn?: string,
    scope?: string
}

interface CheckboxScope extends Scope {
    type: 'checkbox',
    default?: boolean | 1 | 0,
    conditions: string
}

interface SwitchScope extends Scope {
    type: 'switch',
    default?: boolean | 0 | 1,
    conditions: string[]
}

interface TextScope extends Scope {
    type: 'text',
    modelScope?: string,
    conditions?: {
        exact?: boolean | string,
        contains?: boolean | string
    }
}

interface NumberScope extends Scope {
    type: 'number',
    modelScope?: string,
    conditions?: {
        exact?: boolean | string,
        greater?: boolean | string,
        between?: boolean | string
        lesser?: boolean | string
    }
}

interface DropdownScope extends Scope {
    type: 'dropdown',
    modelClass?: string,
    options?: string | string[] | { [key: string]: string },
    conditions?: string,
    emptyOption?: string
}

interface GroupScope extends Scope {
    type: 'group',
    nameFrom?: string,
    valueFrom?: string,
    modelClass?: string,
    options?: string | string[] | { [key: string]: string },
    conditions?: string,
    default?: string[]
}

interface DateScope extends Scope {
    type: 'date',
    default?: string,
    minDate?: string,
    maxDate?: string,
    firstDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    showWeekNumber?: boolean,
    useTimezone?: boolean,
    conditions?: {
        equals?: boolean | string,
        notEquals?: boolean | string,
        between?: boolean | string,
        before?: boolean | string,
        after?: boolean | string,
    }
}

interface CustomScope extends Scope {
    [property: string]: any;
}

export type AnyScope = CheckboxScope | SwitchScope | TextScope | NumberScope | DropdownScope | GroupScope | DateScope | CustomScope

export interface ConfigFilterRoot {
    scopes: {
        [scope: string]: AnyScope
    }
}
