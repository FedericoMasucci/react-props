import { useState } from 'react';


function Magic() {
    const [isActive, setIsActive] = useState(false);
    function toggleStatus() {
        if (isActive) {
            setIsActive(false);
        }
        else
            setIsActive(true);

    }







    return (
        <button type="button" className={`btn ${isActive ? 'btn-success' : 'btn-danger'}`} onClick={() => toggleStatus()}>Cambia Classe</button>
    )
}

export default Magic;