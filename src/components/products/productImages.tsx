interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ProductImages({ images }: Props) {
  return (
    <>
      <div className="col-12 col-lg-6">
        <img
          className="w-90 rounded-2"
          src={images[0].src}
          alt={images[0].alt}
        />
        <div className="d-flex mt-4">
          {images.slice(0, 3).map((img) => (
            <img
              key={img.src}
              className="w-20 me-4 rounded-2"
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
