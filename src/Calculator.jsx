import './Calculator.css';
import { useState } from 'react';

const Calculator = () => {
    const [user, userCount] = useState("");
    const [size, sizeCount] = useState(0);
    const [shots, shotsCount] = useState(0);
    const [cups, cupsCount] = useState(0);
    const [mgs, mgsCount] = useState(0);

    const calculatorMgs = (user, size, shots, mgs) => {
        userCount(user === user),
        sizeCount(size * 75),
        shotsCount(shots * 75),
        cupsCount(cups + 1),
        mgsCount(mgs * 75)
    }
    return (
        <div>
        <h1>Caffeine Count!</h1>
        <br/>
        <div className="wrapper">
        <table className="table">
        <thead>
            <tr>
                <th>username</th>
                <th>serving size</th>
                <th>espresso shots</th>
                <th>cup count</th>
                <th>total mgs of caffeine</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{user}</td>
                <td>{size}</td>
                <td>{shots}</td>
                <td>{cups}</td>
                <td>{mgs}</td>
            </tr>
        </tbody>
        </table>
        </div>
        <br/>
        <button onClick={calculatorMgs} className="btn">Submit</button>
        </div>
    );
}
export default Calculator;
