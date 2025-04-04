import { useState, useEffect, useCallback, createContext, useContext, useRef } from "react";

const FunctionComponents = () => {
    return (
        <section>
            <h1>Function Components</h1>

            <div>
                These are just a bunch of random things using various React features.
                They are not formatted for production and are mainly proof of concepts.
                The tasks come from:
                https://codeinterview.io/blog/reactjs-coding-interview-questions/
            </div>
            <hr />

            <App1 />
            <hr />
            <App2 />
            <hr />
            <Counter />
            <hr />
            <CurrencySelectForm />
            <hr />
            <App6 />
            <hr />
            <StopWatch />
            <hr />
            <App11 />
            <hr />
            <App19 />
            <hr />
            <TestComponent initialCount="4" />
            <hr />
            <App22 />
            <hr />
            <App24 />
            <hr />
            <App27 />
        </section>
    );
};


////////////////////////////////////////////////////////////////////
// https://codeinterview.io/blog/reactjs-coding-interview-questions/
////////////////////////////////////////////////////////////////////


function App1() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Component rendered successfully");
    }, []);
    return (
        <div>
            <h1>App1 Component</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>You clicked {count} times</p>
        </div>
    );
}

function App2() {
    const names = ["Brian", "Paul", "Krug", "Halley"];
    const listItems = names.map((name, i) => <li key={i}>{name}</li>); // needed key
    return (
        <div>
            <h1>App2 Component</h1>
            <ul>{listItems}</ul>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter Component</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

function CurrencySelectForm() {
    const [currencyInput, setCurrencyInput] = useState("USD");
    const [currencyOutput, setCurrencyOutput] = useState("AUD");
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const fxRate = 0.75;
  
    const handleCurrencyInputChange = (event) => {
        setCurrencyInput(event.target.value);
    };
  
    const handleCurrencyOutputChange = (event) => {
        setCurrencyOutput(event.target.value);
    };
  
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setConvertedAmount(amount * fxRate);
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <h1>CurrencySelectForm Component</h1>
            <div>
                Select a currency to convert from:
                <select value={currencyInput} onChange={handleCurrencyInputChange}>
                    <option value="AUD">AUD</option>
                    <option value="CAD">CAD</option>
                    <option value="USD">USD</option>
                </select>
            </div>
            <div>
                Select a currency to convert to:
                <select value={currencyOutput} onChange={handleCurrencyOutputChange}>
                    <option value="AUD">AUD</option>
                    <option value="CAD">CAD</option>
                    <option value="USD">USD</option>
                </select>
            </div>
            <div>
                <label>Enter your amount:
                    <input
                        type="number" 
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </label>
            </div>
            <div>
                <input type="submit" />
            </div>
            <div>
                Converted amount = {convertedAmount}
            </div>
        </form>
    );
}

function App6() { // semi colons were missing?
    const [count, setCount] = useState(0);
  
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>App6 Component</h1>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}

function StopWatch() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const startPauseText = isRunning ? 'Pause' : 'Start';

    const toggleStartPause = () => {
        setIsRunning(!isRunning);
    };

    useEffect(() => {
        if (isRunning) {
            const timer = setTimeout(() => {
                setElapsedTime((elapsedTime) => elapsedTime + 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [elapsedTime, isRunning]);

    const handleResetButton = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    return (
        <>
            <h1>StopWatch Component</h1>
            <div>
                <button onClick={toggleStartPause}>{startPauseText}</button>
                <button onClick={handleResetButton}>Reset</button>
            </div>
            <div>
                Elapsed Time: {elapsedTime} seconds
            </div>
        </>
    );
}

// App 8 -> renders -> <div>Hello, Clair!</div>

// App 9: the input does not have a value linked to it, nor does it have a handler to handle the change event.

// App 10: the counter value displayed is hard coded as 0.

function App11() { // index will be 0 and 1, while id is 1 and 2
    const items = [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
    ];
    items.forEach((item, index) => {
        console.log('item', item, 'index', index);
    })
    const listItems = items.map((item, index) => <li key={index}>{item.text}</li>);
    return (
        <div>
            <h1>App11 Component</h1>
            <ul>{listItems}</ul>
        </div>
    );
}

// App12 - Count will be one more because incrementing the count will not happen twice, only once before the render. So it will be one more.

// App15 - Use memo won't help here because if numbers change, the number map will have to update and re-render.  Also, there is no way to updte numbers.

function App19() { // useCallback has no dependencies so does not rerun after 1st button click
    const [count, setCount] = useState(0);
 
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div>
            <h1>App19 Component</h1>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}

function TestComponent(props) { // App21 initialCount is a string.  Adding 1 will just kep appending a 1.
    const [count, setCount] = useState(props.initialCount);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>TestComponent Component</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

const ThemeContext = createContext("light");
function App22() { // current theme: dark
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}
 function Toolbar() {
    const theme = useContext(ThemeContext);
    return <div>Current theme: {theme}</div>;
}

// App23 useEffect is not imported, so that could be a problem.  Also, the result may need to be run through .json before we set it to the data.  Also, no error handling.

function App24() { // It's a counter.  useEffect only runs once on the first render, but the interval runs every second.
    const [count, setCount] = useState(0);
   
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1>App24 Component</h1>
            <div>Count: {count}</div>
        </div>
    );
}

// App26 Using async / await in a useEffect hook can cause a memory leak.

function App27() { // Setting count causes a re-render, even though we are adding countRef.current
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
   
    const increment = useCallback(() => {
        countRef.current = countRef.current + 1;
        setCount(countRef.current);
    }, []);
   
    return (
        <div>
            <h1>App27 Component</h1>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}


export default FunctionComponents;
