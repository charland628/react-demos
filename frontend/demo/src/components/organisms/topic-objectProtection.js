import styles from './topics.module.css';

const TopicObjectProtection = () => {
    return (
        <div>
            <h2 className={styles.title}>Object Protection</h2>

            <table>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Object.preventExtensions(object)</td>
                    <td>Prevents adding object properties</td>
                </tr>
                <tr>
                    <td>Object.isExtensible(object)</td>
                    <td>Returns true if properties can be added to an object</td>
                </tr>
                <tr>
                    <td>Object.seal(object)</td>
                    <td>Prevents adding and deleting object properties</td>
                </tr>
                <tr>
                    <td>Object.isSealed(object)</td>
                    <td>Returns true if object is sealed</td>
                </tr>
                <tr>
                    <td>Object.freeze(object)</td>
                    <td>Prevents any changes to an object</td>
                </tr>
                <tr>
                    <td>Object.isFrozen(object)</td>
                    <td>Returns true if object is frozen</td>
                </tr>
            </table>
        </div>
    );
};

export default TopicObjectProtection;
