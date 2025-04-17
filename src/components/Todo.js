import React,{useState} from "react";



const Todo=()=>{

let [value,setvalue]= useState("")
let [currentvalue,setcurrentvalue]= useState([])
let [flag,setflag]=useState(false)

function update(){
setflag(true)
setcurrentvalue([...currentvalue,value])
setvalue("")
}
function Delete(index){
    let temp = [...currentvalue]
    temp.splice(index,1)
    setcurrentvalue(temp)

}
    return(
     
        <div>
            <input type = "text"
            onChange={(e)=>setvalue(e.target.value)}
            value={value}/>
            <button onClick={update}>Add Todo</button>
            {
                flag && currentvalue.map((value,index)=>(
                    <div>
                    <p>{value}{"              "}
                    <button onClick={()=>Delete(index)}>Remove</button>
                        </p></div>
                ))
            }
        </div>
    )
}

export default Todo