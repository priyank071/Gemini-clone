import React, { useContext } from 'react'
import { assets } from '../assets/assets.js';
import { Context } from '../context/Context.jsx';
function Main() {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className="main">
      <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" className="user-icon" />
      </div>
      <div className="main-container">
        {
          !showResult?
          <>
          <div className="greeting">
            <p><span>Hello Dev</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Lorem ipsum dolo Minus laboriosam, nisi ratione quo porro quae natus consequuntuxcep</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Lorem ipsum dolo Minus laboriosam, nisi ratione quo porro quae natus consequuntuxcep</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Lorem ipsum dolo Minus laboriosam, nisi ratione quo porro quae natus consequuntuxcep</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Lorem ipsum dolo Minus laboriosam, nisi ratione quo porro quae natus consequuntuxcep</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          </>
          :
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {
                loading?
                <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                </div>:
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        }
          
          <div className="main-bottom">
            <div className="search-box">
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter your prompt here...." />
                <div className="icon">
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <div className="bottom-info">
                <p>Powered by OpenAI </p>
            </div>
          </div>
      </div>
  </div>
  )
}

export default Main