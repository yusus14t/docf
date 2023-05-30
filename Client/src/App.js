import { AllRoutes } from './routes';
import './assets.app/css/bootstrap.min.css';
import SnackbarProvider from 'react-simple-snackbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <Router>
          <AllRoutes />
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
