import './App.css';
import { useState } from "react";
function App() {
  const [emoji, setEmoji] = useState("🏆")
  const [emojiColor, setEmojiColor] = useState("white")
  const [emojiSize,setEmojiSize]=useState("10")
  const [emojiDeg,setEmojiDeg]=useState("100")
  return (

    <>

      <div className='main-container'>
        <div className='title-container'>
          <h3 className='title'>favEmoji</h3>
        </div>
        <div className='main-emoji-container'>

          <div className='show-emoji-container' style={{ backgroundColor: emojiColor,transform:`rotate(${emojiDeg * 3.6}deg)` }}>

            <span className='emoji-container-content' style={{fontSize:`${emojiSize}px`}}>{emoji}</span>

          </div>
          <div className='editing container'>
            <span></span>
            <div className='editing-tool' >
              <div className='color-container'>
                <div className='color-item bg-red' onClick={()=>{setEmojiColor("red")}}></div>
                <div className='color-item bg-yellow' onClick={()=>{setEmojiColor("yellow")}}></div>
                <div className='color-item bg-purple' onClick={()=>{setEmojiColor("purple")}} > </div>
                <div className='color-item bg-pink' onClick={()=>{setEmojiColor("pink")}} ></div>
              </div>
    
              <div className='size-container'>
               
              <input type="range" onChange={(e)=>{setEmojiSize(e.target.value)}} className="size-slider" / >
           
             
              </div>
              <div className='size-container'>

              <input type="range" onChange={(e)=>{setEmojiDeg(e.target.value)}} className="size-slider" / >
          
             
              </div>
            </div>
          </div>
        </div>

        <div className='emoji-container'>

          <span className='emoji' onClick={() => { setEmoji("💗") }}>💗</span>
          <span className='emoji' onClick={() => { setEmoji("💖") }}>💖</span>
          <span className='emoji' onClick={() => { setEmoji("🏆") }}>🏆</span>
          <span className='emoji' onClick={() => { setEmoji("😍") }}>😍</span>
          <span className='emoji' onClick={() => { setEmoji("😅") }}>😅</span>

        </div>
      </div>

    </>
  );
}

export default App;
