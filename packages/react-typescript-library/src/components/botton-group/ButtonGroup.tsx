import classNames from 'classnames';
import Button from '../button/Button';
import { ButtonGroupProps } from './ButtonGroup.types';
import './ButtonGroup.css';
import { ButtonColor, ButtonProps, ButtonSize } from '../button/Button.types';
import { useEffect, useState } from 'react';

const ButtonGroup: React.FC<ButtonGroupProps> = ({
    buttons,
    size = ButtonSize.Medium,
    selectedIndex,
    vertical = false,
    outline = false,
    rounded = false,
    block = false,
}) => {
    const buttonGroupClassNames = classNames('button-group', {
        'button-group-vertical': vertical,
        'button-group-outline': outline,
        'button-group-rounded': rounded && !vertical,
        'button-group-block': block,
    });

    try {
        return (
            <div className={buttonGroupClassNames}>
                {buttons?.map((button, index) => {
                    const {
                        size: buttonSize,
                        block: buttonBlock,
                        rounded: buttonRounded,
                        active: buttonActive,
                        ...buttonProps
                    } = button;
                    return (
                        <Button
                            key={index}
                            size={size}
                            active={selectedIndex === index}
                            outline={outline}
                            {...buttonProps}
                        />
                    );
                })}
            </div>
        );
    } catch (error) {
        console.error('ButtonGroup', error);
        return null;
    }
};
export default ButtonGroup;
