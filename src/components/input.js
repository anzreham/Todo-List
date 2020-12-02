import React from 'react'

const Input = props =>{

const{list, setlist} = props;
let task = {
    name: "",
    isComplete: false
}
const onchange = (e) =>{
task.name = e.target.value;
};

const onClick = (e) =>{
    //add to previous list new values... is spread
    setlist([...list, task]);
    e.target.value ="";
    // to reset the value
}


return (

    <div className ="container w-50">
<input type ="text" className ="form-control"  name = "task" onChange = {onchange}></input>
<button className = "btn btn-primary btn-block" onClick = {onClick}  > Add Task </button>
    </div>
)

}

export default Input;