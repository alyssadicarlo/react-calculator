import { useState } from "react";
import Button from "../Button";

function Calculator() {
    const [result, setResult] = useState(0);

    const [previous, setPrevious] = useState(null);
    const [current, setCurrent] = useState(null);

    const [operation, setOperation] = useState(null);

    const updateCurrent = (number) => {
        setResult(parseInt(number));
        setPrevious(current);
        setCurrent(parseInt(number));
    }

    const calculate = () => {
        if (previous !== null && current !== null) {
            setCurrent(null);
            setOperation(null);
    
            if (operation === "add") {
                const result = previous + current;
                setResult(result);
                setCurrent(result);
            } else if (operation === "subtract") {
                const result = previous - current;
                setResult(result);
                setCurrent(result);
            } else if (operation === "multiply") {
                const result = previous * current;
                setResult(result);
                setCurrent(result);
            } else if (operation === "divide") {
                const result = previous / current;
                setResult(result);
                setCurrent(result);
            }
        }
    }

    const clear = () => {
        setResult(0);
        setPrevious(null);
        setCurrent(null);
        setOperation(null);
    }

    return (
        <div className="calculator-wrapper">
            <div className="result-wrapper">
                <p>{result}</p>
            </div>
            <div className="calculator">
                <Button number='1' onClick={updateCurrent} />
                <Button number='2' onClick={updateCurrent} />
                <Button number='3' onClick={updateCurrent} />
                <div className={operation === "add" ? "button-wrapper active" : "button-wrapper"} onClick={() => setOperation("add")}>
                    <h1>+</h1>
                </div>
            </div>
            <div className="calculator">
                <Button number='4' onClick={updateCurrent} />
                <Button number='5' onClick={updateCurrent} />
                <Button number='6' onClick={updateCurrent} />
                <div className={operation === "subtract" ? "button-wrapper active" : "button-wrapper"} onClick={() => setOperation("subtract")}>
                    <h1>-</h1>
                </div>
            </div>
            <div className="calculator">
                <Button number='7' onClick={updateCurrent} />
                <Button number='8' onClick={updateCurrent} />
                <Button number='9' onClick={updateCurrent} />
                <div className={operation === "multiply" ? "button-wrapper active" : "button-wrapper"} onClick={() => setOperation("multiply")}>
                    <h1>*</h1>
                </div>
            </div>
            <div className="calculator">
            <div className="button-wrapper active" onClick={clear}>
                    <h1>C</h1>
                </div>
                <div className={operation === "divide" ? "button-wrapper active" : "button-wrapper"}  onClick={() => setOperation("divide")}>
                    <h1>/</h1>
                </div>
                <div className="button-wrapper active" onClick={calculate}>
                    <h1>=</h1>
                </div>
            </div>
        </div>
    )
}

export default Calculator;