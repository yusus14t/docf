import { AllRoutes } from './routes';
import './assets.app/css/bootstrap.min.css';
import SnackbarProvider from 'react-simple-snackbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/Store'; 

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SnackbarProvider>
          <Router>
            <AllRoutes />
          </Router>
        </SnackbarProvider>
      </Provider>
    </div>
  );
}

export default App;
