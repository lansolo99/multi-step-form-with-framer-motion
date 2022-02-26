import { useState, useEffect } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { QuestionsEntity } from '@/interfaces/form';
import extendedTailwindProps from '@/lib/extendedTailwindProps';

const linkVariants = {
    hidden: {
        width: '0%'
    },
    show: {
        width: '100%'
    }
};

const bulletVariants = {
    isUnpassed: {
        scale: 1,
        backgroundColor: '#FFF',
        border: `2px solid ${extendedTailwindProps.bpGrey400}`
    },
    isActive: {
        scale: 1.4,
        backgroundColor: '#FFF',
        border: `2px solid ${extendedTailwindProps.bpPrimary500}`,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 20
        }
    },
    isPassed: {
        scale: 1,
        backgroundColor: extendedTailwindProps.bpPrimary500,
        border: `2px solid ${extendedTailwindProps.bpPrimary500}`
    }
};

interface Props {
    questions: QuestionsEntity[];
    activeStep: number;
    formik: any;
}

const WizardStepper = ({ questions, activeStep, formik }: Props) => {
    const [isStepperDisplayed, setIsStepperDisplayed] = useState(false);
    const stepAmount = questions.length + 1;

    useEffect(() => {
        const delayDisplay = setTimeout(() => {
            setIsStepperDisplayed(true);
        }, 900);

        return () => {
            clearTimeout(delayDisplay);
        };
    }, []);

    return (
        <div
            className={`flex justify-center p-3 max-w-[500px] duration-150 transition mx-auto ${
                isStepperDisplayed ? 'opacity-100' : 'opacity-0'
            }`}>
            {[...Array(stepAmount).keys()].map((_, i) => {
                const isActive = i === activeStep;
                const isUnpassed = i !== activeStep && i > activeStep;
                const isPassed = i !== activeStep && i < activeStep;

                const getCurrentStepState = () => {
                    if (isUnpassed) return 'isUnpassed';
                    if (isActive) return 'isActive';
                    if (isPassed) return 'isPassed';
                };

                return (
                    <div
                        key={`step-${i}`}
                        className={clsx(
                            ` relative box-border flex items-center ${isActive ? 'z-50' : 'z-0'} ${
                                i !== 0 ? 'flex-grow' : 'flex-grow-0'
                            }`
                        )}>
                        {/* Link */}
                        {i > 0 && (
                            <div className="relative h-[2px] bg-bpgrey-400 flex-grow">
                                <motion.div
                                    variants={linkVariants}
                                    animate={isUnpassed ? 'hidden' : 'show'}
                                    transition={{
                                        duration: 0.5,
                                        ease: 'easeOut'
                                    }}
                                    className={clsx(
                                        'absolute top-0 left-0 h-full bg-bp-primary-500',
                                        { 'w-0': isUnpassed },
                                        { 'w-full': isActive || isPassed }
                                    )}></motion.div>
                            </div>
                        )}
                        {/* Bullet */}
                        <motion.div
                            variants={bulletVariants}
                            initial="isUnpassed"
                            animate={getCurrentStepState()}
                            className={clsx(`rounded-full w-3 h-3 `)}></motion.div>
                    </div>
                );
            })}
        </div>
    );
};

export default WizardStepper;
