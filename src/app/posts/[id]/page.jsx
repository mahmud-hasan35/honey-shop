import React, { Suspense } from "react";
import singlePost from "../../../../lib/singlePost";
import commentsPost from "../../../../lib/commentsPost";


export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await singlePost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function page({ params }) {
  const { id } = await params;

  const post = await singlePost(id);
  const comments = commentsPost(id)
 
  

  return (
    <div>
      <ul>
        <li className="text-red-600 font-bold mt-5">{post.title}</li>
        <li> {post.body}</li>
      </ul>

    </div>
  );
}
