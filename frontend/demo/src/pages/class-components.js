import React, { Component } from "react";

const ClassComponents = () => {
    return (
        <section>
            <h1>Class Components</h1>

            <div>
                These are just a bunch of random things using various React features.
                They are not formatted for production and are mainly proof of concepts.
                The tasks come from:
                https://codeinterview.io/blog/reactjs-coding-interview-questions/
            </div>
            <hr />

            <App16 />
            <hr />
            <App17 />
            <hr />
        </section>
    );
};


class App3 extends Component {
    state = {
        counter: 0,
    };
 
    render() {
        this.setState({ counter: this.state.counter + 1 }); // setting state in render leads to infinite loop.  Do in useEffects
        return <div>Counter: {this.state.counter}</div>;
    }
}

class App16 extends React.Component {
    state = { count: 0 };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(`Count: ${this.state.count}`);
        });
    };

    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

class App17 extends React.Component { // error directly modifying the state; also there will be a problem adding hardcoded Item3 - duplicate key
    ;
    constructor(props) {
        super(props);
        this.state = { list: ["Item1", "Item2"] };
     }
    addItem() {
        const newItem = "Item3";
        this.state.list.push(newItem);
        this.setState({ list: this.state.list });
    }
    render() {
        return (
            <div>
                <button onClick={this.addItem.bind(this)}>Add item</button>
                <ul>
                    {this.state.list.map((item) => (<li key={item}>{item}</li>))}
                </ul>
            </div>
        );
    }
}


export default ClassComponents;
