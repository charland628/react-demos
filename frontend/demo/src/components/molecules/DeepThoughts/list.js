import useFetch from "../../../hooks/useFetch.js";
import DeepThought from "../../atoms/DeepThought/display.js";
import styles from './list.module.css';

function DeepThoughts() {
    const [thoughts] = useFetch('http://localhost:4000/getJokes');

    return (
        <section>
            <h3>Deep Thoughts by Great Philosophers</h3>
            {thoughts && thoughts.length > 0 &&
                <ul className={styles.list}>
                    {thoughts.map((idea) => <DeepThought key={idea.id} author={idea.author} quote={idea.quote} />)}
                </ul>
            }
        </section>
    );
}

export default DeepThoughts;
