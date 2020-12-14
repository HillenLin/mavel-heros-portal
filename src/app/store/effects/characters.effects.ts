import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";

import {
    ActionTypes,
    LoadCharacters,
    LoadRawJsonCharacters,
} from "../actions/characters.actions";
import { HttpService } from "../../services/http.service";

@Injectable()
export class CharactersEffects {
    constructor(
        private actions$: Actions<Action>,
        private service: HttpService,
        private store: Store<any>,
    ) { }

    @Effect({ dispatch: false })
    LoadCharacters = this.actions$.pipe(
        ofType<LoadCharacters>(ActionTypes.LOAD_CHARACTERS),
        tap(action => {
            let rawJSON = {};
            this.service.getAllSuperHerosService().subscribe(res => {
                rawJSON = {
                    rawJSON: res.data.results
                }
                this.store.dispatch(new LoadRawJsonCharacters(rawJSON));
            },
                (error: any) => { console.error(error) },
            );

        })
    );
}