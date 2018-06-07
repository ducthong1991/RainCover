import React from 'react';
import './PaymentDetail.scss';

import logoImg from '../assets/droplet-logo.png';
import logOutImg from '../assets/logout-icon.png';
import visaImg from '../assets/visa.png';

class PaymentDetailComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = () => {
    }

    goToBuyDroplet = () => {
        this.props.router.push('/buy-droplet');
    }

    goToIndex = () => {
        this.props.router.push('/');
    }

    render() {
        return (
            <div className="payment-detail">
                <div className="header-section">
                    <div className="header-items">
                        <div className="header-left">
                            <img src={logoImg} className="droplet-logo" onClick={this.goToIndex}/>
                        </div>
                        <div className="header-right">
                            <label className="name-text clickable">Welcome back, Elson Ng</label>
                            <div className="slash-div"></div>
                            <label className="name-text clickable">Log out</label>

                            <img src={logOutImg} className="logout-img clickable"/>
                        </div>
                    </div>
                </div>
                <div className="progress">
                    <div className="finish-progress"></div>
                </div>

                <div className="container history-container">

                    <div className="row">
                        <div className="offset-1 col-10">
                            <div className="step-section">
                                <h4 className="step-text">Step 4 : Payment Details</h4>
                            </div>

                            <div className="detail-section">
                                <img src={visaImg} className="visa-img"/>
                                <div className="form-group">
                                    <label htmlFor="creditNumber">Credit Card Number</label>
                                    <i className="fa fa-lock"></i>
                                    <input type="text" className="form-control has-icon" id="creditNumber"/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="creditName">Name on Credit Card</label>
                                    <input type="text" className="form-control has-icon" id="creditName"/>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label htmlFor="selectMonth">Expiry Month</label>
                                            <select className="form-control" id="selectMonth">
                                                <option></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label htmlFor="selectYear">Expiry Year</label>
                                            <select className="form-control" id="selectYear">
                                                <option></option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label htmlFor="creditNumber">Credit Card Number</label>
                                            <i className="fa fa-question-circle"></i>
                                            <input type="text" className="form-control has-icon" id="creditNumber"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-check checkbox">
                                <label className="form-check-label green-checkbox">
                                    <input type="checkbox" className="form-check-input"/>
                                    <i className="helper"></i>
                                    Yes, save my card details for future purchases.
                                </label>
                            </div>
                            <button className="btn btn-green btn-checkout" onClick={this.goToBuyDroplet}>CHECKOUT NOW ➡</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PaymentDetailComponent;
