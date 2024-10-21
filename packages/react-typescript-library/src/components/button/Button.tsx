import {
    ButtonColor,
    ButtonIconPosition,
    ButtonProps,
    ButtonSize,
    ButtonType,
} from './Button.types';
import classNames from 'classnames';

const Button: React.FC<ButtonProps> = ({
    label,
    type = ButtonType.Button,
    size = ButtonSize.Medium,
    color: backgroundColor = ButtonColor.Primary,
    icon,
    iconPosition = ButtonIconPosition.Left,
    disabled = false,
    block = false,
    rounded = false,
    outline = false,
    ...props
}: ButtonProps) => {
    const buttonClassNames = classNames('font-medium m-0 border-2 border-solid rounded-md', {
        'cursor-not-allowed opacity-50': disabled,
        'w-full': block,
        'w-auto': !block,
        'rounded-full': rounded,
        'py-1 px-3 text-sm': size === ButtonSize.Small,
        'py-2 px-4 text-md': size === ButtonSize.Medium,
        'py-3 px-5 text-lg': size === ButtonSize.Large,
        // Outline styles
        'text-white': !outline,
        'bg-transparent': outline,
        'border-primary-500 text-primary': backgroundColor === ButtonColor.Primary && outline,
        'border-secondary-500 text-secondary': backgroundColor === ButtonColor.Secondary && outline,
        'border-success-500 text-success': backgroundColor === ButtonColor.Success && outline,
        'border-info-500 text-info': backgroundColor === ButtonColor.Info && outline,
        'border-warning-500 text-warning': backgroundColor === ButtonColor.Warning && outline,
        'border-danger-500 text-danger': backgroundColor === ButtonColor.Danger && outline,
        // Filled styles
        'bg-primary-500 border-primary-500': backgroundColor === ButtonColor.Primary && !outline,
        'bg-secondary-500 border-secondary-500': backgroundColor === ButtonColor.Secondary && !outline,
        'bg-success-500 border-success-500': backgroundColor === ButtonColor.Success && !outline,
        'bg-info-500 border-info-500': backgroundColor === ButtonColor.Info && !outline,
        'bg-warning-500 border-warning-500': backgroundColor === ButtonColor.Warning && !outline,
        'bg-danger-500 border-danger-500': backgroundColor === ButtonColor.Danger && !outline,
    });
    const iconClassNames = classNames('mr-2', {
        'ml-2': iconPosition === ButtonIconPosition.Right,
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
