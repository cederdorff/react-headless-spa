import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function PostItem({ post }) {
    const navigate = useNavigate();

    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article onClick={() => navigate(post.slug)}>
            <img src={image} alt={post.title.rendered} />
            <h2>{parse(post.title.rendered)}</h2>
        </article>
    );
}
