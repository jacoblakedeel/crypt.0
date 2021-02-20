import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import 'mdbreact/dist/css/mdb.css';


import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import News from './components/News';
import About from './components/About';
import Prices from './components/Prices';
import reducer from './reducers/reducerTemplate';


// const saveToLocalStorage = (reduxGlobalState) => {
//     //serialization = converting js object to a string
//     try{
//       const serializeState = JSON.stringify(reduxGlobalState);
//       localStorage.setItem('state', serializeState)
//     }
//     catch(e){
//       console.log(e)
//     }
// }


// const loadFromLocalStorage = (params) => {
//     const serializeState = localStorage.getItem('state');

//     if(serializeState === null){
//       return undefined;
//     }
//     else{
//       return JSON.parse(serializeState);; //returns JS object representing local storage
//     }
// }

// const persistedState = loadFromLocalStorage();




//initializing redux store
//requires reducer, second arg is DevTools
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=>{
//   saveToLocalStorage(store.getState())
// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Prices}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
