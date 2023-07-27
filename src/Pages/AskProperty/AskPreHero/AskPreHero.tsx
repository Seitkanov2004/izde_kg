import React, {useState} from 'react';
import "./AskPreHero.scss"
import pay1 from "./../../../img/pay1.svg"
import pay2 from "./../../../img/pay2.svg"
import pay3 from "./../../../img/pay3.svg"
import pay4 from "./../../../img/pay4.svg"
import pay5 from "./../../../img/pay5.svg"
import pay6 from "./../../../img/pay6.svg"

const AskPreHero = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div id="askPreHero">
            <div className="container">
                <div className="askPreHero">
                    <h1>Place a paid ad from 7 to 30 days</h1>
                    <button onClick={() => setMenu(true)}>Place an ad</button>
                </div>
            </div>

            {
                menu && <div><div className="askPrebg" onClick={() => setMenu(false)}/>
                    <div className="askPreModal">
                        <h3>Choose a payment method</h3>
                        <div className="askPreModal--pay">
                            <img src={pay1} alt="img"/>
                            <img src={pay2} alt="img"/>
                            <img src={pay3} alt="img"/>
                            <img src={pay4} alt="img"/>
                            <img src={pay5} alt="img"/>
                            <img src={pay6} alt="img"/>
                        </div>
                        <label>
                            <span>Card number: </span>
                            <input type="text"/>
                        </label>
                        <label>
                            <span>Validity period</span>
                            <div className="parentInt">
                                <input type="text" className="input1"/>
                                <input type="text" className="input2"/>
                            </div>
                        </label>
                        <div>
                            <button>Cancel</button>
                            <button>Continue</button>
                        </div>
                    </div></div>
            }

        </div>
    );
};

export default AskPreHero;