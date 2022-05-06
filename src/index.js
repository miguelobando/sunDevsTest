import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

root.render(<App tab="home" />);
registerServiceWorker();
