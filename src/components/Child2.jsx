import React from 'react';
import Action from './Action';

const Child2 = () => {
    return (
        <div className='border w-4/5 mx-auto p-4 mt-10 rounded-md h-32'>
            <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full'>2</span>
            <Action/>
        </div>
    );
};

export default Child2;