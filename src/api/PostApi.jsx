import axios from "axios";


const api = axios.create({
      baseURL:"https://jsonplaceholder.typicode.com",
});

// det method (define)

export const getPosts =()=>{
      return api.get("/posts");
};

// delete method

export const deletePost =(id)=>{
      return api.delete(`/posts/${id}`);
}