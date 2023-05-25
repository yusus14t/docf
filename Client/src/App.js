import { AllRoutes } from './routes';
import './assets.app/css/bootstrap.min.css';
import SnackbarProvider from 'react-simple-snackbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './layout/Loader';
import { Suspense } from 'react';

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
