import { useState, createContext } from "react";
import DeepThoughts from '../components/molecules/DeepThoughts/list.js';

export const TopLevelContext = createContext();

const ReactAPIs = () => {
    const [wordsOfWisdom] = useState("Cars go fast!");

    return (
        <section>
            <h1>React APIs</h1>

            <div>
                This page will use a custom fetch hook to load jokes from an API running in the backend (Node Express).
                It will fetch the JSON (after a fake 3s delay) and then display the formatted results in the page below.
                For demo purposes, I'm also going to use the createContext hook to pass top level data
                (<strong>Cars go fast!</strong>)
                down into the 'child-iest' component (which is each list element).
                This will remove the need to pass the properties through each of the child components along the way.
            </div>

            <TopLevelContext.Provider value={wordsOfWisdom}>
                <div>
                    <DeepThoughts />
                </div>
            </TopLevelContext.Provider>
        </section>
    );
};

export default ReactAPIs;
