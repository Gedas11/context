import {Form, Button} from "react-bootstrap"
import { useState } from "react"
import { useGlobalContext } from "../../context/TasksContent"

const AddTask = () =>{
    const {addTask} = useGlobalContext
    const [newTask, setNewTask] = useState({
       'title':'',
       'desc':''
    })

    const handleChange = (e) =>{
        setNewTask({
            ...newTask,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        addTask(newTask)
    }
    console.log(newTask)
    
    
   return(
       <Form className="m-2" onSubmit={submitHandler}>
           <Form.Group className="mt-2">
               <Form.Control
               type="text"
               placeholder="Uzduoties pavadinimas"
               value={newTask.title}
               onChange={handleChange}
               name="title"
               />
           </Form.Group>
           <Form.Group className="mt-2">
               <Form.Control
                as="textarea"
                defaultValue={'desc'}
                onChange={handleChange}
                defaultValue={'desc'}
               />
           </Form.Group>
           <Button type="submit" className="mt-2">
               Prideti uzduoti
           </Button>
       </Form>
   )
}

export default AddTask