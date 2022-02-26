import { WizardRadio } from '@/components/wizard';

import { QuestionsEntity } from '@/interfaces/form';

interface Props {
    questions: QuestionsEntity[];
    question: QuestionsEntity;
    id: number;
    formik: any;
}

const WizardQuestion = ({ questions, question, id, formik }: Props) => {
    const isCurrentStepVisible = () => {
        return true;
    };

    return (
        <div
            className={`flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10 ${
                isCurrentStepVisible() ? 'visible' : 'invisible'
            }`}>
            {/* Image */}
            <div className="w-full md:w-1/3 max-w-[350px] md:min-w-[260px] mx-auto">
                <div className="relative md:w-full before:block before:pb-[76.92%]">
                    <img
                        alt={question.title}
                        className="absolute inset-0 object-cover w-full h-full"
                        src={`./images/questions/0${id + 1}.png`}
                    />
                </div>
            </div>
            {/* Texts */}
            <div className="w-full md:w-2/3">
                <p className="text-xl font-bold md:text-[22px] md:leading-snug">{question.title}</p>
                <div className="mt-8 space-y-6">
                    {question.scopes.map((scope, i) => {
                        return (
                            <div key={`scope-${i}`}>
                                {scope.title !== 'Défaut' && (
                                    <p className="text-lg leading-snug md:text-lg">{scope.title}</p>
                                )}
                                <div className="mt-1 md:mt-0">
                                    <WizardRadio
                                        id={id}
                                        formik={formik}
                                        question={question}
                                        scopeId={scope.id}
                                        scope={scope}
                                        context="choice"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WizardQuestion;
