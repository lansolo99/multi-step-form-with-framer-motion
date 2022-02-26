module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '400px',
                sm: '600px',
                md: '960px',
                lg: '1280px',
                xl: '1920px'
            },
            maxWidth: {
                480: '480px',
                980: '980px',
                1248: '1248px'
            },
            minWidth: {
                480: '480px',
                980: '980px'
            },
            inset: {
                '1/2': '50%'
            },
            fontFamily: {
                ubuntu: ['Ubuntu', 'sans-serif']
            },
            colors: {
                'bp-primary': {
                    400: '#1d3daf',
                    500: '#051B71'
                },
                'bp-secondary': {
                    500: '#369AD4'
                },
                bpgrey: {
                    400: '#D8D8D8',
                    500: '#F9F9F9',
                    600: '#fafafa'
                },
                bpcyan: {
                    500: '#42B8EB'
                },
                indigo: {
                    100: '#dee4f7',
                    200: '#bec8ef',
                    300: '#9dade6',
                    400: '#7d91de',
                    500: '#5c76d6',
                    600: '#4a5eab',
                    700: '#374780',
                    800: '#252f56',
                    900: '#12182b'
                }
            },
            spacing: {
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%'
            }
        }
    },
    variants: {
        extend: {}
    }
};
