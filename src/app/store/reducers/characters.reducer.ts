import { ActionTypes, CharacterActions } from "../actions/characters.actions";

export const initialState = {

};

export function characterReducer(state = initialState, action: CharacterActions) {
    switch (action.type) {
        case ActionTypes.LOAD_CHARACTERS:
            return state;
        case ActionTypes.LOAD_RAWJSONCHARACTERS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}