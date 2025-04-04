import { Routes, Route } from "react-router-dom";
import Layout from './layout.js';
import Home from './home.js';
import JsConcepts from './js-concepts.js';
import ReactForms from './react-forms.js';
import ReactAPIs from './react-apis.js';
import ReactGames from './react-games.js';
import ClassComponents from './class-components.js';
import FunctionComponents from './function-components.js';
import NoPage from './no-page.js';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="js-concepts" element={<JsConcepts />} />
                <Route path="react-forms" element={<ReactForms />} />
                <Route path="react-apis" element={<ReactAPIs />} />
                <Route path="react-games" element={<ReactGames />} />
                <Route path="class-components" element={<ClassComponents />} />
                <Route path="function-components" element={<FunctionComponents />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default Router;
