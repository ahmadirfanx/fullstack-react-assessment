import { TOGGLE_THEME } from './actionTypes';

interface ThemeState {
    themeMode: 'dark' | 'light';
}

interface ToggleThemeAction {
    type: typeof TOGGLE_THEME;
}

type ThemeActions = ToggleThemeAction; // This allows for expansion if you have more actions later

const initialState: ThemeState = {
    themeMode: 'light',
};

export const themeReducer = (state: ThemeState = initialState, action: ThemeActions): ThemeState => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                themeMode: state.themeMode === 'light' ? 'dark' : 'light',
            };
        default:
            return state;
    }
};