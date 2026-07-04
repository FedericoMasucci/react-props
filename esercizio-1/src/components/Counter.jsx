import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function incrementa(valore) {
        setCount(count + 1);
    }
    return (
        <button type="button" className="btn btn-primary" onClick={() => incrementa(1)}>
            Premi il pulsante per incrementare {count}</button>
    );

}

export default Counter;