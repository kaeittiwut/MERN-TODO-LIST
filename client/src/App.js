import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <TodoList />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
