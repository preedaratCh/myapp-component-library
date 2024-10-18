export default {
    content: [
        './.storybook/*.{js,jsx,ts,tsx,mdx}',
        './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2A7B88',
                    100: '#E0F2FF', // Lightest
                    200: '#A4D3E2',
                    300: '#79B5C1',
                    400: '#4D99A3',
                    500: '#2A7B88', // Base
                    600: '#1A5B67',
                    700: '#0E3C46',
                    800: '#0A2A30',
                    900: '#061C24', // Darkest
                },
                secondary: {
                    DEFAULT: '#8C9BAE',
                    100: '#F7FAFC', // Lightest
                    200: '#E1E6EB',
                    300: '#C6D3D9',
                    400: '#A8B4C2',
                    500: '#8C9BAE', // Base
                    600: '#5C6B7D',
                    700: '#4A5568',
                    800: '#2D3748',
                    900: '#1A202C', // Darkest
                },
                info: {
                    DEFAULT: '#1AB2FF',
                    100: '#E5F8FF', // Lightest
                    200: '#B3E8FF',
                    300: '#80D6FF',
                    400: '#4CC4FF',
                    500: '#1AB2FF', // Base
                    600: '#0099CC',
                    700: '#007B99',
                    800: '#005C7A',
                    900: '#003F5A', // Darkest
                },
                success: {
                    DEFAULT: '#48BB78',
                    100: '#F0FFF4', // Lightest
                    200: '#C6F6D5',
                    300: '#9AE6B4',
                    400: '#68D391',
                    500: '#48BB78', // Base
                    600: '#38A169',
                    700: '#2F855A',
                    800: '#276749',
                    900: '#22543D', // Darkest
                },
                warning: {
                    DEFAULT: '#F6B93B',
                    100: '#FFFAF0', // Lightest
                    200: '#FEF2D1',
                    300: '#FCE48C',
                    400: '#F9D85C',
                    500: '#F6B93B', // Base
                    600: '#F29F00',
                    700: '#D58D00',
                    800: '#B57900',
                    900: '#8B5B00', // Darkest
                },
                error: {
                    DEFAULT: '#FF1A1A',
                    100: '#FFE5E5', // Lightest
                    200: '#FFB3B3',
                    300: '#FF7F7F',
                    400: '#FF4C4C',
                    500: '#FF1A1A', // Base
                    600: '#E60000',
                    700: '#B30000',
                    800: '#800000',
                    900: '#4D0000', // Darkest
                },
            },
        },
    },
    plugins: [],
};
