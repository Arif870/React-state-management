import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../context/CounterContext';

const Action = () => {
    const {count, setCount} = useContext(COUNTER_CONTEXT)
    return (
        <div className='mt-8 text-center' >
                <button onClick={() => setCount(count + 1)} className='bg-green-800 text-white px-2 py-1 rounded-md mr-3'>Increment</button>
                <span>{count}</span>
                <button onClick={()=>setCount(count - 1)} className='bg-red-800 text-white px-2 py-1 rounded-md ml-3'>Decrement</button>
        </div>
    );
};

export default Action;