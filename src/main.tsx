
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


const rootElement = document.getElementById('root') as HTMLElement | null;

if (rootElement instanceof HTMLElement) {
    const root = createRoot(rootElement);
    root.render(
    
            <App />
       
    );
} else {
    console.error("Root element not found");
}