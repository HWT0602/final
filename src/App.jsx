import 'antd/dist/reset.css';
import './App.css';
import { Provider } from "react-redux";
import Router from './Router';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {getProducts} from './api'

//import { feedProducts } from './api';
//feedProducts();

getProducts();

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
