import { useState } from 'react';
import styles from './form.module.css';
import SubmitButton from '../../atoms/Buttons/submit.js';
import FormInput from '../../atoms/Input/input.js';
import FormTextarea from '../../atoms/TextArea/textarea.js';
import FormSelect from '../../atoms/Select/select.js';

function Form() {
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState('');
    const [colorSelect, setColorSelect] = useState('Red');

    const availableColors = [
        {key: 1, optionValue: 'Gold'},
        {key: 2, optionValue: 'Red'},
        {key: 3, optionValue: 'White'},
        {key: 4, optionValue: 'Blue'},
        {key: 5, optionValue: 'Green'},
        {key: 6, optionValue: 'Yellow'},
    ];

    const handleFormInputData = (name, value) => {
        setInputs(values => ({...values, [name]: value}));
    };

    const handleFormTextareaData = (value) => {
        setTextarea(value);
    };

    const handleFormSelectData = (value) => {
        setColorSelect(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name=${inputs.username}, Age=${inputs.age}, Color=${colorSelect}, Favorite Saying=${textarea}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.summary}>
                <u>Your Entered Information</u><br />
                Name={inputs.username}, Age={inputs.age}, Color={colorSelect}, Extra={textarea}
            </div>

            <fieldset>
                <legend>Personal Info</legend>

                <FormInput
                    id="username"
                    type="text"
                    label="Enter your name:"
                    value={inputs.username}
                    onDataFromFormInput={handleFormInputData}
                />
                <FormInput
                    id="age"
                    type="number"
                    label="Enter your age:"
                    value={inputs.age}
                    onDataFromFormInput={handleFormInputData}
                />
                <FormTextarea
                    id="textareaFavoriteSaying"
                    label="Favorite Saying:"
                    value={textarea}
                    onDataFromFormTextarea={handleFormTextareaData}
                />
                <FormSelect
                    id="colorSelect"
                    label="Favorite Color:"
                    options={availableColors}
                    value={colorSelect}
                    onDataFromFormSelect={handleFormSelectData}
                />
            </fieldset>

            <SubmitButton
                id="formSubmitButton"
                message="Submit Form"
                fullWidth={true}
            >
            </SubmitButton>
        </form>
    );
};

export default Form;
