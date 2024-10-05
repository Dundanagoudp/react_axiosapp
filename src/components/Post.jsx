import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostApi";
import "../App.css";

export const Posts = () => {
  const [data, setData] = useState([]);

  const getPostsData = async () => {
    const res = await getPosts();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
      getPostsData();
  }, []);

  // fuction delete post

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
  
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <section className="section-post">
      <div className="posts-grid">
        {data.map((curEle) => {
          const { id, body, title } = curEle;
          return (
            <div className="post-card" key={id}>
              <div className="post-content">
                <p>Post ID: {id}</p> 
                <p className="post-title">Title: {title}</p>
                <p className="post-body">Body: {body}</p>
              </div>
              <div className="post-actions">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete" onClick={()=> handleDeletePost(id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
