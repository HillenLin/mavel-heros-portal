import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadCharacters } from './store/actions/characters.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'mavel-heros-portal';

    constructor(
        private store: Store<any>,
    ) { }

    ngOnInit() {
        // Dispatch LOAD_CHARACTERS action to call the get all character API and then add the list of characters into the global store. 
        this.store.dispatch(new LoadCharacters());
    }
}
