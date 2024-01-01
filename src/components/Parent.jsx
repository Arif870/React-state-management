import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='border w-4/5 mx-auto p-4 mt-10 rounded-md'>
            <span className='text-xl bg-green-100 text-green-800 px-2 py-1 rounded'>Parent</span>
            <Child1 count={count} setCount={setCount}/>
            <Child2 count={count} setCount={setCount}/>
        </div>
    );
};

export default Parent;