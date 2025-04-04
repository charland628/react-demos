import styles from './select.module.css';

function FormSelect(props) {
    const id = props.id || 'formSelect';
    const label = props.label || 'Select a value';
    const options = props.options || [];
    const selectOptions = options.map((o) => <option key={o.key} value={o.optionValue}>{o.optionValue}</option>)
    const value = props.value || '';
    const parentHandlerFunction = props.onDataFromFormSelect || (() => {});

    const handleSelectChange = (e) => {
        parentHandlerFunction(e.target.value);
    };

    return (
        <div className={styles.selectGroup}>
            <label htmlFor={id}>{label}</label><br />
            <select
                id={id}
                name={id}
                value={value}
                onChange={handleSelectChange}
            >
                {selectOptions}
            </select>
        </div>
    );
}

export default FormSelect;
