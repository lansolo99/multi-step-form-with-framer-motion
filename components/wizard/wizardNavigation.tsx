import { QuestionsEntity, IFormState } from '@/interfaces/form';

import { WizardNavigationButton } from '@/components/wizard';

export interface Props {
    questions: QuestionsEntity[];
    activeStep: number;
    handlePrev: (index: number) => void;
    handleNext: (index: number) => void;
    formik: any;
    state: IFormState;
}

const WizardNavigation = ({
    activeStep,
    handlePrev,
    handleNext,
    questions,
    formik,
    state
}: Props) => {
    const isQuestionStep = activeStep < questions.length;

    const isCurrentQuestionValid = () => {
        if (isQuestionStep) {
            const IsAllChoicesFilled = questions[activeStep].scopes.every(
                (scope) =>
                    formik.values.questions[activeStep][questions[activeStep].title][scope.title]
                        .choix !== ''
            );

            return IsAllChoicesFilled;
        }

        return false;
    };

    const setActiveStepIndex = (direction: 'prev' | 'next') => {
        switch (direction) {
            case 'prev':
                return 1;
            case 'next':
                return 1;
        }
    };

    return (
        <nav className="flex justify-between w-full p-4 border-t border-gray-200">
            <WizardNavigationButton
                direction="prev"
                disabled={activeStep === 0 || state.submission.status}
                onClick={() => handlePrev(setActiveStepIndex('prev'))}
            />

            {isQuestionStep && (
                <WizardNavigationButton
                    direction="next"
                    disabled={!isCurrentQuestionValid() || state.submission.status}
                    onClick={() => handleNext(setActiveStepIndex('next'))}
                />
            )}
        </nav>
    );
};

export default WizardNavigation;
