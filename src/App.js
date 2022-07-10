/* eslint-disable*/
import { Provider } from "react-redux";
import { createStore } from "redux";

import AppRouter from "./components/AppRouter";


import rootReducer from "./redux/reducers";


import "antd/dist/antd.css";

const store = createStore(rootReducer);


const App = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
};

export default App;
