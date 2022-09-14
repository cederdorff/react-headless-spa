import { useState, useEffect } from "react";
import PersonItem from "../components/PersonItem";

export default function PersonsPage() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react-api.cederdorff.com/wp-json/wp/v2/persons?_embed");
            const data = await response.json();
            setPersons(data);
        }
        getData();
    }, []);
    return (
        <section className="page">
            <h1>Persons from Headlss WP</h1>
            <section className="grid-container">
                {persons.map(personObject => (
                    <PersonItem key={personObject.id} person={personObject} />
                ))}
            </section>
        </section>
    );
}
