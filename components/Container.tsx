interface IProps {
    color: string;
    children?: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children, color }) => {
    return <section className={`${color} globalSection`}>{children}</section>;
};

export default Container;
