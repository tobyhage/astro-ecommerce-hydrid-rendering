interface Props {
  featuresDetails: Record<string, string>;
}

export default function ProductAccordion({ featuresDetails }: Props) {
  return (
    <>
      {Object.entries(featuresDetails).map(([title, value]) => (
        <div className="col-12 col-md-6 w-md-50" key={title}>
          <div className="p-3 border-top">
            <h6>{title}</h6>
            <p>{value}</p>
          </div>
        </div>
      ))}
    </>
  );
}
