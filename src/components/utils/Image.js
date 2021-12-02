function Image({ imgUrl, alt, className }) {
  return (
    <img
      src={`${imgUrl}.png`}
      srcSet={`${imgUrl}@2x.png 2x,
    ${imgUrl}@3x.png 3x`}
      alt={alt}
      className={className ? className : ""}
    />
  );
}

export default Image;
