export enum ButtonType {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}
export enum ButtonSize {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
}
export enum ButtonColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Error = 'error',
}
export interface ButtonProps {
    type?: ButtonType;
    disabled?: boolean;
    block?: boolean;
    rounded?: boolean;
    outline?: boolean;
    size?: ButtonSize;
    color?: ButtonColor;
    label: string;
    onClick?: () => void;
}
