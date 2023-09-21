import React, { useEffect } from 'react'
import { useState } from 'react';

const Time = () => {

  const [timeString, setTimeString] = useState("");
  const [intialTimeHrs, setInitialTimeHrs] = useState("");
  const [intialTimeMin, setInitialTimeMin] = useState("");

  const [additionalTimeHrs, setAdditionalTimeHrs] = useState("");
  const [additionalTimeMin, setAdditionalTimeMin] = useState("");

  const [ansTimeHrs, setAnsTimeHrs] = useState("");
  const [ansTimeMin, setAnsTimeMin] = useState("");

  const[ansStr,setAnsStr] = useState("");

  const getTime = () => {
    let hrs = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();


    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hrs < 10) {
      hrs = "0" + hrs;
    }


    let str = `${hrs} : ${minutes} : ${seconds}`;
    return str;
  }


  var today = new Date();


  setTimeout(() => {
    setTimeString(getTime());

  }, 1000);

  const setInitialTime = (flag, val) => {
    if (flag) {
      if (Number(val) > 24 || Number(val) < 0) {
        alert("Hrs cannot exceed 24");
      }
      else {
        setInitialTimeHrs(val);
      }
    }
    else {
      if (Number(val) >= 60 || Number(val) < 0) {
        alert("Minutes cannot exceed 60");
      }
      else {
        setInitialTimeMin(val);
      }

    }
  }
  const setAdditonalTime = (flag, val) => {
    if (flag) {
      setAdditionalTimeHrs(val);
    }

    else {
      setAdditionalTimeMin(val);
    }

  }

  const calculateOperation = ()=>{ 

    

    let totalMinutes = Number(additionalTimeMin)+Number(intialTimeMin);
    let totalHours = Number(additionalTimeHrs)+Number(intialTimeHrs);

    // console.log("totalHours "+ totalHours);
    // console.log("totalMinutes"+ totalMinutes);

    let extraHours = totalMinutes / 60;
    // console.log("extra hours "+ extraHours);

    let finalMinutes = totalMinutes % 60;

    let finalHours = Number(parseInt(extraHours))+Number(totalHours);

    let day = parseInt(finalHours / 24);
    let dayHours = finalHours % 24;
    let dayMinutes = finalMinutes;

    // finalHours = finalHours/24;

    if(finalHours > 24){
      finalHours = finalHours%24;
    }

    console.log("final hours "+ finalHours);
    console.log("final minute "+ finalMinutes);

    setAnsTimeHrs(finalHours);
    setAnsTimeMin(finalMinutes);

    

    console.log(day+" Day " +dayHours+" Hour "+dayMinutes +" Minutes ");

setAnsStr(day+" Day " +dayHours+" Hour "+dayMinutes +" Minutes ");

  }





return (
  <div className=' bg-blue-200 w-screen h-screen'>

    <nav className='w-full text-center justify-between px-4 items-center bg-black text-white h-[100px]  flex gap-4 '>

      <div className='text-[32px] text-white'>Time</div>
      <div className='text-[22px] text-white'>{timeString}</div>


    </nav>

    <div className='flex gap-4 justify-center items-center mt-16'>
      <input type='number' className='w-[150px] outline-none focus:outline-none px-2 py-4 rounded-xl' placeholder='Hours' value={intialTimeHrs} onChange={(e) => { setInitialTime(1, e.target.value) }} />
      :
      <input type='number' className='w-[150px] outline-none focus:outline-none px-2 py-4 rounded-xl ' placeholder='Minutes' value={intialTimeMin} onChange={(e) => { setInitialTime(0, e.target.value) }} />



    </div>
    <div className='text-center my-4 text-3xl font-bold'>  + </div>
    <div className='flex gap-4 justify-center items-center '>

      <input type='number' className='w-[150px] outline-none focus:outline-none px-2 py-4 rounded-xl' placeholder='Hours' value={additionalTimeHrs} onChange={(e) => { setAdditonalTime(1, e.target.value) }} />
      :
      <input type='number' className='w-[150px] outline-none focus:outline-none px-2 py-4 rounded-xl ' placeholder='Minutes' value={additionalTimeMin} onChange={(e) => { setAdditonalTime(0, e.target.value) }}/>

    </div>


    <button className='my-6 mx-auto block bg-green-500 text-white font-semibold focus:ring-0 text-lg px-4 py-2 rounded-xl' onClick={()=>calculateOperation()}>Calculate </button>
    <div className='flex gap-4 justify-center items-center mt-4 '>
    <input type='number' className='w-[150px] outline-none focus:outline-none px-2 py-4 rounded-xl' placeholder='Hours' value={ansTimeHrs} />
      :
      <input type='number' className='w-[150px] outline-none focus:outline-none px-2 py-4 rounded-xl ' placeholder='Minutes' value={ansTimeMin} />
    </div>

    <div className='text-2xl text-left mt-12 mx-12 font-semibold '>Total time : {ansStr}</div>

  </div>
)
}


export default Time