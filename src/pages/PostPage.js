import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function PostPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `https://react-api.cederdorff.com/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data[0]);
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <section className="page">
            <section className="post-row">
                <article>
                    <h3>{post.title && parse(post.title.rendered)}</h3>
                    {post.content && parse(post.content.rendered)}
                </article>
                <figure>
                    <img src={image} alt={post.title?.rendered} />
                </figure>
            </section>
        </section>
    );
}
