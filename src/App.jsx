import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
const[weight,setWeight]=useState(""); 
const[height,setHeight]=useState(""); 
const[bmi,setBmi]=useState(""); 
const[message,setMessage]=useState(""); 



// Logic
const calBmi=(e)=>{
  e.preventDefault();

  if(height==="" || weight===""){
    alert("Please Enter Vaild  Weight and Height ")
  }
  else {
  let bmi =(weight/(height*height)*703);
  setBmi(bmi.toFixed());


if(bmi<=18.4){
  setMessage("You are Under weight");
}
else if(bmi>18.5 && bmi<=24.9)
setMessage("You are Normal");
else if(bmi>24.9 && bmi<=39.9)
setMessage("You are Healthy");

else
setMessage("You are Over Weight")
}

}

const Reload = () =>{
  window.location.reload();
}



  return (
    <div className="App">
     <h2 className='text-center'>BMI Calculator</h2>
<form onSubmit={calBmi}>
     <p className='Text-left'>Enter Your Weight (kg)</p>
     <input type="text" name="" id="" value={weight} onChange={(e)=>{setWeight(e.target.value)}} placeholder="0" />
     <p className='Text-left'>Enter Your Height(in)</p>
     <input type="text" name="" id="" value={height} onChange={(e)=>{setHeight(e.target.value)}} placeholder="0" />


<h3>Your BMI is :{bmi}</h3>
<p>{message}</p>
     <input type="submit" value="Result" />
     </form>
     <input type="submit" value="Reload"  onClick={Reload}/>
    </div>
  )
}

export default App
