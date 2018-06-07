import React from 'react';
import './DropletHistory.scss';
import Modal from 'react-modal';
import {Link} from 'react-router';

import logoImg from '../assets/droplet-logo.png';
import logOutImg from '../assets/logout-icon.png';
import grabImg from '../assets/grab.png';

Modal.setAppElement('#root');

class DropletHistoryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showGrabModal: false,
            showTransactionModal: false
        };
    }

    onChange = () => {}

    openGrabModal = () => {
        this.setState({ showGrabModal: true });
    }

    closeGrabModal = () => {
        this.setState({ showGrabModal: false });
    }

    openTransactionModal = () => {
        this.setState({ showTransactionModal: true });
    }

    closeTransactionModal = () => {
        this.setState({ showTransactionModal: false });
    }

    goToIndex = () => {
        this.props.router.push('/');
    }

    render() {
        return (
            <div className="droplet-history">
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

                <div className="container history-container">
                    <div className="row">
                        <div className="col-2">
                            <button className="btn btn-white">Buy Droplet</button>
                            <button className="btn btn-white">Invite Friends</button>
                            <div className="list-menu">
                                <Link to='/droplet-history'>Droplet History</Link>
                                <label>Payment Method</label>
                                <Link to='/user-profile'>User Profile</Link>
                            </div>
                        </div>
                        <div className="col-10 history-section">
                            <div className="title-section">
                                <h4 className="title-text">Droplet History</h4>
                            </div>
                            <div className="form-group date-section">
                                <select className="form-control select-year" value="2017" onChange={this.onChange}>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option value="2017">2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                </select>
                                <select className="form-control select-from">
                                    <option>From: January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select className="form-control select-from" value="12" onChange={this.onChange}>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option value="12">To: December</option>
                                </select>
                            </div>

                            <div className="table-section">
                                <table className="table table-profile">
                                    <thead>
                                    <tr>
                                        <th>Policy</th>
                                        <th>Start Date</th>
                                        <th>Duration</th>
                                        <th>Description</th>
                                        <th>Cost (i)</th>
                                        <th>Paid Out</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="highlight-row">
                                        <td className="policy-text">30042018</td>
                                        <td>30 Apr 18</td>
                                        <td>3 Days</td>
                                        <td>Purchased</td>
                                        <td>$12.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Claim Available (3 days left)</strong></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr className="highlight-row">
                                        <td className="policy-text">28042018</td>
                                        <td>28 Apr 18</td>
                                        <td>1 Days</td>
                                        <td>Purchased</td>
                                        <td>$4.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Pending Review</td>
                                        <td></td>
                                        <td className="green-text"><p className="text-right" onClick={this.openGrabModal}>View</p></td>
                                    </tr>

                                    <tr className="highlight-row">
                                        <td className="policy-text">18042018</td>
                                        <td>18 Apr 18</td>
                                        <td>1 Days</td>
                                        <td>Purchased</td>
                                        <td>$4.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Invalid Claim (1 days left to appeal)</td>
                                        <td></td>
                                        <td className="green-text"><p className="text-right" onClick={this.openGrabModal}>View</p></td>
                                    </tr>

                                    <tr className="highlight-row">
                                        <td className="policy-text">08042018</td>
                                        <td>08 Apr 18</td>
                                        <td>1 Days</td>
                                        <td>Purchased</td>
                                        <td>$4.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Paid Out</td>
                                        <td></td>
                                        <td className="green-text">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left" onClick={this.openTransactionModal}>$16.40</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-right" onClick={this.openGrabModal}>View</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Paid Out</td>
                                        <td></td>
                                        <td className="green-text">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left" onClick={this.openTransactionModal}>$33.57</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-right" onClick={this.openGrabModal}>View</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Policy Expired</td>
                                        <td></td>
                                        <td className="green-text"></td>
                                    </tr>

                                    <tr className="highlight-row">
                                        <td className="policy-text">20032018</td>
                                        <td>20 Mar 18</td>
                                        <td>6 Days</td>
                                        <td>Purchased</td>
                                        <td>$24.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Invalid Claim</td>
                                        <td></td>
                                        <td className="green-text"><p className="text-right" onClick={this.openGrabModal}>View</p></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Appeal Rejected</td>
                                        <td></td>
                                        <td className="green-text"><p className="text-right" onClick={this.openGrabModal}>View</p></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Policy Expired</td>
                                        <td className="green-text"></td>
                                        <td className="green-text"></td>
                                    </tr>

                                    <tr className="highlight-row">
                                        <td className="policy-text">13022018</td>
                                        <td>13 Feb 18</td>
                                        <td>1 Days</td>
                                        <td>Purchased</td>
                                        <td>$4.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Invalid Claim</td>
                                        <td></td>
                                        <td className="green-text"><p className="text-right" onClick={this.openGrabModal}>View</p></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Appeal Approved & Paid Out</td>
                                        <td></td>
                                        <td className="green-text">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left" onClick={this.openTransactionModal}>$12.90</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-right" onClick={this.openGrabModal}>View</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Policy Expired</td>
                                        <td className="green-text"></td>
                                        <td className="green-text"></td>
                                    </tr>

                                    <tr className="highlight-row">
                                        <td className="policy-text">09022018</td>
                                        <td>09 Feb 18</td>
                                        <td>1 Days</td>
                                        <td>Purchased</td>
                                        <td>$4.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Paid Out</td>
                                        <td></td>
                                        <td className="green-text">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left" onClick={this.openTransactionModal}>$14.46</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-right" onClick={this.openGrabModal}>View</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Policy Expired</td>
                                        <td className="green-text"></td>
                                        <td className="green-text"></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="text-center view-more">
                                    <a className="clickable">View more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.showGrabModal}
                    className="modal-dialog "
                >
                    <div className="modal-content grab-modal">
                        <div className="modal-header">
                            <h5 className="modal-title">View Receipt</h5>
                        </div>
                        <div className="modal-body">
                            <p>Uploaded 30 Apr 2018, 3.35pm</p>
                            <img src={grabImg} className="grab-img"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-close" onClick={this.closeGrabModal}>Close</button>
                        </div>
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.showTransactionModal}
                    className="modal-dialog "
                >
                    <div className="modal-content transaction-modal">
                        <div className="modal-header">
                            <h5 className="modal-title">View Transaction Reference</h5>
                        </div>
                        <div className="modal-body">
                            <p>You have received SGD 14.00 <br/>
                                in your PayNow-linked account ending 6463<br/>
                                on 30 Apr 2018, 3.35pm<br/>
                                <br/>
                                Ref. 8173815719</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-close" onClick={this.closeTransactionModal}>Close</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default DropletHistoryContainer;
