import React, { useState } from 'react';

const Child1 = ({count, setCount}) => {
    
    return (
        <div className='border w-4/5 mx-auto p-4 mt-10 rounded-md h-32'>
            <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full'>1</span>.
            <div className='mt-8 text-center' >
                <button onClick={() => setCount(count + 1)} className='bg-green-800 text-white px-2 py-1 rounded-md mr-3'>Increment</button>
                <span>{count}</span>
                <button onClick={()=>setCount(count - 1)} className='bg-red-800 text-white px-2 py-1 rounded-md ml-3'>Decrement</button>
            </div>
            
        </div>
    );
};

export default Child1;