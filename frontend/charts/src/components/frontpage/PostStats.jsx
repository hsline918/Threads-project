import {
  Eye,
  Heart,
  MessageCircle,
  Repeat2,
  MessageSquareQuote,
  Share2,
} from "lucide-react";

export default function PostStats({ stats }) {
  const statIcons = {
    views: <Eye size={20} className="mr-1" />,
    likes: <Heart size={20} className="mr-1" />,
    comments: <MessageCircle size={20} className="mr-1" />,
    reposts: <Repeat2 size={20} className="mr-1" />,
    quotes: <MessageSquareQuote size={20} className="mr-1" />,
    shares: <Share2 size={20} className="mr-1" />,
  };

  return (
    <div className="grid gap-2 mb-4 grid-cols-[repeat(6,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[repeat(2,1fr)]">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="flex items-center p-2">
          {statIcons[key]}
          <span className="text-gray-950 text-base font-semibold font-['Poppins SemiBold']">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}
