import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import {
    ButtonColor,
    ButtonIconPosition,
    ButtonSize,
    ButtonType,
} from './Button.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
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
        icon: {control: 'select'},
        iconPosition: {
            control: 'select',
            description: Object.values(ButtonIconPosition).join(' | '),
        },
        disabled: { control: 'boolean' },
        block: { control: 'boolean' },
        rounded: { control: 'boolean' },
        outline: { control: 'boolean' },
    },
    args: {
        label: 'Default',
        type: ButtonType.Button,
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
                code: `
<Button label="Primary" color={ButtonColor.Primary} />
<Button label="Secondary" color={ButtonColor.Secondary} />
<Button label="Info" color={ButtonColor.Info} />
<Button label="Success" color={ButtonColor.Success} />
<Button label="Warning" color={ButtonColor.Warning} />
<Button label="Danger" color={ButtonColor.Danger} />
                `,
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
                <Button label="Danger" color={ButtonColor.Danger} />
            </div>
        </div>
    ),
};
export const Outline: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<Button label="Primary" color={ButtonColor.Primary} outline />
<Button label="Secondary" color={ButtonColor.Secondary} outline />
<Button label="Info" color={ButtonColor.Info} outline />
<Button label="Success" color={ButtonColor.Success} outline />
<Button label="Warning" color={ButtonColor.Warning} outline />
<Button label="Danger" color={ButtonColor.Danger} outline />
                `,
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
                <Button label="Danger" color={ButtonColor.Danger} outline />
            </div>
        </div>
    ),
};
export const Rounded: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<Button label="Primary" color={ButtonColor.Primary} rounded />
<Button label="Secondary" color={ButtonColor.Secondary} rounded />
<Button label="Info" color={ButtonColor.Info} rounded />
<Button label="Success" color={ButtonColor.Success} rounded />
<Button label="Warning" color={ButtonColor.Warning} rounded />
<Button label="Danger" color={ButtonColor.Danger} rounded />
                `,
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
                <Button label="Danger" color={ButtonColor.Danger} rounded />
            </div>
        </div>
    ),
};
export const Disabled: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<Button label="Primary" color={ButtonColor.Primary} disabled />
<Button label="Secondary" color={ButtonColor.Secondary} disabled />
<Button label="Info" color={ButtonColor.Info} disabled />
<Button label="Success" color={ButtonColor.Success} disabled />
<Button label="Warning" color={ButtonColor.Warning} disabled />
<Button label="Danger" color={ButtonColor.Danger} disabled />
                `,
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
                <Button label="Danger" color={ButtonColor.Danger} disabled />
            </div>
        </div>
    ),
};
export const Block: Story = {
    parameters: {
        docs: {
            source: {
                code: `<Button label="Block" color={ButtonColor.Primary} block />`,
            },
        },
    },
    render: () => (
        <>
            <Button label="Block" color={ButtonColor.Primary} block />
        </>
    ),
};
export const Icon: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<Button 
    label="Icon Left" 
    color={ButtonColor.Primary} 
    icon={<FontAwesomeIcon icon={faStar} />} 
/>
<Button 
    label="Icon Right" 
    color={ButtonColor.Primary} 
    icon={<FontAwesomeIcon icon={faStar} />} 
    iconPosition={ButtonIconPosition.Right} 
/>
`               
            },
        },
    },
    render: () => (
        <div className="flex flex-row justify-center">
            <div className="mr-3">
                <Button
                    label="Icon Left"
                    color={ButtonColor.Primary}
                    icon={<FontAwesomeIcon icon={faStar} />}
                />
            </div>
            <div className="mr-3">
                <Button
                    label="Icon Right"
                    color={ButtonColor.Primary}
                    icon={<FontAwesomeIcon icon={faStar} />}
                    iconPosition={ButtonIconPosition.Right}
                />
            </div>
        </div>
    ),
};
export const Small: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<Button label="Primary" color={ButtonColor.Primary} size={ButtonSize.Small} />
<Button label="Secondary" color={ButtonColor.Secondary} size={ButtonSize.Small} />
<Button label="Info" color={ButtonColor.Info} size={ButtonSize.Small} />
<Button label="Success" color={ButtonColor.Success} size={ButtonSize.Small} />
<Button label="Warning" color={ButtonColor.Warning} size={ButtonSize.Small} />
<Button label="Danger" color={ButtonColor.Danger} size={ButtonSize.Small} />     
                `,
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
                    label="Danger"
                    color={ButtonColor.Danger}
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
                code: `
<Button label="Primary" color={ButtonColor.Primary} size={ButtonSize.Large} />
<Button label="Secondary" color={ButtonColor.Secondary} size={ButtonSize.Large} />
<Button label="Info" color={ButtonColor.Info} size={ButtonSize.Large} />
<Button label="Success" color={ButtonColor.Success} size={ButtonSize.Large} />
<Button label="Warning" color={ButtonColor.Warning} size={ButtonSize.Large} />
<Button label="Danger" color={ButtonColor.Danger} size={ButtonSize.Large} />
                `,
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
                    label="Danger"
                    color={ButtonColor.Danger}
                    size={ButtonSize.Large}
                />
            </div>
        </div>
    ),
};
