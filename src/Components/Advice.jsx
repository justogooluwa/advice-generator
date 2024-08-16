import divider from '../images/pattern-divider-desktop.svg';
import dice from '../images/icon-dice.svg';
import { useEffect, useState } from 'react';

const url = "https://api.adviceslip.com/advice";

const Advice = () => {
    const [advice, setAdvice] = useState('');
    const [id, setId] = useState('')

    const Getadvice = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setAdvice(data.slip.advice)
        setId(data.slip.id)
    };

    useEffect(() => {
        Getadvice();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="advice">
                    <div className='id'>
                    <h4>Advice #{id}</h4>
                    </div>
                    <div className="quote">
                    <h3>"{advice}"</h3>
                    </div>
                    <div className="divider">
                    <img src={divider} alt="divider" />
                    </div>
                </div>
                <div className="dice">
                    <img src={dice} alt=""  onClick={Getadvice}/>
                    </div>
            </div>
        </div>
    );
};

export default Advice;
