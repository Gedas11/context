import { Container, ListGroup, Button } from "react-bootstrap";
import {useGlobalContext} from "../../context/TasksContent"
import AddTask from "../addTask/AddTask";

const Tasks = () => {
    const {tasks, openForm, isOpen} = useGlobalContext() //gavejas

    console.log(tasks)
  return (
    <Container>
      <h2 className="m-5 text-center">Tasks List</h2>
      <div className="m-3 text-center">
        <Button className="mx-auto">add tasks</Button>
      </div>
       <AddTask/>
      <ListGroup>
       {tasks.length && tasks.map((task,i)=><Tasks
       key={i}
       title={task.title}
       desc={task.desc}/>)}
      </ListGroup>
    </Container>
  );
};

export default Tasks;
