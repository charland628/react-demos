import { useState } from 'react';
import styles from './concepts.module.css';
import FormSelect from '../../atoms/Select/select.js';
import TopicHoisting from '../../organisms/topic-hoisting.js';
import TopicVariables from '../../organisms/topic-variables.js';
import TopicAsyncAwait from '../../organisms/topic-asyncAwait.js';
import TopicPromises from '../../organisms/topic-promises.js';
import TopicEventLoopCycle from '../../organisms/topic-eventLoopCycle.js';
import TopicCallbacks from '../../organisms/topic-callbacks.js';
import TopicClosures from '../../organisms/topic-closures.js';
import TopicClasses from '../../organisms/topic-classes.js';
import TopicObjectProtection from '../../organisms/topic-objectProtection.js';

function Concepts() {
    const TOPIC1 = 'Hoisting';
    const TOPIC2 = 'Variables (const, let, var)';
    const TOPIC3 = 'Asynchronous Programming: async / await';
    const TOPIC4 = 'Asynchronous Programming: promises';
    const TOPIC5 = 'Event Loop Cycle';
    const TOPIC6 = 'Callbacks';
    const TOPIC7 = 'Closures';
    const TOPIC8 = 'Classes';
    const TOPIC9 = 'Object Protection';

    const [concept, setConcept] = useState(TOPIC1);

    const choices = [
        {key: 1, optionValue: TOPIC1},
        {key: 2, optionValue: TOPIC2},
        {key: 3, optionValue: TOPIC3},
        {key: 4, optionValue: TOPIC4},
        {key: 5, optionValue: TOPIC5},
        {key: 6, optionValue: TOPIC6},
        {key: 7, optionValue: TOPIC7},
        {key: 8, optionValue: TOPIC8},
        {key: 9, optionValue: TOPIC9},
    ];

    const handleFormSelectData = (value) => {
        setConcept(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            className={styles.container}
            onSubmit={handleSubmit}
        >
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Select a Topic</legend>

                <FormSelect
                    id="conceptSelect"
                    label="Topic"
                    options={choices}
                    value={concept}
                    onDataFromFormSelect={handleFormSelectData}
                />

                <div className={styles.summary}>
                    { concept === TOPIC1 && <TopicHoisting /> }
                    { concept === TOPIC2 && <TopicVariables /> }
                    { concept === TOPIC3 && <TopicAsyncAwait /> }
                    { concept === TOPIC4 && <TopicPromises /> }
                    { concept === TOPIC5 && <TopicEventLoopCycle /> }
                    { concept === TOPIC6 && <TopicCallbacks /> }
                    { concept === TOPIC7 && <TopicClosures /> }
                    { concept === TOPIC8 && <TopicClasses /> }
                    { concept === TOPIC9 && <TopicObjectProtection /> }
                </div>
            </fieldset>
        </form>
    );
};

export default Concepts;
