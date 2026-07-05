import { useState } from 'react';

function CheckBox() {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);

    const tutteSpuntate = box1 && box2 && box3;

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"
                        checked={box1} onChange={(event) => setBox1(event.target.checked)} />
                    <label className="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched"
                        checked={box2} onChange={(event) => setBox2(event.target.checked)} />
                    <label className="form-check-label stretched-link" for="secondCheckboxStretched">Second checkbox</label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched"
                        checked={box3} onChange={(event) => setBox3(event.target.checked)} />
                    <label className="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
                </li>
            </ul>

            <button type="button" className="btn btn-primary" disabled={!tutteSpuntate}>Primary</button>
        </>
    )
}

export default CheckBox;    