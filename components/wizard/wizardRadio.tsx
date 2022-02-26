import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { QuestionsEntity, ScopesEntity } from '@/interfaces/form';

const BlueRadio = withStyles({
    root: {
        '&$checked': {
            color: '#072499'
        }
    },
    checked: {}
})((props) => <Radio color="default" {...props} />);

interface Props {
    id: number;
    formik: any;
    question: QuestionsEntity;
    scopeId: number;
    scope: ScopesEntity;
    context: 'choice';
}

const WizardRadio = ({ id, formik, question, scope, scopeId, context }: Props) => {
    const updateFormikKey = context === 'choice' ? 'choix' : '';
    const name = `questions[${id}][${question.title}][${scope.title}][${updateFormikKey}]`;

    return (
        <>
            <FormControl
                component="fieldset"
                data-cy={`radio-question-${id}-scope-${scopeId}-${updateFormikKey}`}
                error={formik.touched[name] && formik.errors?.[name]?.length > 0}>
                <RadioGroup
                    aria-label={scope.title}
                    name={name}
                    value={
                        formik.values.questions[id][question.title][scope.title][updateFormikKey]
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                    <div
                        className={clsx(
                            `grid lg:gap-2 `,
                            { 'grid-cols-2': context === 'choice' },
                            {
                                'grid-cols-2 lg:grid-flow-col': context === 'subquestion'
                            }
                        )}>
                        {scope.options.map((option) => {
                            return (
                                <FormControlLabel
                                    key={option.title}
                                    value={option.title}
                                    control={<BlueRadio />}
                                    label={option.title}
                                />
                            );
                        })}
                    </div>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default WizardRadio;
