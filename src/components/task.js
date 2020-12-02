import React from 'react'

const Task = (props) => {
const {task,index, setlist , list} = props;


    console.log(list);
 



const onClick = () =>{


    // setlist( (list || []).list.filter((_item, i) => i !== index));

    setlist(()=>{
     return  list.filter( task => list.indexOf(task) !== index);
                   }
     );
};



const onChange = (e) =>{

    list[index].isComplete = !list[index].isComplete;
setlist ([...list] )
};
return(
  <div class="container bg-secondry">
     <h4> {task.name}</h4>  
     <label htmlFor="">  is Completed?</label>
     <input type="checkbox" name  = "" checked = {task.isComplete} onChange = {onChange} />
     <button className ="btn btn-sm btn-danger" onClick = {onClick}>X</button>
   </div>  
)
}

export default Task;