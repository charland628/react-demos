import styles from './topics.module.css';

const TopicAsyncAwait = () => {
    return (
        <div>
            <h2 className={styles.title}>Asynchronous Programming: async / await</h2>

            <ul>
                <li>await makes the function pause the execution and wait for a resolved promise before it continues</li>
                <li>can only be used in an async function</li>
                <li>async makes a function return a Promise</li>
                <li>await makes a function wait for a Promise</li>
            </ul>
        </div>
    );
};

export default TopicAsyncAwait;
