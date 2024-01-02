import React, { useState } from 'react';

const Action = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='mt-8 text-center' >
                <button onClick={() => setCount(count + 1)} className='bg-green-800 text-white px-2 py-1 rounded-md mr-3'>Increment</button>
                <span>{count}</span>
                <button onClick={()=>setCount(count - 1)} className='bg-red-800 text-white px-2 py-1 rounded-md ml-3'>Decrement</button>
            </div>
    );
};

export default Action;