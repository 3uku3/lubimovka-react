import { FC } from "react";
import BlogPrewievElement from "../elements/BlogPrewievElement";

const BlogPrewiev: FC = () => {
  return(
    <div className="blog-prewiev">
      <BlogPrewievElement></BlogPrewievElement>
      <BlogPrewievElement></BlogPrewievElement>
      <BlogPrewievElement></BlogPrewievElement>
    </div>
  )
}

export default BlogPrewiev;