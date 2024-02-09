import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export interface CounterProps{
    className?: string;
}
export const Counter:React.FC<CounterProps> = ({ className }) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1>
                value =
                {counterValue}

            </h1>
            <button
                onClick={increment}
            >
                increment
            </button>
            <button
                onClick={decrement}
            >
                decrement
            </button>
        </div>
    );
};
