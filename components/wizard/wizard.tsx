/* tslint-disable */
import { useState, useEffect } from 'react';

import axios from 'axios';
import SwipeableViews from 'react-swipeable-views';
import { useWindowSize } from 'usehooks-ts';

import { useFormik } from 'formik';

import { IForm, IFormState } from '@/interfaces/form';

import {
    WizardStepper,
    WizardQuestion,
    WizardContactForm,
    WizardNavigation
} from '@/components/wizard';

import formValidationSchema from '@/components/ui/form/formValidationSchema';

import { flattenFormValues, flattenFormValuesSub } from '@/lib/utils';
import { formInitialValues } from '@/datas/formInitialValue';

interface IWizardProps {
    formDatas: IForm;
}

const Wizard = ({ formDatas }: IWizardProps) => {
    const [swipeableActions, setSwipeableActions] = useState<{ updateHeight: () => void } | null>(
        null
    );
    const [activeStep, setActiveStep] = useState<number>(0);
    const [state, setState] = useState<IFormState>({
        baseApiUrl: 'null',
        submission: { status: false, message: null },
        receiverEmail: null
    });

    const { width, height } = useWindowSize();

    useEffect(() => {
        if (swipeableActions) {
            swipeableActions.updateHeight();
        }
    });

    const handleChange = (index: number): void => setActiveStep(index);
    const handleNext = (index: number) =>
        setActiveStep((prevActiveState) => prevActiveState + index);
    const handlePrev = (index: number) =>
        setActiveStep((prevActiveState) => prevActiveState - index);

    const { questions } = formDatas;

    const onSubmit = async () => {};

    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: formValidationSchema,
        onSubmit: onSubmit
    });

    return (
        <div>
            {/* Stepper + Form */}
            <div className="px-5 pt-3 pb-12 md:px-20 md:pt-6">
                <WizardStepper questions={questions} activeStep={activeStep} formik={formik} />
                <form
                    onSubmit={formik.handleSubmit}
                    className="px-1 mt-5 sm:px-5 xs:mt-10 md:mt-12 md:px-0">
                    <SwipeableViews
                        enableMouseEvents
                        index={activeStep}
                        //@ts-ignore
                        action={(actions: { updateHeight: () => void }) => {
                            setSwipeableActions(actions);
                        }}
                        animateHeight
                        onChangeIndex={handleChange}
                        springConfig={{
                            duration: '0.35s',
                            easeFunction: 'cubic-bezier(0.87, 0, 0.13, 1)',
                            delay: '0s'
                        }}
                        disabled>
                        {/* Questions */}
                        {questions.map((question, i) => (
                            <WizardQuestion
                                key={`question-${i}`}
                                id={i}
                                questions={questions}
                                question={question}
                                formik={formik}
                            />
                        ))}

                        {/* Contact */}
                        <WizardContactForm state={state} formik={formik} />
                    </SwipeableViews>
                </form>
            </div>

            {/* Nav */}
            <WizardNavigation
                state={state}
                activeStep={activeStep}
                handlePrev={handlePrev}
                handleNext={handleNext}
                formik={formik}
                questions={questions}
            />
        </div>
    );
};

export default Wizard;
