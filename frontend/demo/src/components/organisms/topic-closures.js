import styles from './topics.module.css';

// Function does not actually do anything. It is just for display purposes.
function myCounter() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    };
}

const TopicClosures = () => {
    const functionAsString = myCounter + '\n\nconst add = myCounter();\nadd(); // counter is now 1\nadd(); // counter is now 2';

    return (
        <div>
            <h2 className={styles.title}>Closures</h2>

            <div>
                Closures makes it possible for a function to have "private" variables.
            </div>
            <pre>
                {functionAsString}
            </pre>
        </div>
    );
};

export default TopicClosures;
