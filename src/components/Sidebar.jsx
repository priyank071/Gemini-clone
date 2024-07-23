import React, { useContext } from 'react'
import { useState } from 'react';
import { assets } from '../assets/assets.js';
import { Context } from '../context/Context.jsx';
function Sidebar() {
    const [show,setShow]=useState(true);
    const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context);
    const loadPrevPrompt=async(prompt)=>{
      setRecentPrompt(prompt)
        onSent(prompt);
    }
  return (
    <div className="sidebar">
      <div className="top">
          <img onClick={()=>setShow(prev=>!prev)}  src={assets.menu_icon} alt="" className="menu" />
          <div onClick={()=>newChat()} className="new-Chat">
            <img src={assets.plus_icon} alt="" className="plus" />
            {show?<p>New Chat</p>:null}
          </div>
          { show?
          <div className="recent">
            <p className="recent-title">
                Recent
            </p>
            {
              prevPrompt.map((item,index)=>{
                return (
                  <div onClick={()=>loadPrevPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" className="question" />
                  <p>{item.slice(0,18)}...</p>
                </div>
                )
              })
            }
          </div>:null
}
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