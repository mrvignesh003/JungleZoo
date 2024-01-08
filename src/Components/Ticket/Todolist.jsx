import {useState} from "react";
import './Todolist.css'
function Todolist(){
  const [num, setNum]= useState(100);
  const incNum =()=>{
    if(num<1000)
    {
    setNum(Number(num)+100);
    }
  };
  const decNum = () => {
     if(num>100)
     {
      setNum(num - 100);
     }
  }
 const handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <div className="col-xl-to">
        <p>
        Adults 
        </p>
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn-outline-primary-to" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" class="form-control-to" value={num} onChange={handleChange} />
  <div class="input-group-prepend">
    <button class="btn-outline-primary-too" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  );
}
export default Todolist;