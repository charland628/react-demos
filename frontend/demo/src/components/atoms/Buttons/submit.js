import styles from './submit.module.css';

function SubmitButton(props) {
    const msg = props.message || 'Submit';
    const id = props.id || 'submitButton';
    const className = props.fullWidth === true ? styles.fullWidth : '';

    return (
        <button
            type="submit"
            id={id}
            className={className}
        >
            {msg}
        </button>
    );
}

export default SubmitButton;
