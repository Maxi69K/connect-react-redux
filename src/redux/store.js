import { legacy_createStore } from 'redux'
import accountsReducer from './accounts/accountsReducer'

const store = legacy_createStore(accountsReducer);

export default store;