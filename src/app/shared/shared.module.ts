import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonScreenComponent } from './skeleton-screen/skeleton-screen.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
    declarations: [SkeletonScreenComponent, TopNavComponent,SearchPipe],
    imports: [
        CommonModule,
        MatListModule,
        MatDividerModule,
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        RouterModule,
    ],
    exports: [
        SkeletonScreenComponent,
        TopNavComponent,
        MatListModule,
        MatDividerModule,
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SearchPipe
    ]
})
export class SharedModule { }

