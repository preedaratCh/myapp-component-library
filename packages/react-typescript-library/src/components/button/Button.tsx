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
    const buttonClassNames = classNames('font-medium m-0 border-2 border-solid rounded-md hover:text-white focus:text-white', {
        'cursor-not-allowed opacity-50': disabled,
        'w-full': block,
        'w-auto': !block,
        'rounded-full': rounded,
        'py-1 px-3 text-sm': size === ButtonSize.Small,
        'py-2 px-4 text-md': size === ButtonSize.Medium,
        'py-3 px-5 text-lg': size === ButtonSize.Large,
        // Filled styles
        'bg-primary-500 border-primary-500': backgroundColor === ButtonColor.Primary && !outline,
        'bg-secondary-500 border-secondary-500': backgroundColor === ButtonColor.Secondary && !outline,
        'bg-success-500 border-success-500': backgroundColor === ButtonColor.Success && !outline,
        'bg-info-500 border-info-500': backgroundColor === ButtonColor.Info && !outline,
        'bg-warning-500 border-warning-500': backgroundColor === ButtonColor.Warning && !outline,
        'bg-danger-500 border-danger-500': backgroundColor === ButtonColor.Danger && !outline,
        // Outline styles
        'text-white': !outline,
        'bg-transparent': outline && !active,
        'border-primary-500 text-primary': backgroundColor === ButtonColor.Primary && outline,
        'border-secondary-500 text-secondary': backgroundColor === ButtonColor.Secondary && outline,
        'border-success-500 text-success': backgroundColor === ButtonColor.Success && outline,
        'border-info-500 text-info': backgroundColor === ButtonColor.Info && outline,
        'border-warning-500 text-warning': backgroundColor === ButtonColor.Warning && outline,
        'border-danger-500 text-danger': backgroundColor === ButtonColor.Danger && outline,
        // Active styles
        'active bg-primary-700': active && backgroundColor === ButtonColor.Primary,
        'active bg-secondary-700': active && backgroundColor === ButtonColor.Secondary,
        'active bg-success-700': active && backgroundColor === ButtonColor.Success,
        'active bg-info-700': active && backgroundColor === ButtonColor.Info,
        'active bg-warning-700': active && backgroundColor === ButtonColor.Warning,
        'active bg-danger-700': active && backgroundColor === ButtonColor.Danger,
        // Outline active styles
        'active bg-primary-700 text-white': active && backgroundColor === ButtonColor.Primary && outline,
        'active bg-secondary-700 text-white': active && backgroundColor === ButtonColor.Secondary && outline,
        'active bg-success-700 text-white': active && backgroundColor === ButtonColor.Success && outline,
        'active bg-info-700 text-white': active && backgroundColor === ButtonColor.Info && outline,
        'active bg-warning-700 text-white': active && backgroundColor === ButtonColor.Warning && outline,
        'active bg-danger-700 text-white': active && backgroundColor === ButtonColor.Danger && outline,
        // Hover and focus styles
        'hover:bg-primary-600 focus:bg-primary-600': backgroundColor === ButtonColor.Primary,
        'hover:bg-secondary-600 focus:bg-secondary-600': backgroundColor === ButtonColor.Secondary,
        'hover:bg-success-600 focus:bg-success-600': backgroundColor === ButtonColor.Success,
        'hover:bg-info-600 focus:bg-info-600': backgroundColor === ButtonColor.Info,
        'hover:bg-warning-600 focus:bg-warning-600': backgroundColor === ButtonColor.Warning,
        'hover:bg-danger-600 focus:bg-danger-600': backgroundColor === ButtonColor.Danger,
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
