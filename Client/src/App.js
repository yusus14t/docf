import AllRoutes from './routes';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/jquery-ui.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import './components/authentication/SignUp'
import SignUp from './components/authentication/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
          {/* <AllRoutes /> */}
          <SignUp/>
      </Router>
    </div>
  );
}

export default App;
