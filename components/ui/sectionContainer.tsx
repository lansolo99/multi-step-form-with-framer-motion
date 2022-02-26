import clsx from 'clsx';
interface ISectionContainerProps {
    formSubmissionStatus?: boolean;
    classNames?: string;
}

const SectionContainer: React.FC<ISectionContainerProps> = ({ children, classNames }) => {
    const layoutConfig = clsx(`px-4 py-4  md:px-16 md:py-16  ${classNames}`);
    return <section className={layoutConfig}>{children}</section>;
};

export default SectionContainer;
