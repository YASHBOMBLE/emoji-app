import './App.css';
import {useState} from "react";
function App() {
 const [emoji,setEmoji]= useState("🏆")
  return (
   
    <>

      <div className='main-container'>
        <div className='title-container'>
          <h3 className='title'>favEmoji</h3>
        </div>
        <div className='main-emoji-container'>
          <div className='show-emoji-container'>
            <span className='emoji-container-content'>{emoji}</span>

          </div>
        </div>
        <div className='emoji-container'>
       
         <span className='emoji' onClick={()=>{setEmoji("💗")}}>💗</span>
          <span className='emoji' onClick={()=>{setEmoji("💖")}}>💖</span>
          <span className='emoji' onClick={()=>{setEmoji("🏆")}}>🏆</span>
          <span className='emoji' onClick={()=>{setEmoji("😍")}}>😍</span>
          <span className='emoji' onClick={()=>{setEmoji("😅")}}>😅</span>
     
        </div>
      </div>

    </>
  );
}

export default App;
