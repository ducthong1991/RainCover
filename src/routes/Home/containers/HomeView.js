import React from 'react';
import ReactDOM from 'react-dom';
import './HomeView.scss';
import classNames from 'classnames';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateDateRange} from '../modules/home';

// images
import background1 from '../assets/bg-1.png';
import logo from '../assets/droplet-logo.png';
import grabLogo from '../assets/grab-logo.png';
import comforLogo from '../assets/comfor-logo.png';
import smrtLogo from '../assets/smrt-logo.png';
import transcabLogo from '../assets/transcab-logo.png';
import bg2 from '../assets/bg-2.png';
import btnPlay from '../assets/btn-play.png';
import neverFearRainImg from '../assets/never-fear-rain.png';
import easyPayoutImg from '../assets/easy-payout.png';
import freeCancelImg from '../assets/free-cancel.png';
import bg3 from '../assets/bg-3.png';
import pickDropletImg from '../assets/pick-droplet.png';
import rainSurgeImg from '../assets/rain-surge.png';
import submitReimburseImg from '../assets/submit-reimburse.png';
import clam1Img from '../assets/claim-01.png';
import clam2Img from '../assets/claim-02.png';
import clam3Img from '../assets/claim-03.png';
import bg4 from '../assets/bg-4.png';
import whiteRainImg from '../assets/white-rain.png';
import rainWhiteSmallImg from '../assets/rain-mini.png';
import cloudySmallImg from '../assets/cloudy-sm.png';
import stormyBlackImg from '../assets/stormy-black.png';
import rainBlackImg from '../assets/rain-black.png';
import cloudyBlackImg from '../assets/cloudy-black.png';

class HomeViewContainer extends React.Component {

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
            showDatePicker: false
        };
    }

    buyNow = () => {
        const node = ReactDOM.findDOMNode(this.refs.buySection)
        window.scrollTo(0, node.offsetTop - 79);
    }

    goToInstructionSection = () => {
        const node = ReactDOM.findDOMNode(this.refs.instructionSection)
        window.scrollTo(0, node.offsetTop - 79);
    }

    goToAccountPassword = () => {
        this.props.updateDateRange(this.state.startDate, this.state.endDate);
        this.props.router.push('/account-password');
    }

    handleSelect = (ranges) => {
        var startDate = ranges.selection.startDate;
        var endDate = ranges.selection.endDate;
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

    getDateString(date) {
        var str = date.toDateString();
        return `${str.substring(0, 3)}, ${str.substring(8,10)} ${str.substring(4,7)}`;
    }

    getYearString(date) {
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
            <div className="homepage">
                <div className="homepage-header" style={{backgroundImage: `url(${background1})`}}>
                    <div className="header-section sticky-header" style={{backgroundImage: `url(${background1})`}}>
                        <div className="logo">
                            <img src={logo} alt="logo"/>
                        </div>

                        <div className="header-right-session">
                            <label className="header-text pointer" onClick={this.goToInstructionSection}>How it Works</label>
                            <label className="header-text pointer">Login</label>
                            <button className="btn btn-buy-now" onClick={this.buyNow}>BUY NOW</button>
                        </div>
                    </div>

                    <div className="container text-center">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="destination-text">Get to your destination on time with no extra cost</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="cover-text">Cover 70% of your Grab fare <br/>
                                    and cancellation fees when it rains</p>
                            </div>
                        </div>
                        <div className="row button-section">
                            <div className="col-12">
                                <button className="btn btn-green btn-buy" onClick={this.buyNow}>BUY NOW</button>
                                <button className="btn btn-gray" onClick={this.goToInstructionSection}>HOW IT WORKS</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="logos-section">
                    <div className="logos-group container">
                        <div className="row">
                            <div className="col-3 text-center">
                                <img src={grabLogo} alt="logo" className="grab-logo"/>
                            </div>
                            <div className="col-3 text-center">
                                <img src={comforLogo} alt="logo" className="comfor-logo"/>
                            </div>
                            <div className="col-3 text-center">
                                <img src={smrtLogo} alt="logo" className="smrt-logo"/>
                            </div>
                            <div className="col-3 text-center">
                                <img src={transcabLogo} alt="logo" className="transcab-logo"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="discover-section" style={{backgroundImage: `url(${bg2})`}}>
                    <div>
                        <p className="discover-text">
                            Discover how you can get priority rides and reach your <br/>
                            destination comfortably at no extra cost
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={btnPlay} className="btn-play clickable-underline"/>
                        </div>
                        <div>
                            <label className="watch-text">WATCH VIDEO</label>
                        </div>
                    </div>
                </div>

                <div className="benefit-section">
                    <div className="container text-center items-group">
                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={neverFearRainImg} className="nfrImg"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Never Fear Rain</h4>
                                        <p className="detail-text">Just go ahead and book that<br/>
                                            private hire or taxi ride when it rains.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={easyPayoutImg} className="esImg"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Easy Payout</h4>
                                        <p className="detail-text">Simply send us your receipt and <br/>
                                            we’ll handle the rest.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={freeCancelImg} className="fcImg"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Free Cancellations</h4>
                                        <p className="detail-text">Just cancel the ride when you <br/>
                                            cannot wait any longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-green btn-buy" onClick={this.buyNow}>BUY NOW</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div style={{backgroundImage: `url(${bg3})`}} className="surge-charges-section">
                    <div className="text-center">
                        <h4 className="header-text">What are Surge Charges?</h4>
                        <p className="detail-text">It costs approximately $37 to get from one end of Singapore to the other. Typical <br/>
                            surge charges during wet weather adds another $18 to $28 on top of that. </p>
                        <p className="detail-text">We shouldn’t let the weather control our time or money.</p>
                    </div>
                </div>

                <div className="instruction-section" ref="instructionSection">
                    <div className="container text-center">
                        <div className="header-div">
                            <h4 className="header-text">How does it work?</h4>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={pickDropletImg} className="pd-img"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Pick Droplet Dates</h4>
                                        <p className="detail-text">Buy Droplet in advance to cover<br/>
                                            wet weather days or on important<br/>
                                            events.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={rainSurgeImg} className="rs-img"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Rain = Surge</h4>
                                        <p className="detail-text">If it rains based on NEA records, we will<br/>
                                            cover 70% of the surge + fare charges of<br/>
                                            your taxi or private hire ride.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={submitReimburseImg} className="sr-img"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Submit + Reimburse</h4>
                                        <p className="detail-text">To claim, just forward your receipt to<br/>
                                            us and you’ll be reimbursed via<br/>
                                            PayNow. Easy!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="break-line">
                        </hr>

                        <div className="header-div header-2">
                            <h4 className="header-text">How to submit a claim?</h4>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="header-text">Step 1</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img src={clam1Img} className="c1-img"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Find the Grab receipt</h4>
                                        <p className="detail-text">Make sure you’ve covered with <br/>
                                            Droplet on that day before <br/>
                                            submitting!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="header-text">Step 2</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img src={clam2Img} className="c1-img"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Forward the entire email</h4>
                                        <p className="detail-text">Do not change anything on the email as <br/>
                                            we need everything as it to process your <br/>
                                            claim.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="header-text">Step 3</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img src={clam3Img} className="c1-img"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="item-text">Send to itrained@droplet.sg</h4>
                                        <p className="detail-text">Once we get your email, you’ll get a <br/>
                                            confirmation on claim status and <br/>
                                            we’ll handle the rest!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-green btn-buy" onClick={this.buyNow}>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="quote-section text-center" style={{backgroundImage: `url(${bg4})`}}>
                    <p className="detail-text"> “I got hit with a $50 GRAB fare because it rained.<br/>
                        It happened not once, but 3 times in a month!”
                    </p>
                    <p className="author-text">- Irene Tay, Frequent Grab Rider</p>
                </div>

                <div className="container select-date-section" ref="buySection">
                    <div className="row">
                        <div className="offset-2 col-8">
                            <div className="session-account text-center">
                                <h3 className="title-text">Step 1: Select Dates</h3>
                                <p className="detail-text">Sources: <a>NEA</a> & <a>Weather Channel</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="offset-1 col-2 padding-lr padding-left-15">
                            <div className="today-section">
                                <p className="today-text">Today<br/>
                                    11 Mar</p>
                                <p className="weather-text">Heavy Rain</p>
                                <img src={whiteRainImg} className="big-weather-img"/>
                                <p className="degree-text">29°  24°</p>

                                <div className="hour-section">
                                    <span className="time-text">6am</span>
                                    <img src={rainWhiteSmallImg} className="rain-sm-img"/>
                                    <span className="time-text">26°</span>
                                </div>
                                <div className="hour-section">
                                    <span className="time-text">9am</span>
                                    <img src={rainWhiteSmallImg} className="rain-sm-img"/>
                                    <span className="time-text">27°</span>
                                </div>
                                <div className="hour-section">
                                    <span className="time-text">12pm</span>
                                    <img src={rainWhiteSmallImg} className="rain-sm-img"/>
                                    <span className="time-text">28°</span>
                                </div>
                                <div className="hour-section">
                                    <span className="time-text">3pm</span>
                                    <img src={cloudySmallImg} className="rain-sm-img"/>
                                    <span className="time-text">29°</span>
                                </div>
                                <div className="hour-section">
                                    <span className="time-text">6pm</span>
                                    <img src={cloudySmallImg} className="rain-sm-img"/>
                                    <span className="time-text">26°</span>
                                </div>
                                <div className="hour-section">
                                    <span className="time-text">9pm</span>
                                    <img src={rainWhiteSmallImg} className="rain-sm-img"/>
                                    <span className="time-text">24°</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 padding-lr">
                            <div className="other-day-section">
                                <p className="day-text">Sat<br/>
                                    12 Mar</p>
                                <p className="weather-text">Cloudy</p>
                                <img src={cloudyBlackImg} className="big-weather-img"/>
                                <p className="degree-text">30°  <span>26°</span></p>

                            </div>
                            <div className="other-day-section margin-top-20">
                                <p className="day-text">Wed<br/>
                                    16 Mar</p>
                                <p className="weather-text">Stormy</p>
                                <img src={stormyBlackImg} className="big-weather-img"/>
                                <p className="degree-text">29°  <span>24°</span></p>

                            </div>
                        </div>
                        <div className="col-2 padding-lr">
                            <div className="other-day-section">
                                <p className="day-text">Sun<br/>
                                    13 Mar</p>
                                <p className="weather-text">Rain</p>
                                <img src={rainBlackImg} className="big-weather-img"/>
                                <p className="degree-text">29°  <span>24°</span></p>

                            </div>
                            <div className="other-day-section margin-top-20">
                                <p className="day-text">Thu<br/>
                                    17 Mar</p>
                                <p className="weather-text">Stormy</p>
                                <img src={stormyBlackImg} className="big-weather-img"/>
                                <p className="degree-text">31°  <span>24°</span></p>

                            </div>
                        </div>
                        <div className="col-2 padding-lr">
                            <div className="other-day-section">
                                <p className="day-text">Mon<br/>
                                    14 Mar</p>
                                <p className="weather-text">Rain</p>
                                <img src={rainBlackImg} className="big-weather-img"/>
                                <p className="degree-text">32°  <span>24°</span></p>

                            </div>
                            <div className="other-day-section margin-top-20">
                                <p className="day-text">Fri<br/>
                                    18 Mar</p>
                                <p className="weather-text">Stormy</p>
                                <img src={stormyBlackImg} className="big-weather-img"/>
                                <p className="degree-text">29°  <span>24°</span></p>

                            </div>
                        </div>
                        <div className="col-2 padding-lr padding-15">
                            <div className="other-day-section">
                                <p className="day-text">Tue<br/>
                                    15 Mar</p>
                                <p className="weather-text">Cloudy</p>
                                <img src={cloudyBlackImg} className="big-weather-img"/>
                                <p className="degree-text">25°  <span>24°</span></p>

                            </div>
                            <div className="other-day-section margin-top-20">
                                <p className="day-text">Sat<br/>
                                    19 Mar</p>
                                <p className="weather-text">Cloudy</p>
                                <img src={cloudyBlackImg} className="big-weather-img"/>
                                <p className="degree-text">27°  <span>24°</span></p>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-1 col-10">
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
                        </div>
                    </div>
                </div>

                <div className="container create-account-section">
                    <div className="row">
                        <div className="offset-1 col-10">
                            <div className="session-account">
                                <div className="text-center">
                                    <h3 className="title-text">Step 2 : Create Your Account</h3>
                                    <p className="detail-text">Already have an account? <a>Click here to login</a></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name (in your NRIC)</label>
                                    <input className="form-control" id="fullName"
                                           placeholder="Full name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nricNumber">NRIC Number</label>
                                    <input className="form-control" id="nricNumber"
                                           placeholder="NRIC Number"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label> <label className="note">(Be sure that you use this email for Grab)</label>
                                    <input className="form-control" id="email"
                                           placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobileNumber">Mobile Number</label> <label className="note">(Be sure that this is linked to a PayNow Account)</label>
                                    <input className="form-control" id="mobileNumber"
                                           placeholder="Mobile Number"/>
                                </div>
                                <button type="submit" onClick={this.goToAccountPassword} className="btn btn-green btn-full-width btn-next">STEP 3: ORDER SUMMARY ➡</button>
                                <div className="form-check checkbox">
                                    <label className="form-check-label green-checkbox">
                                        <input type="checkbox" className="form-check-input"/>
                                        <i className="helper"></i>
                                        I hereby confirm that I agree to the <span className="clickable-underline">Terms & Conditions</span> and
                                        <span className="clickable-underline">Privacy Policy.</span>
                                    </label>
                                </div>
                            </div>
                            <div className="text-center email-us">
                                <p>Have questions? Email us at <label className="clickable-underline">icoveryou@droplet.sg</label></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        updateDateRange: bindActionCreators(updateDateRange, dispatch),
    };
}

const mapStateToProps = (state) => ({
    homeView: state.homeView
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeViewContainer);
