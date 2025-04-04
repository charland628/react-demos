import { useContext } from "react";
import { TopLevelContext } from '../../../pages/react-apis.js';
import styles from './display.module.css';

function DeepThought(props) {
    const topLevelMsg = useContext(TopLevelContext);

    return (
        <li>
            <span className={styles.author}>
                { props.author }
            </span>
            - { props.quote }
            <span className={styles.vital}>
                - {topLevelMsg}
            </span>
        </li>
    );
}

export default DeepThought;
