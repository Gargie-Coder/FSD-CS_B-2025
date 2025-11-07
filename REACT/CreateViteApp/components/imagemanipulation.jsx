import React,{useState} from 'react'
import cat from './cat6.png';
function imagemanipulation() {
  const [imgHeight, setImgHeight] = useState(300);
  const [imgWidth, setImgWidth] = useState(400);
  const [red,setred]=useState(0);
  const [green,setgreen]=useState(0);
  const [blue,setblue]=useState(0);
  const[imageangle,setimageangle]=useState(0);
  function increaseHeight() {
    setImgHeight(imgHeight + 10);
  }
  function decreaseHeight() {
    setImgHeight(imgHeight - 10);
  }
  function increaseWidth() {
    setImgWidth(imgWidth + 10);
  }
  function decreaseWidth() {
    setImgWidth(imgWidth - 10);
  }
  function changebgcolor() {
    setred(Math.random()*255);
    setgreen(Math.random()*255);
    setblue(Math.random()*255);
  }
  function imagerotate(){
    setimageangle(imageangle+30);
  }
  return (
    <div>
    <div style={{textAlign: 'center', border: '2px solid black', margin: '20px', padding: '20px', backgroundColor: 'white'}}>
      <h1 style={{color:'black'}}>Image Manipulation</h1>
      <img src={cat} alt="Cat" height={imgHeight} width={imgWidth} style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, transform: `rotate(${imageangle}deg)`}} />
    </div>
    <div>
      <button onClick={increaseHeight}>Increase Height</button>
      <button onClick={decreaseHeight}>Decrease Height</button>
      <button onClick={increaseWidth}>Increase Width</button>
      <button onClick={decreaseWidth}>Decrease Width</button>
      <button onClick={changebgcolor}>Change bg color</button>
      <button onClick={imagerotate}>Image Rotate</button>
    </div>
    </div>
  )
}

export default imagemanipulation