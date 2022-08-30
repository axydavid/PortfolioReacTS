import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './NavBar';

import './Main.scss';
import Footer from './Footer';

const root = createRoot(document.getElementById('root')!);
root.render(<StrictMode><NavBar /><Footer /></StrictMode>);
