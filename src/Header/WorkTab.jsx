//! Core modules
import React from 'react'

//! Custom Modules/ Components
import Icon from '../Common/Icon'
import '../Styles/WorkTab.css'

const WorkTab = () => {
        return (
                <div className="work_tab_wrapper">
                        <Icon name="fas fa-th" />
                        <div className="work_tab_lower">
                                <div className="work">
                                        Work
                                </div>
                                <div className="drop_down_arrow">
                                        &#9662;
                                </div>
                        </div>
                </div>
        )
}

export default WorkTab
