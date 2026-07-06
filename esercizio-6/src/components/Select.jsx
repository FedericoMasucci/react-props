import { useState } from 'react';

function Select({ valoreCorrente, quandoCambia }) {
    return (
        <select className="form-select"
            value={valoreCorrente}
            onChange={(event) => quandoCambia(event.target.value)}
            aria-label="Default select example">

            <option value="tutti">Tutti gli articoli</option>
            <option value="T-Shirt"> T-Shirt</option>
            <option value="Tutti-jeans"> Jeans</option>
            <option value="Tshirt-nera">T-Shirt nere</option>
            <option value="Tshirt-bianca"> T-Shirt bianche</option>
            <option value="brand-nike">Prodotti Nike</option>
            <option value="jeans-baggy"> Jeans Baggy</option>
            <option value="jeans-levis"> Jeans Levis</option>
        </select>

    )
}

export default Select