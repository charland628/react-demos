import styles from './topics.module.css';

// Function does not actually do anything. It is just for display purposes.
function someCallback(value) {
    console.log(value);
}

// Function does not actually do anything. It is just for display purposes.
function someFunction(params, callback) {
    const x = params;
    // Do stuff with the params, then call the callback.
    callback(x);
}

const TopicCallbacks = () => {
    const functionAsString = someCallback + '\n\n' + someFunction + '\n\nsomeFunction(12345, someCallback);';

    return (
        <div>
            <h2 className={styles.title}>Callbacks</h2>

            <div>
                Callbacks are a function passed as an argument to another function, which can run when 1st function is done.
            </div>
            <pre>
                {functionAsString}
            </pre>
            
        </div>
    );
};

export default TopicCallbacks;
