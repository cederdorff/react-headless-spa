import parse from "html-react-parser";

export default function PersonItem({ person }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (person._embedded && person._embedded["wp:featuredmedia"]) {
        image = person._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            <img src={image} alt={person.title.rendered} />
            <h2>{parse(person.title.rendered)}</h2>
            {person.content && parse(person.content.rendered)}
        </article>
    );
}
