import {
    ButtonColor,
    ButtonIconPosition,
    ButtonProps,
    ButtonSize,
    ButtonType,
} from './Button.types';
import classNames from 'classnames';
import './Button.css';

const Button: React.FC<ButtonProps> = ({
    label,
    type = ButtonType.Button,
    size = ButtonSize.Medium,
    color: backgroundColor = ButtonColor.Secondary,
    icon,
    iconPosition = ButtonIconPosition.Left,
    disabled = false,
    block = false,
    rounded = false,
    outline = false,
    active = false,
    ...props
}: ButtonProps) => {
    const buttonClassNames = classNames('btn', {
        'btn-block': block,
        'btn-rounded': rounded,
        'btn-outline': outline,
        'active': active,
        // size styles
        'btn-sm': size === ButtonSize.Small,
        'btn-md': size === ButtonSize.Medium,
        'btn-lg': size === ButtonSize.Large,
        // Color styles
        'btn-primary': backgroundColor === ButtonColor.Primary,
        'btn-secondary': backgroundColor === ButtonColor.Secondary,
        'btn-success': backgroundColor === ButtonColor.Success,
        'btn-info': backgroundColor === ButtonColor.Info,
        'btn-warning': backgroundColor === ButtonColor.Warning,
        'btn-danger': backgroundColor === ButtonColor.Danger,
    });
    const iconClassNames = classNames('', {
        'ml-2': iconPosition === ButtonIconPosition.Right,
        'mr-2': iconPosition === ButtonIconPosition.Left,
    });
    

    return (
        <button
            type={type}
            disabled={disabled}
            className={buttonClassNames}
            {...props}
        >
            {icon && iconPosition === ButtonIconPosition.Left && (
                <span className={iconClassNames}>{icon}</span>
            )}
            {label}
            {icon && iconPosition === ButtonIconPosition.Right && (
                <span className={iconClassNames}>{icon}</span>
            )}
        </button>
    );
};

export default Button;
