import { createStore, combineReducers } from 'redux';
// Import the themeReducer, which manages state related to theme settings (e.g., light or dark mode)
import { themeReducer } from '../Theme/reducer';

// Use combineReducers to create a single root reducer out of many reducing functions.
// This allows for separate concerns within the global state, facilitating easier management and scalability.
const rootReducer = combineReducers({
    // Mount the themeReducer under the 'theme' key of the global state
    theme: themeReducer,
});

// Create the Redux store by passing in the rootReducer.
// The store is the centralized location for all the application's state.
const store = createStore(rootReducer);

// Export the store to be provided to the application via the <Provider> component
export default store;

// Export the RootState type which represents the complete state structure of the application.
// This utilizes TypeScript's ReturnType utility type to infer the state shape from the rootReducer,
// enabling type-safe access to the state anywhere in the application.
export type RootState = ReturnType<typeof rootReducer>;
