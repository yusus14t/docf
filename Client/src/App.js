import { AllRoutes } from './routes';
import './assets.app/css/bootstrap.min.css';
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
