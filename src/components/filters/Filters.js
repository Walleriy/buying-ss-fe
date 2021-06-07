import './filters.css'
import { sortOptions } from './sortOptions'
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const Filters = ({type, onChange}) => {
    const styles = useStyles();

    const selectOptions = sortOptions.map((item) => {
        return (
            <MenuItem key={item.en} value={item.en}>
                {item.ua}
            </MenuItem>
        )
    })
    console.log(type)

    return (
        <div>
            <h4>Фільтри</h4>
            <FormControl className={styles.formControl}>
                <InputLabel id="demo-simple-select-label" >
                    Сортувати
                </InputLabel>
                <Select
                    data-cy='user-sorting'
                    labelId="demo-simple-select-label"
                    id='checkbox'
                    value={type}
                    onChange={onChange}
                >
                    {selectOptions}
                </Select>
            </FormControl>
        </div>
    )
}
