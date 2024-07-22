import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context=createContext();
const ContextProvider=(props)=>{
    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompt,setPrevPrompt]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");
    const delay=(index,nextWord)=>{
        setTimeout(function(){
             setResultData(prev=>prev+nextWord)
        },75*index)
    }
     const onSent=async(prompt)=>{
        setResultData("")
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response= await run(input);
        let responseArray=response.split("**");
        let newResponse;
        for (let i = 0; i < responseArray.length; i++) {
            if(i===0 || i%2!==1) {
                newResponse+=responseArray[i];
            }else{
                newResponse+= "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2=newResponse.split("*").join("</hr>");
        let newResponseArray=newResponse2.split(" ")
        for(let i=0;i<newResponseArray.length;i++) {
            const nextWord=newResponseArray[i];
            delay(i,nextWord+"");
        }
        setLoading(false);
        setInput("");
     }
     const contextValue={
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput
     }  
     return(
         <Context.Provider value={contextValue}>
             {props.children}
         </Context.Provider>
     )
}
export default ContextProvider