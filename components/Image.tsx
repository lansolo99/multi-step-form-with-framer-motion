interface IImageProps {
    src: { srcSet: string; src: string };
}

const Image: React.FC<IImageProps> = ({ src, ...rest }) => {
    return <img srcSet={src.srcSet} src={src.src} loading="lazy" {...rest} />;
};

export default Image;
