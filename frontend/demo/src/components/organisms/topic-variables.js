import styles from './topics.module.css';

const TopicVariables = () => {
    return (
        <div>
            <h2 className={styles.title}>Variables (const, let, var)</h2>

            <table>
                <tr>
                    <th></th>
                    <th>Scope</th>
                    <th>Redeclare</th>
                    <th>Reassign</th>
                    <th>Hoisted</th>
                    <th>Binds this</th>
                </tr>
                <tr>
                    <td>var</td>
                    <td>global</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>let</td>
                    <td>block</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>not intialized</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>const</td>
                    <td>block</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
            </table>
        </div>
    );
};

export default TopicVariables;
