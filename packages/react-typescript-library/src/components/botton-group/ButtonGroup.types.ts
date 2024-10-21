import { ButtonProps, ButtonSize } from "../button/Button.types";

export interface ButtonGroupProps { 
    buttons?: ButtonProps[];
    size?: ButtonSize;
    selectedIndex?: number;
    vertical?: boolean;
    outline?: boolean;
    rounded?: boolean;
    block?: boolean;
}