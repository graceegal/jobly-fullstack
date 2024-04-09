import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <div>
                    <RoutesList />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
