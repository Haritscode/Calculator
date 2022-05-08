import React, { useState,useEffect } from "react";
import { TiMediaPlayReverseOutline } from "react-icons/ti";
import Buttons from "./Components/Buttons/Buttons";
import uuid from "react-uuid";

function App() {
  const [calc, setcalc] = useState('')
  const a=[1,2,3,4,5,6,7];
  const [result,setresult]=useState();
  
  const number=[{data:'C'},{data:'+/-'},{data:'%'},{data:'/'},{data:7},{data:8},{data:9},{data:'*'},{data:4},{data:5},{data:6},{data:'-'},{data:1},{data:2},{data:3},{data:'+'}];
  const ops=[ '/' , '*' , '+' , '-' , '.' ,'+/-'];
  
  const btnclkHandler=async(key)=>{
    if(key==='C')
    {
      setcalc('')
      setresult('')
    }
    else if(key==='=')
    {
      setcalc(result);
      setresult()
    }
    else if(key==='+/-')
    {
      setcalc(calc.substring(0,calc.length-1));
      calc.length>0?setresult(eval(calc.substring(0,calc.length-1))).toString():setresult();
    }
    else if(ops.includes(key) && calc==='' || ops.includes(key) && ops.includes(calc.slice(-1))){
      return;
    }
    else{
      setcalc(calc+key)
    }
    if(!ops.includes(key)){
      setresult(eval(calc+key).toString());
    }
  };
  


  return (
    <>
      <div className="flex flex-col items-center max-w-lg w-fit  m-auto justify-center mt-52 overflow-hidden">
        <div className="bg-black w-full overflow-hidden h-96 rounded-2xl flex flex-col justify-end pb-12 gap-4 items-end">
          <div className="text-regid-purple text-5xl font-Oswald font-normal">
           {calc}
          </div>
          <div className="text-white text-5xl font-Oswald font-normal">
            {result!==''?result:<div className="h-12"></div>}
          </div>
        </div>
        <div className="bg-white w-fit h-fit rounded-2xl relative -top-6 p-6">
          <div className="grid grid-cols-4 justify-between gap-6 h-fit mb-3">
            {
              number.map(({data})=>
              <div key={uuid()}>
                <Buttons Data={data} ButtonClick={btnclkHandler}/>
              </div>
              )
            }
      </div>
      <div className="flex gap-8">
        <button className='shadow-3xl shadow-gray-300 drop-shadow- w-56 py-10 rounded-lg text-3xl font-medium font-Oswald text-gray-400' onClick={()=>btnclkHandler(0)}>
            0
        </button>
        <Buttons Data={'.'} ButtonClick={btnclkHandler}/>
        <Buttons Data={'='} ButtonClick={btnclkHandler}/>
      </div>
        </div>
      </div>
    </>
  );
}

export default App;
