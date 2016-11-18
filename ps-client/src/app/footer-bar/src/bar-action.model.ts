export interface BarAction {
    label: string;
    link?: string;
    icon?: string;
    name?: BAR_ACTION
}

export enum BAR_ACTION {SIGN_IN, SIGN_UP, OPEN_PROFILE, NONE}
