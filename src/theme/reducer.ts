// Import action type constants
import { TOGGLE_THEME } from './actionTypes';

// Define the shape of the theme state
interface ThemeState {
    themeMode: 'dark' | 'light'; // themeMode can either be 'dark' or 'light'
}

// Define the shape of the action for toggling theme
interface ToggleThemeAction {
    type: typeof TOGGLE_THEME; // Action type, utilizing TypeScript's typeof operator for type safety
}

// Union type for theme-related actions; facilitates future expansion of action types
type ThemeActions = ToggleThemeAction;

// Define the initial state of the theme, defaulting to 'light' mode
const initialState: ThemeState = {
    themeMode: 'light',
};

// Theme reducer function to handle state changes based on dispatched actions
export const themeReducer = (state: ThemeState = initialState, action: ThemeActions): ThemeState => {
    switch (action.type) {
        case TOGGLE_THEME: // Handles toggling between light and dark theme modes
            return {
                ...state, // Spread operator to copy the existing state
                themeMode: state.themeMode === 'light' ? 'dark' : 'light', // Toggle the themeMode value
            };
        default: // Returns the current state for any action types not matched
            return state;
    }
};
