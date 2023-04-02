import { Provider } from 'react-redux';
import store from './store/store';
import SearchBar from "./components/SearchBar";
import ItemGrid from "./components/ItemGrid";
import './app.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <SearchBar />
                <ItemGrid />
            </div>
        </Provider>
    )
};

export default App;
