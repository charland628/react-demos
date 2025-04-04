import styles from './input.module.css';

function FormInput(props) {
    const id = props.id || 'formInput';
    const type = props.type || 'text';
    const label = props.label || 'Enter a value';
    const value = props.value || '';
    const parentHandlerFunction = props.onDataFromFormInput || (() => {});

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        parentHandlerFunction(name, value);
    };

    return (
        <div className={styles.inputGroup}>
            <label htmlFor={id}>{label}</label><br />
            <input
                id={id}
                name={id}
                autoComplete="on"
                type={type}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default FormInput;
