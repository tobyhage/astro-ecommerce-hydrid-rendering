import ReviewComment from './reviewComment';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[];
}

export default function ReviewSimple({ reviews }: Props) {
  return (
    <div className="w-100 w-md-80 w-lg-50 mx-auto">
      {reviews.map((review) => (
        <ReviewComment review={review} />
      ))}
    </div>
  );
}
