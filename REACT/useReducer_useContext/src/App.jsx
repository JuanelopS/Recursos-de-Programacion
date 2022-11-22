import './App.css';
import { AppProvider } from './AppProvider';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { TasksResume } from './components/TasksResume';

function App() {

  return (
    <AppProvider>
      <div>
        <h2>useReducer + useContext</h2>
        <TasksResume />
        <Form />
        <hr style={{ marginTop: '30px'}}/>
        <TaskList />
      </div>
    </AppProvider>
  )
}

export default App;
