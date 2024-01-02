import React, { useState } from 'react';
import Action from './Action';

const Child1 = ({count, setCount}) => {
    
    return (
        <div className='border w-4/5 mx-auto p-4 mt-10 rounded-md h-32'>
            <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full'>1</span>.
            <Action/>
        </div>
    );
};

export default Child1;