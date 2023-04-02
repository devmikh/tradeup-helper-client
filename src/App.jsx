import { Provider } from 'react-redux';
import store from './store/store';
import SearchBar from "./components/SearchBar";
import Main from './components/Main'

import './app.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <SearchBar />
                <Main />
            </div>
        </Provider>
    )
};

export default App;
