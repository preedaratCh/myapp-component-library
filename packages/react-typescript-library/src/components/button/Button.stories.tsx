import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonColor, ButtonSize, ButtonType } from './Button.types';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            description: Object.values(ButtonType).join(' | '),
        },
        size: {
            control: 'select',
            options: Object.values(ButtonSize),
            description: Object.values(ButtonSize).join(' | '),
        },
        color: {
            control: 'select',
            options: Object.values(ButtonColor),
            description: Object.values(ButtonColor).join(' | '),
        },
        disabled: { control: 'boolean' },
        block: { control: 'boolean' },
        rounded: { control: 'boolean' },
        outline: { control: 'boolean' },
        label: { control: 'text' },
    },
    args: {
        type: ButtonType.Button,
        label: 'Button',
        size: ButtonSize.Medium,
        color: ButtonColor.Primary,
        disabled: false,
        block: false,
        rounded: false,
        outline: false,
    },
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {};

export const Color: Story = {
    parameters: {
        docs: {
            source: {
                code: null,
            },
        },
    },
    render: () => (
        <div className="flex flex-row justify-center">
            <div className="mr-3">
                <Button label="Primary" color={ButtonColor.Primary} />
            </div>
            <div className="mr-3">
                <Button label="Secondary" color={ButtonColor.Secondary} />
            </div>
            <div className="mr-3">
                <Button label="Info" color={ButtonColor.Info} />
            </div>
            <div className="mr-3">
                <Button label="Success" color={ButtonColor.Success} />
            </div>
            <div className="mr-3">
                <Button label="Warning" color={ButtonColor.Warning} />
            </div>
            <div className="mr-3">
                <Button label="Error" color={ButtonColor.Error} />
            </div>
        </div>
    ),
};
export const Outline: Story = {
    parameters: {
        docs: {
            source: {
                code: null,
            },
        },
    },
    render: () => (
        <div className="flex flex-row justify-center">
            <div className="mr-3">
                <Button label="Primary" color={ButtonColor.Primary} outline />
            </div>
            <div className="mr-3">
                <Button
                    label="Secondary"
                    color={ButtonColor.Secondary}
                    outline
                />
            </div>
            <div className="mr-3">
                <Button label="Info" color={ButtonColor.Info} outline />
            </div>
            <div className="mr-3">
                <Button label="Success" color={ButtonColor.Success} outline />
            </div>
            <div className="mr-3">
                <Button label="Warning" color={ButtonColor.Warning} outline />
            </div>
            <div className="mr-3">
                <Button label="Error" color={ButtonColor.Error} outline />
            </div>
        </div>
    ),
};
export const Rounded: Story = {
    parameters: {
        docs: {
            source: {
                code: null,
            },
        },
    },
    render: () => (
        <div className="flex flex-row justify-center">
            <div className="mr-3">
                <Button label="Primary" color={ButtonColor.Primary} rounded />
            </div>
            <div className="mr-3">
                <Button
                    label="Secondary"
                    color={ButtonColor.Secondary}
                    rounded
                />
            </div>
            <div className="mr-3">
                <Button label="Info" color={ButtonColor.Info} rounded />
            </div>
            <div className="mr-3">
                <Button label="Success" color={ButtonColor.Success} rounded />
            </div>
            <div className="mr-3">
                <Button label="Warning" color={ButtonColor.Warning} rounded />
            </div>
            <div className="mr-3">
                <Button label="Error" color={ButtonColor.Error} rounded />
            </div>
        </div>
    ),
};
export const Disabled: Story = {
    parameters: {
        docs: {
            source: {
                code: null,
            },
        },
    },
    render: () => (
        <div className="flex flex-row justify-center">
            <div className="mr-3">
                <Button label="Primary" color={ButtonColor.Primary} disabled />
            </div>
            <div className="mr-3">
                <Button
                    label="Secondary"
                    color={ButtonColor.Secondary}
                    disabled
                />
            </div>
            <div className="mr-3">
                <Button label="Info" color={ButtonColor.Info} disabled />
            </div>
            <div className="mr-3">
                <Button label="Success" color={ButtonColor.Success} disabled />
            </div>
            <div className="mr-3">
                <Button label="Warning" color={ButtonColor.Warning} disabled />
            </div>
            <div className="mr-3">
                <Button label="Error" color={ButtonColor.Error} disabled />
            </div>
        </div>
    ),
};
export const Block: Story = {
    parameters: {
        docs: {
            source: {
                code: null,
            },
        },
    },
    render: () => (
        <>
            <Button label="Primary" color={ButtonColor.Primary} block />
        </>
    ),
};
export const Small: Story = {
    parameters: {
        docs: {
            source: {
                code: null,
            },
        },
    },
    render: () => (
        <div className="flex flex-row justify-center">
            <div className="mr-3">
                <Button
                    label="Primary"
                    color={ButtonColor.Primary}
                    size={ButtonSize.Small}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Secondary"
                    color={ButtonColor.Secondary}
                    size={ButtonSize.Small}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Info"
                    color={ButtonColor.Info}
                    size={ButtonSize.Small}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Success"
                    color={ButtonColor.Success}
                    size={ButtonSize.Small}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Warning"
                    color={ButtonColor.Warning}
                    size={ButtonSize.Small}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Error"
                    color={ButtonColor.Error}
                    size={ButtonSize.Small}
                />
            </div>
        </div>
    ),
};
export const Large: Story = {
    parameters: {
        docs: {
            source: {
                code: null,
            },
        },
    },
    render: () => (
        <div className="flex flex-row justify-center">
            <div className="mr-3">
                <Button
                    label="Primary"
                    color={ButtonColor.Primary}
                    size={ButtonSize.Large}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Secondary"
                    color={ButtonColor.Secondary}
                    size={ButtonSize.Large}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Info"
                    color={ButtonColor.Info}
                    size={ButtonSize.Large}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Success"
                    color={ButtonColor.Success}
                    size={ButtonSize.Large}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Warning"
                    color={ButtonColor.Warning}
                    size={ButtonSize.Large}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Error"
                    color={ButtonColor.Error}
                    size={ButtonSize.Large}
                />
            </div>
        </div>
    ),
};
