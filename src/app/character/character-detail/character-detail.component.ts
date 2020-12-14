import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {

    subscriptionActiveRouter$: Subscription;
    httpGetCharDetailsService$: Subscription;
    id: number;
    hasDetailsLoaded: boolean = false;

    // TODO: define its data model
    charDetailObj: any;
    comics: any;
    series: any;
    stories: any;

    constructor(
        private activeRouter: ActivatedRoute,
        private httpService: HttpService,
    ) { }

    ngOnInit() {
        /*subscript to watch the route para changes. 
        **************Please make changes inside this subscription. Don't delete it ***************/
        this.subscriptionActiveRouter$ = this.activeRouter.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.httpGetCharDetailsService$ = this.httpService.getCharDetails(this.id).subscribe(
                (res) => {
                    console.log(res.data.results[0]);
                    this.charDetailObj = res.data.results[0];
                    this.comics = this.charDetailObj.comics.items;
                    this.series = this.charDetailObj.series.items;
                    this.stories = this.charDetailObj.stories.items;
                    this.hasDetailsLoaded = true;
                },
                error => console.log("Error: ", error), 
                () => {
                });

        });
    }

    ngOnDestroy() {
        if(this.subscriptionActiveRouter$) {
            this.subscriptionActiveRouter$.unsubscribe();
        }
        if(this.httpGetCharDetailsService$) {
            this.httpGetCharDetailsService$.unsubscribe();
        }
    }

}
