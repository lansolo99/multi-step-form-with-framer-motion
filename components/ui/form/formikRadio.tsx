import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

import { IFormikRadioEntity } from '@/interfaces/form';

const BlueRadio = withStyles({
    root: {
        '&$checked': {
            color: '#072499'
        }
    },
    checked: {}
})((props) => <Radio color="default" {...props} />);

interface Props {
    formik: any;
    radio: IFormikRadioEntity;
}

const FormikRadio = ({ formik, radio: { name, label, options } }: Props) => {
    const targetName = `contact[${name}]`;
    return (
        <>
            <FormControl
                component="fieldset"
                data-cy={`radio-${name}`}
                error={formik.touched[name] && formik.errors?.[name]?.length > 0}>
                <FormLabel component="legend">
                    {label} <span className="text-red-500">*</span>
                </FormLabel>
                <RadioGroup
                    aria-label={label}
                    name={targetName}
                    value={formik.values.contact[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                    <div className="flex mt-1">
                        {options.map((option) => {
                            return (
                                <FormControlLabel
                                    key={option}
                                    value={option}
                                    control={<BlueRadio />}
                                    label={option}
                                />
                            );
                        })}
                    </div>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default FormikRadio;
