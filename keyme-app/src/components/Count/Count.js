import React, { useState, useEffect } from 'react';
import './Count.scss';

const Count=(props)=> {
    const [ count, setCount ]=useState(1);

    const handleChange=(event)=> {
        let currentValue=event.target.value;
        if(currentValue>=0 && currentValue<=99) {
            setCount(currentValue);
        }
    }

    return (
        <div>
            <button onClick={()=>setCount(Number(count)-1)} disabled={count<=0}>-</button>
            <input type='number' min={0} max={99} value={count} onChange={handleChange} />
            <button onClick={()=>setCount(Number(count)+1)} disabled={count>=99}>+</button>
        </div>
    );
};


export default Count;
