import Logo from './components/Logo';
import Upboard from './components/Upboard';
import Sideboard from './components/Sideboard';
import CreatePost from './components/CreatePost';
import './input.css';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <div>
      <Upboard />
      <DeletePost />
    </div>
  );
}

export default App;
