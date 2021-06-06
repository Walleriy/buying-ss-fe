import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    h1: {
        fontSize: '3rem'
    },
    input: {
        borderBottom: '1px solid #fff!important',
        boxShadow: '0 1px 0 0 #fff!important',
        '& label': {
            color: '#ffffff!important',
            '&:focus': {
                color: '#ffeb3b!important',
            }
        },
        '&:focus': {
            borderBottom: '1px solid #ffeb3b!important',
            boxShadow: '0 1px 0 0 #ffeb3b!important',
        }
    }
})
