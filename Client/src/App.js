import AllRoutes from './routes';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/jquery-ui.min.css';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
