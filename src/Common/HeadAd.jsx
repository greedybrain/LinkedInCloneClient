//! Core Modules
import React from 'react'

//! Custom Modules / Components
//

const HeadAd = () => {
        return (
                <div className="head_ad_wrapper" style={{textAlign: 'center', padding: '5px 0', cursor: 'pointer', marginBottom: '10px'}}>
                        <div className="head_ad">
                                <p style={{textDecoration: 'underline', display: 'inline-block', fontSize: '.85rem'}}>
                                        <strong>
                                                <span style={{color: '#0a66c2', textDecoration: 'underline'}}>WE'RE SO DISAPPOINTED</span>
                                        </strong>
                                        <strong> 
                                                - We really want to show you why so many healthcare professionals prefer BHG!
                                        </strong>
                                </p>
                                <span style={{color: '#00000099', marginLeft: '10px', fontSize: '.8rem'}}>
                                        Ad
                                </span>
                        </div>
                </div>
        )
}

export default HeadAd
