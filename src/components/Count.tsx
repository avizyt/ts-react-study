import { useReducer } from "react";

interface State {
    count: number;
}

type CounterAction =
    | { type: "reset" }
    | { type: "setCount"; value: State["count"] };

const initialState: State = { count: 0 };

const stateReducer = (state: State, action: CounterAction): State => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setCount":
            return { ...state, count: action.value };
    }
};

const Count = () => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const addFive = () =>
        dispatch({ type: "setCount", value: state.count + 5 });

    const reset = () => dispatch({ type: "reset" });

    return (
        <div>
            <h1>Welcome to my counter</h1>

            <p>Count: {state.count}</p>
            <div className='py-2 space-x-2'>
                <button onClick={addFive}>Add 5</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Count;
