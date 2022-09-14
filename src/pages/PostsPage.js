import { useState, useEffect } from "react";
import PostItem from "../components/PostItem";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://react-api.cederdorff.com/wp-json/wp/v2/posts?_embed")
            .then(res => res.json())
            .then(setPosts);
    }, []);
    return (
        <section className="page">
            <h1>Posts from Headlss WP</h1>
            <section className="grid-container">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </section>
        </section>
    );
}
