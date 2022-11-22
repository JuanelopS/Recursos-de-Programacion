import './App.css'
import { AppProvider } from './AppProvider';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { Tasks } from './components/Tasks';

function App() {

  return (
    <AppProvider>
      <div>
        <h1>useReducer + useContext</h1>
        <Tasks />
        <Form />
        <hr />
        <TaskList />
      </div>
    </AppProvider>
  )
}

export default App
