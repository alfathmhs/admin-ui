import { useState } from "react";

interface PostCardProps {
  title: string;
  body: string;
}

export default function PostCard(props: PostCardProps) {
  const { title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`mt-4 ${clicked ? "bg-blue-100" : "bg-white"}  p-6 rounded-lg shadow hover:shadow-md transition-shadow`}
      onClick={() => setClicked(true)}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {body}
      </p>
    </div>
  );
}
