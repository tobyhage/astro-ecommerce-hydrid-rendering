interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

function chunks<T extends Object>(arr: T[], size = 2) {
  return arr
    .map((x, i) => i % size == 0 && arr.slice(i, i + size))
    .filter((x) => !!x) as [T, T][];
}

export default function ProductGallery({ images }: Props) {
  return (
    <>
      {chunks(images).map(([img1, img2]) => (
        <div className="d-block d-md-flex md-max-height-300 mt-4">
          <img
            className="w-100 w-md-45 me-4 rounded-3 mb-4 mb-md-0 ms-auto"
            src={img1.src}
            alt={img1.alt}
          />
          <img
            className="w-100 w-md-45 rounded-3"
            src={img2.src}
            alt={img2.alt}
          />
        </div>
      ))}
    </>
  );
}
