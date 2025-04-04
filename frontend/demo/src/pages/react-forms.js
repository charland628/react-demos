import SampleForm from '../components/molecules/SampleForm/form.js';

const ReactForms = () => {
    return (
        <section>
            <h1>React Forms</h1>

            <p>
                Below is a sample form component.
                This is a molecule in atomic design.
                The inputs are atoms.  Note: PropTypes does not work in React 19 and above.
            </p>

            <SampleForm />
        </section>
    );
};

export default ReactForms;
