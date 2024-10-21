import { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import {
    ButtonColor,
    ButtonIconPosition,
    ButtonProps,
    ButtonSize,
    ButtonType,
} from '../button/Button.types';

const buttons: ButtonProps[] = [
    { label: 'Button 1' },
    { label: 'Button 2' },
    { label: 'Button 3' },
    { label: 'Button 4' },
];
const meta: Meta<typeof ButtonGroup> = {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        buttons: {
            control: 'object',
            table: {
                type: {
                    summary: 'ButtonProps[]',
                    detail: `
[
    {
        label: string;
        type?: ButtonType;
        color?: ButtonColor;
        icon?: React.ReactNode;
        iconPosition?: ButtonIconPosition
        disabled?: boolean;
        outline?: boolean;
        onClick?: () => void;
    },
    { ... }
]
                        `,
                },
            },
        },
        size: {
            control: {
                type: 'select',
                options: Object.values(ButtonSize),
            },
            table: {
                type: {
                    summary: 'ButtonSize',
                    detail: Object.values(ButtonSize).join(' | '),
                },
            },
        },
        selectedIndex: {
            control: 'number',
            description: 'Index of the selected button, starting from 0',
            table: {
                type: {
                    summary: 'number',
                },
            },
        },
        vertical: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        outline: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        rounded: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        block: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
    args: {
        buttons: buttons,
        // NOTE: size: is not used in ButtonGroup, but it is passed to Button component
        // NOTE: block: is not used in ButtonGroup, but it is passed to Button component
        // NOTE: rounded: is not used in ButtonGroup, but it is passed to Button component
        // NOTE: active: is not used in ButtonGroup, but it is passed to Button component

        // NOTE: This is an example of how to pass props to the Button component
        // {
        //     label: 'Button',
        //     type: ButtonType.Button,
        //     color: ButtonColor.Primary,
        //     icon: <FontAwesomeIcon icon={faHome} />,
        //     iconPosition: ButtonIconPosition.Right,
        //     disabled: false,
        //     outline: false,
        //     onClick: () => {}
        // }, // support props from ButtonGroup
    },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;
export const Default: Story = {};
export const Mixed: Story = {
    args: {
        buttons: [
            {
                label: 'Button 1',
            },
            { label: 'Button 2' },
            {
                label: 'Button 3',
                color: ButtonColor.Danger,
                disabled: true,
                outline: false,
            },
            {
                label: 'Button 4',
                color: ButtonColor.Warning,
                outline: true,
            },
        ],
    },
};
export const Vertical: Story = {
    args: {
        vertical: true,
    },
};
export const Outline: Story = {
    args: {
        outline: true,
    },
};
export const VerticalOutline: Story = {
    args: {
        vertical: true,
        outline: true,
    },
};
export const Rounded: Story = {
    args: {
        rounded: true,
    },
};
export const RoundedOutline: Story = {
    args: {
        rounded: true,
        outline: true,
    },
};
export const Block: Story = {
    args: {
        block: true,
    },
};
export const BlockRounded: Story = {
    args: {
        block: true,
        rounded: true,
    },
};
export const BlockOutline: Story = {
    args: {
        block: true,
        outline: true,
    },
};
export const BlockVertical: Story = {
    args: {
        block: true,
        vertical: true,
    },
};
export const BlockVerticalOutline: Story = {
    args: {
        block: true,
        vertical: true,
        outline: true,
    },
};
export const SelectedIndex: Story = {
    args: {
        selectedIndex: 1,
    },
};
export const SelectedIndexVertical: Story = {
    args: {
        selectedIndex: 1,
        vertical: true,
    },
};
export const SelectedIndexOutline: Story = {
    args: {
        selectedIndex: 1,
        outline: true,
    },
};
export const SelectedIndexVerticalOutline: Story = {
    args: {
        selectedIndex: 1,
        vertical: true,
        outline: true,
    },
};
export const SelectedIndexRounded: Story = {
    args: {
        selectedIndex: 1,
        rounded: true,
    },
};
export const SelectedIndexRoundedOutline: Story = {
    args: {
        selectedIndex: 1,
        rounded: true,
        outline: true,
    },
};
export const SelectedIndexBlock: Story = {
    args: {
        selectedIndex: 1,
        block: true,
    },
};
export const SelectedIndexBlockRounded: Story = {
    args: {
        selectedIndex: 1,
        block: true,
        rounded: true,
    },
};
export const SelectedIndexBlockOutline: Story = {
    args: {
        selectedIndex: 1,
        block: true,
        outline: true,
    },
};
export const SelectedIndexBlockVertical: Story = {
    args: {
        selectedIndex: 1,
        block: true,
        vertical: true,
    },
};
export const SelectedIndexBlockVerticalOutline: Story = {
    args: {
        selectedIndex: 1,
        block: true,
        vertical: true,
        outline: true,
    },
};
