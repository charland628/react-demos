import styles from './topics.module.css';

const TopicHoisting = () => {
    return (
        <div>
            <h2 className={styles.title}>Hoisting</h2>

            <div>
                Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (or function).
                In JavaScript, a variable can be declared after it has been used.
                JavaScript only hoists declarations, not initializations.
                To avoid bugs, always declare all variables at the beginning of every scope.
            </div>
        </div>
    );
};

export default TopicHoisting;
