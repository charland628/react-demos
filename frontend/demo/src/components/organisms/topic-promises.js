import styles from './topics.module.css';

const TopicPromises = () => {
    const functionAsString = 'myPromise.then(\n    function(value) { /* code if successful */ }\n    function(error) { /* code if some error */ }\n);';

    return (
        <div>
            <h2 className={styles.title}>Asynchronous Programming: promises</h2>

            <div>
                A promise runs some async code, after sync code.
                When that code resolves or rejects, the promise will use the appropriate callback.
            </div>
            <pre>
                {functionAsString}
            </pre>
        </div>
    );
};

export default TopicPromises;
