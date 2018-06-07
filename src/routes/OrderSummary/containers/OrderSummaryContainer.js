import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './OrderSummary.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import classNames from 'classnames';
import { DateRangePicker } from 'react-date-range';

import logoImg from '../assets/droplet-logo.png';
import logOutImg from '../assets/logout-icon.png';

class OrderSummaryContainer extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date();
        this.state = {
            startDate: today,
            endDate: today,
            startDateString: this.getDateString(today),
            endDateString: this.getDateString(today),
            endDateYearString: this.getYearString(today),
            days: 1,
            showDatePicker: false,
            promoCode: 'may31x'
        };
    }

    componentDidMount() {
        if (this.props.homeView) {
            const {dateRange} = this.props.homeView;
            this.updateDateRange(dateRange.startDate, dateRange.endDate);
        }
    }

    onChange = () => {
    }

    onInputChange = (value, name) => {
        let state = this.state;
        state[name] = value;
        this.setState({state});
    };

    goToPaymentDetail = () => {
        this.props.router.push('/payment-detail');
    }

    goToIndex = () => {
        this.props.router.push('/');
    }

    handleSelect = (ranges) => {
        var startDate = ranges.selection.startDate;
        var endDate = ranges.selection.endDate;
        var days = this.subtractDate(startDate, endDate) + 1;
        this.updateDateRange(startDate, endDate);
    }

    updateDateRange = (startDate, endDate) => {
        var days = this.subtractDate(startDate, endDate) + 1;
        this.setState(
            {
                startDate: startDate,
                endDate: endDate,
                startDateString: this.getDateString(startDate),
                endDateString: this.getDateString(endDate),
                endDateYearString: this.getYearString(endDate),
                days: days
            }
        );
    }

    openDatePicker = () => {
        this.setState({showDatePicker: true});
    }

    closeDatePicker = () => {
        this.setState({showDatePicker: false});
    }

    subtractDate(date1, date2) {
        var one_day=1000*60*60*24;

        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        var difference_ms = date2_ms - date1_ms;

        return Math.round(difference_ms/one_day);
    }

    getDateString = (date, shouldGetWeekDay = false) => {
        var str = date.toDateString();
        if (!shouldGetWeekDay) {
            return `${str.substring(0, 3)}, ${str.substring(8, 10)} ${str.substring(4, 7)}`;
        } else {
            return `${str.substring(8, 10)} ${str.substring(4, 7)}`;
        }
    }

    getYearString = (date) => {
        return `${date.getFullYear()}`;
    }

    render() {
        const {startDate, endDate, days, startDateString, endDateString, endDateYearString, showDatePicker, promoCode} = this.state;
        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: 'selection',
        };
        return (
            <div className="oder-summary">
                <div className="header-section">
                    <div className="header-items">
                        <div className="header-left">
                            <img src={logoImg} className="droplet-logo" onClick={this.goToIndex} />
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
                                <h4 className="step-text">Step 3 : Order Summary</h4>
                            </div>

                            <div className="pick-date-section">
                                <div className="row label-section">
                                    <div className="offset-1 col-4">
                                        <label className="title-text">Covered Dates</label>
                                    </div>
                                    <div className="col-5">
                                        <label className="title-text">Total Cost <span>(S$4/day)</span></label>
                                    </div>
                                </div>
                                <div className="row second-section">
                                    <div className="offset-1 col-4">
                                        <p className="date-time clickable" onClick={this.openDatePicker}>{startDateString} <span>to</span> <br/>
                                            {endDateString} <span>{endDateYearString}</span></p>
                                        <div className={classNames({"d-none": !showDatePicker})}>
                                            <div className="date-popup-narrow"></div>
                                            <DateRangePicker
                                                ranges={[selectionRange]}
                                                onChange={this.handleSelect}
                                                months={2}
                                                direction="horizontal"
                                                showMonthAndYearPickers={false}
                                                showDateDisplay={false}
                                            />
                                            <div className="date-picker-footer">
                                                <button type="button" className="btn btn-close" onClick={this.closeDatePicker}>Close</button>
                                            </div>
                                            <div className="date-range-picker-modal" onClick={this.closeDatePicker}>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-green btn-change-date" onClick={this.openDatePicker}>CHANGE DATE</button>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <p className="money">S${days*4}.00</p>
                                        <hr className="green-line"/>
                                        <p className="detail-text">
                                            <strong>{days} Day Coverage</strong><br/>
                                            Cover 70% of Your Fare<br/>
                                            <span>Maximum Claim for {days} days:<br/>
                                                S${days*65} (up to S$65/day)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="table-section">
                                <table className="table order-table">
                                    <thead>
                                    <tr>
                                        <th>Order</th>
                                        <th>Details</th>
                                        <th className="third-column"></th>
                                        <th className="text-right">Total($)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><strong>{days} Day Coverages</strong></td>
                                        <td>{this.getDateString(startDate,true)} - {this.getDateString(endDate, true)} {this.getYearString(endDate)}</td>
                                        <td></td>
                                        <td className="text-right">{days * 4}.00</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right">Promo Code Applied({promoCode}):</td>
                                        <td className="text-right">-2.00</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right"><strong>Total:</strong></td>
                                        <td className="text-right total-number">{days * 4 - 2}.00</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>

                            <div className="promo-code-section">
                                <div className="form-group">
                                    <label htmlFor="code" className="promo-text">Promo Code, if any:</label>
                                    <input type="input" className="form-control promo-input" id="code"
                                        value={promoCode}
                                           onChange={(e) => {
                                               this.onInputChange(e.target.value, 'promoCode')
                                           }}/>
                                </div>
                                <button className="btn btn-green btn-checkout" onClick={this.goToPaymentDetail}>CHECKOUT NOW ➡</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

const mapStateToProps = (state) => ({
    homeView: state.homeView
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryContainer);
