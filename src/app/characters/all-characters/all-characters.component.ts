import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { LoadCharacters } from 'src/app/store/actions/characters.actions';

@Component({
    selector: 'app-all-characters',
    templateUrl: './all-characters.component.html',
    styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit, OnDestroy {
    subStore$: Subscription
    allCharactersEndPoint: [];
    showChar: boolean = false;
    skeletonRepeatTime: number[];

    allCharacters$: Observable<any>;
    nameFilter: string;

    constructor(
        public router: Router,
        private store: Store<any>
    ) { }

    ngOnInit() {  
        this.allCharacters$ = this.store.pipe(
            select(state => state.characters)
        );

        this.subStore$ = this.allCharacters$.subscribe(response => {
            console.log(response);
            if(response['rawJSON']) {
                // console.log('get the data from store');
                // console.log(response['rawJSON']);
                this.allCharactersEndPoint = response['rawJSON'];
                this.showChar = true;
            }
        },
            (error: any) => { console.error(error) });

        this.skeletonRepeatTime = Array(20).fill(20).map((x, i) => i);
    }

    ngOnDestroy() {
        if(this.subStore$) {
            this.subStore$.unsubscribe();
        }
    }

    goToCharDetails(charId) {
        this.router.navigateByUrl(`/characters/character/${charId}`);
    }

}
