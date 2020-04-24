import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import { AsyncStorage } from 'react-native';
import thunk from "redux-thunk";
import reducers from "../reducers";

const config = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["news", "settings"]
};

const perReducers = persistCombineReducers(config, reducers);

const store = createStore(perReducers, {}, compose(applyMiddleware(thunk)));

export let persistor = persistStore(store);
// persistor.purge(); //uncomment this line if store get bugged
export default store;
