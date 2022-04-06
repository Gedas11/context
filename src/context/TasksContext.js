import { useState, useContext } from "react";
import React from "react";

const AppContext = React.createContext(); 
const AppProvider = ({ children }) => {  //tiekejas
  const [tasks, setTasks] = useState(
    [
      {
      title: "Learn React",
      desc: "it is very important"
  }
]
);
const [isOpen, setIsOpen] = useState(false)
  
const addTask = (data) => {
    setTasks((prevData) => {
      return [data, ...prevData];
    });
  };
  
  const openForm = ()=>{ 
    setIsOpen(true)
  }
  const closeForm = ()=>{
    setIsOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        tasks,
        addTask,
        isOpen,
        openForm,
        closeForm
      }}
    >
      {children}
      
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
