import styles from './textarea.module.css';

function FormTextarea(props) {
    const id = props.id || 'formTextarea';
    const label = props.label || 'Enter a value';
    const value = props.value || '';
    const parentHandlerFunction = props.onDataFromFormTextarea || (() => {});

    const handleTextareaChange = (e) => {
        parentHandlerFunction(e.target.value);
    };

    return (
        <div className={styles.textareaGroup}>
            <label htmlFor={id}>{label}</label><br />
            <textarea
                id={id}
                name={id}
                value={value}
                onChange={handleTextareaChange}
            />
        </div>
    );
}

export default FormTextarea;
