import { IFormState } from '@/interfaces/form';

interface Props {
    formik: any;
    state: IFormState;
}

const WizardContactForm = ({ formik, state }: Props) => {
    return (
        <div className="md:px-10 max-w-[800px] mx-auto">
            <div className="max-w-[500px] text-center mx-auto">
                <p className="text-lg sm:text-xl md:text-2xl md:leading-snug">Thank you!</p>
                <p className="mt-4 text-lg leading-tight">We sent you an email.</p>
            </div>
        </div>
    );
};

export default WizardContactForm;
