"use client";
import Link from "next/link";
function PostCard({ post }) {
  return (
    <div className="bg-gray-950 py-4 px-6 rounded-lg shadow-md mb-6">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-4">
          {post.id}.{post.title}
        </h3>
      </Link>
      
      <p className="text-sl">{post.body}</p>
      <button onClick={() =>{
        console.log(post.id);
      }}>
        click
      </button>
    </div>
  );
}

export default PostCard;
