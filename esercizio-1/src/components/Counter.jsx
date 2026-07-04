import { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    function incrementa(valore) {
        setCount(count + 1);
    }

    function Azzera(valore) {
        setCount(count = 0);
    }
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={() => incrementa(1)}>
                Premi il pulsante per incrementare {count}</button>


            <button type="button" className="btn btn-danger" onClick={() => Azzera()}>Azzera</button>

        </>
    );

}

export default Counter;