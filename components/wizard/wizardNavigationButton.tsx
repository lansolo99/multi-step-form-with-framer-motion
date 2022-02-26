import clsx from 'clsx';
import { motion } from 'framer-motion';

interface Props {
    direction: string;
    disabled: boolean;
    onClick: () => void;
}

const WizardNavigationButton = ({ direction, disabled, onClick }: Props) => {
    const PrevMarkup = (
        <img
            src="./images/icons/arrow-nav--back.svg"
            className="w-[25px] h-[25px] text-gray-500 fill-current hover:text-black transition duration-150"
        />
    );
    return (
        <motion.button
            data-cy={`button-nav-${direction}`}
            whileTap={{ scale: 0.8 }}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                `rounded normal-case py-2 md:h-[45px] font-medium text-sm md:text-base  flex items-center justify-center transition duration-150 select-none`,
                { 'opacity-40 pointer-events-none': disabled },
                {
                    'text-black border border-gray-400 px-4 hover:border-gray-600':
                        direction === 'prev'
                },
                {
                    [`px-5 md:px-16 text-white ${
                        !disabled ? 'bg-bp-primary-500 hover:bg-bp-primary-400' : 'bg-gray-500'
                    }`]: direction === 'next'
                }
            )}>
            {direction === 'prev' ? PrevMarkup : <span>Next</span>}
        </motion.button>
    );
};

export default WizardNavigationButton;
