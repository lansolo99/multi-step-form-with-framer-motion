import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Ubuntu',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        fontSize: 14
    },
    overrides: {
        MuiInput: {
            root: {
                paddingBottom: '5px'
            }
        },
        MuiFormLabel: {
            asterisk: {
                color: 'red'
            }
        }
    }
});

export default theme;
