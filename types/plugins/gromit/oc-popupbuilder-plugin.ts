import { FieldsRoot } from "../../fields.yaml";

interface PopupConfig {
    type: string;
    openBtnLabel?: string;
    openBtnClass?: string;
    closeBtnLabel?: string;
    closeBtnClass?: string;
    popupSize?: 'adaptive' | 'giant' | 'huge' | 'large' | 'medium' | 'small' | 'tiny';
    noPadding?: boolean;
    popupId?: string;
    inset?: boolean;
}

interface PopupConfigContent extends PopupConfig {
    type: 'content';
    content?: string;
    contentPartial?: string;
}

interface PopupConfigMsg extends PopupConfig {
    type: 'msg';
    msgType: 'info' | 'warning' | 'error' | 'success';
    content: string;
}

interface PopupConfigForm extends PopupConfig {
    type: 'form';
    title?: string;
    content?: string;
    contentPartial?: string;
    contentBelow?: string;
    contentPartialBelow?: string;
    actionBtnLabel?: string;
    actionBtnClass?: string;
    actionBtnRequestData?: any;
    actionOnClick?: string
    loadIndicator?: boolean;
    confirm?: string;
    closeOnSuccess?: boolean;
    successCallback?: string;
    form: FieldsRoot | string;
    modelClass?: string;
    buttons?: {
        label: string;
        class?: string;
        onClick: string;
        loadIndicator?: boolean;
        confirm?: string;
        closeOnSuccess?: boolean;
        requestData?: { [key: string]: any };
    }[];
}

export type PopupConfigRoot = PopupConfigContent | PopupConfigMsg | PopupConfigForm;
