import React from 'react';

const Child2 = () => {
    return (
        <div className='border w-4/5 mx-auto p-4 mt-10 rounded-md h-32'>
            <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full'>2</span>
            <div className='mt-8 text-center' >
                <button className='bg-green-800 text-white px-2 py-1 rounded-md mr-3'>Increment</button>
                <span>0</span>
                <button className='bg-red-800 text-white px-2 py-1 rounded-md ml-3'>Decrement</button>
            </div>
        </div>
    );
};

export default Child2;