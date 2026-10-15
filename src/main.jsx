import {createRoot} from 'react-dom/client';import {BrowserRouter} from 'react-router-dom';import './index.css';import App from './App';import {Store} from './store';
createRoot(document.getElementById('root')).render(<BrowserRouter><Store><App/></Store></BrowserRouter>);
