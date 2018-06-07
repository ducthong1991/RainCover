import React from 'react';
import PropTypes from 'prop-types';
import './PageLayout.scss';
import {ToastContainer} from 'react-toastify';

import socialMediaImg from '../assets/social-media.png';
import dropletLogoImg from '../assets/droplet-logo.png';
import incomeLogoImg from '../assets/income-logo.png';

export const PageLayout = ({children}) => (
    <div>
        <div className='page-layout__viewport'>
            {children}
        </div>


        <div className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h4 className="header-footer">Droplet</h4>
                        <p className="item-footer first-item">Press</p>
                        <p className="item-footer">Help</p>
                    </div>
                    <div className="col-3">
                        <h4 className="header-footer">Discover</h4>
                        <p className="item-footer first-item">Trust & Safety</p>
                        <p className="item-footer">Invite Friends</p>
                    </div>
                    <div className="col-3">
                        <h4 className="header-footer">Claims</h4>
                        <p className="item-footer first-item">Claim Process</p>
                        <p className="item-footer">Weather Sources</p>
                    </div>
                    <div className="col-3">
                        <img src={socialMediaImg} className="social-media-img"/>
                        <p className="item-footer first-item"><a target="_blank" href="https://www.income.com.sg/security-policy">Terms & Conditions</a></p>
                        <p className="item-footer"><a target="_blank" href="https://www.income.com.sg/privacy-policy">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
            <div className="div-copyright">
                <div className="container">
                    <img src={dropletLogoImg} className="droplet-logo"/>
                    <span className="item-footer">Copyright 2018. All rights reserved.</span>
                    <img src={incomeLogoImg} className="income-logo"/>
                </div>
            </div>
        </div>

        <ToastContainer
            position="bottom-right"
            type="default"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
        />
    </div>
);

PageLayout.propTypes = {
    children: PropTypes.node,
};

export default PageLayout;
