import reportWebVitals from './reportWebVitals';
import {renderPage} from './render';
import state from './redux/state';

renderPage(state);

reportWebVitals();
