import {useState} from "react";

interface ButtonProps {
    onClick: () => void;
    text: string;
}

const Button = (props: ButtonProps) => {
    console.log("Button refreshed");

    return <button onClick={props.onClick} style={{ margin: "0 5px" }}>{props.text}</button>;
}

const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1);
        console.log("Increase " + count)
    }

    const decrease = () => {
        setCount(count - 1);
        console.log("Decrease " + count)
    }

    console.log("Counter refreshed");

    return (
        <div>
            <p>Count: {count}</p>
            {count > 1 ? <h3> Count is bigger</h3> : <h6> Count is smaller</h6>}

            <Button onClick={increase} text="Increase" />
            <Button onClick={decrease} text="Decrease" />
        </div>
    );
};

export default Counter;
