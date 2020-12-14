import { Action } from "@ngrx/store";

export enum ActionTypes {
    LOAD_CHARACTERS = "[MAVEL HEROS PORTAL] Load list of characters",
    LOAD_RAWJSONCHARACTERS_SUCCESS = "[MAVEL HEROS PORTAL] Load list of characters SUCCESS",
}

export class LoadCharacters implements Action {
    readonly type = ActionTypes.LOAD_CHARACTERS;
    constructor() { }
}

export class LoadRawJsonCharacters implements Action {
    readonly type = ActionTypes.LOAD_RAWJSONCHARACTERS_SUCCESS;
    constructor(public payload: any) { }
}

export type CharacterActions = LoadRawJsonCharacters | LoadCharacters