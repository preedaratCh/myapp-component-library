import type { Preview } from '@storybook/react';
import '../src/tailwind.css'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'none',
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#FFF',
                },
                {
                    name: 'dark',
                    value: '#333',
                },
            ],
        },
        
    },
};

export default preview;
