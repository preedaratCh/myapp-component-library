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
    Danger = 'danger',
}
export enum ButtonIconPosition { 
    Left = 'left',
    Right = 'right',
}
export interface ButtonProps {
    label: string;
    type?: ButtonType;
    size?: ButtonSize;
    color?: ButtonColor;
    icon?: React.ReactNode;
    iconPosition?: ButtonIconPosition
    disabled?: boolean;
    block?: boolean;
    rounded?: boolean;
    outline?: boolean;
    active?: boolean;
    onClick?: () => void;
}
