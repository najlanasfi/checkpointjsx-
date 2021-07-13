import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'

import image from "./React-JS.png"
function App() {
return (
//<div style="border:solid 1px black;max-width:100vw">
<div style={{border:"1px solid black" ,maxwidth:100}}>

<h1 style={{color:'red'}}>Your name here </h1>
<br></br>
<img src={image} alt ='ReactJS' />
<br></br>
<img src={"/react.png"} alt="react" />
<br></br>
<video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4"/>
</video>

</div>
/*
<br >*/

);
}

export default App;
