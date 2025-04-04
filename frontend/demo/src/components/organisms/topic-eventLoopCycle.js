import styles from './topics.module.css';

const TopicEventLoopCycle = () => {
    return (
        <div>
            <h2 className={styles.title}>Event Loop Cycle</h2>

            <ul>
                <li>
                    manages async tasks by continuously checking and executing queued operations while keeping the main thread non-blocking
                </li>
                <li>
                    tasks processed in a cycle, starting with:
                    <ol>
                        <li>synchronous code in the call stack (LIFO)</li>
                        <li>then microtasks (like resolved Promises)</li>
                        <li>and then callback tasks (like setTimeout)</li>
                    </ol>
                </li>
                <li>When Web APIs like fetch or setTimeout complete, they go in the callback queue</li>
            </ul>

            <ul>
                <li>Non-blocking Execution: Enables JavaScript to handle multiple tasks efficiently.</li>
                <li>Better Performance: Ensures UI updates and API calls do not freeze the page.</li>
                <li>Optimized Async Handling: Prioritizes microtasks over macrotasks for better responsivenes</li>
            </ul>
        </div>
    );
};

export default TopicEventLoopCycle;
