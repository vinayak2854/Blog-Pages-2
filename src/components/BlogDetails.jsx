import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div className="mt-12 p-4 bg-white shadow-md rounded-lg">
      <NavLink to={`/blog/${post.id}`} className="text-2xl font-bold text-blue-600 hover:underline">
        {post.title}
      </NavLink>
      <p className="text-sm text-gray-500 mt-2">
        By <span className="font-semibold">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className="text-blue-600 hover:underline">
          {post.category}
        </NavLink>
      </p>
      <p className="text-sm text-gray-500 mt-1">Posted on {post.date}</p>
      <p className="mt-4 text-gray-700">{post.content}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} className="text-blue-600 hover:underline">
            <span className="bg-gray-200 px-2 py-1 rounded-full">#{tag}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
