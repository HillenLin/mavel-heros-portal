import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/models/Imenu';

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

    hasMobileNavOpened: boolean = false;

    MENULIST: IMenu[] = [
        {
            menuName: 'Home',
            menuRouter: '/characters',
        },
        {
            menuName: 'Leader Board',
            menuRouter: '/leader-board-main',
        },
    ]

    constructor() { }

    ngOnInit() {
    }

    changeMenuStatus() {
        this.hasMobileNavOpened = !this.hasMobileNavOpened;
    }

}
