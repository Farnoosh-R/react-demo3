import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

const PostCard = ({ post }) => {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="rounded-4xl w-[314px] overflow-hidden shadow-brand mb-20">
      {image && (
        <div className="h-[220px] overflow-hidden">
          <img
            src={image}
            alt={post.title.rendered}
            className="w-full  object-cover"
          />
        </div>
      )}

      <div className="flex flex-col p-4">
        <div className="flex gap-2">
            <FaRegCalendarAlt className="text-[var(--brand-primary)]" size={15} />
          <div className="text-[var(--text-secondary)]">{post.date}</div>
          
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h4>{post.title.rendered}</h4>
        </Link>

        <div
          className="mt-3 leading-7 truncate text-[var(--text-secondary)]"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />
      </div>
    </div>
  );
};

export default PostCard;
