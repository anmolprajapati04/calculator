import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [input, setInput] = useState(""); // Current input
    const [result, setResult] = useState(null); // Result after calculation
    const [operator, setOperator] = useState(null); // Operator for the calculation

    // Function to handle number button clicks
    const handleNumberClick = (number) => {
        setInput((prev) => prev + number);
    };

    // Function to handle operator button clicks
    const handleOperatorClick = (op) => {
        if (input === "") return;
        setResult(parseFloat(input));
        setInput("");
        setOperator(op);
    };

    // Function to handle calculation
    const handleEqualClick = () => {
        if (operator === null || input === "") return;

        const currentInput = parseFloat(input);
        let newResult;
        switch (operator) {
            case "+":
                newResult = result + currentInput;
                break;
            case "-":
                newResult = result - currentInput;
                break;
            case "*":
                newResult = result * currentInput;
                break;
            case "/":
                newResult = result / currentInput;
                break;
            default:
                return;
        }

        setResult(newResult);
        setInput(newResult.toString());
        setOperator(null);
    };

    // Function to clear inputs
    const handleClear = () => {
        setInput("");
        setResult(null);
        setOperator(null);
    };

    return (
        <div className="calculator">
            <div className="display">{input || "0"}</div>
            <div className="buttons">
                <button onClick={() => handleNumberClick("1")}>1</button>
                <button onClick={() => handleNumberClick("2")}>2</button>
                <button onClick={() => handleNumberClick("3")}>3</button>
                <button onClick={() => handleOperatorClick("+")}>+</button>
                <button onClick={() => handleNumberClick("4")}>4</button>
                <button onClick={() => handleNumberClick("5")}>5</button>
                <button onClick={() => handleNumberClick("6")}>6</button>
                <button onClick={() => handleOperatorClick("-")}>-</button>
                <button onClick={() => handleNumberClick("7")}>7</button>
                <button onClick={() => handleNumberClick("8")}>8</button>
                <button onClick={() => handleNumberClick("9")}>9</button>
                <button onClick={() => handleOperatorClick("")}></button>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleNumberClick("0")}>0</button>
                <button onClick={handleEqualClick}>=</button>
                <button onClick={() => handleOperatorClick("/")}>/</button>
            </div>
        </div>
    );
};

export default Calculator;
