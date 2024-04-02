import { useParams } from "react-router-dom";

function Blog() {
  const params = useParams();
  const { blogId } = params;

  //   console.log({ params });

  return (
    <div>
      <h2>This is my {blogId} blog</h2>
    </div>
  );
}

export default Blog;
