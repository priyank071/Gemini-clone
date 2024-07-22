import React from 'react'
import { useState } from 'react';
import { assets } from '../assets/assets.js';
function Sidebar() {
    const [show,setShow]=useState(true);
  return (
    <div className="sidebar">
      <div className="top">
          <img onClick={()=>setShow(prev=>!prev)}  src={assets.menu_icon} alt="" className="menu" />
          <div className="new-Chat">
            <img src={assets.plus_icon} alt="" className="plus" />
            {show?<p>New Chat</p>:null}
          </div>
          <div className="recent">
            <p className="recent-title">
                Recent
            </p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" className="question" />
              {show?<p>Recent</p>:null}
            </div>
          </div>
      </div>
      <div className="bottom">
          <div className="bottom-item recent-entry">
               <img src={assets.question_icon} alt="" />
               {show?<p>Help</p>:null}
          </div>
          <div className="bottom-item recent-entry">
               <img src={assets.history_icon} alt="" />
               {show?<p>History</p>:null}
          </div>
          <div className="bottom-item recent-entry">
               <img src={assets.setting_icon} alt="" />
               {show?<p>Setting</p>:null}
          </div>
      </div>
    </div>
  )
}

export default Sidebar