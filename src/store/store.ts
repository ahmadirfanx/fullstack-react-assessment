import { createStore, combineReducers } from 'redux';
import { themeReducer } from '../theme/reducer';


const rootReducer = combineReducers({
    theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;