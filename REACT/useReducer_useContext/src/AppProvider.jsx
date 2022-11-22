import React, { useReducer, useContext } from "react";

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
}

const initialState = {
  tasksList: []
};

const reducer = (state, action) => {
  // console.log(action);

  switch(action.type){
    case 'ADD_TASK': {
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload]
      }
    }
    case 'REMOVE_TASK': {
      return {
        ...state,
        tasksList: state.tasksList.filter(task => task.id !== action.payload)
      }
    }
    case 'EDIT_TASK': {
      return {
        ...state,
        tasksList: state.tasksList.map(task => {
          if(task.id === action.payload.id){
            return {id: task.id, name: action.payload.name, completed: task.completed};
          } else return task;
        })
      }
    }
    case 'PENDING_TASK': {
      return {
        ...state,
        tasksList: state.tasksList.map((task) => {
          if (task.id === action.payload) {
            return {
              id: task.id,
              name: task.name,
              completed: 'pending',
            };
          } else return task;
        }),
      };
    }
    case 'URGENT_TASK': {
      return {
        ...state,
        tasksList: state.tasksList.map((task) => {
          if (task.id === action.payload) {
            return {
              id: task.id,
              name: task.name,
              completed: 'urgent',
            };
          } else return task;
        }),
      };
    }
    case 'COMPLETED_TASK': {
      return {
        ...state,
        tasksList: state.tasksList.map((task) => {
          if (task.id === action.payload) {
            return {
              id: task.id,
              name: task.name,
              completed: 'completed',
            };
          } else return task;
        }),
      };
    }
  }
  return state;
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ tasksList: state.tasksList, dispatch }}>
      { children }
    </AppContext.Provider>
  )
}


export {
  AppProvider,
  useAppContext
}
