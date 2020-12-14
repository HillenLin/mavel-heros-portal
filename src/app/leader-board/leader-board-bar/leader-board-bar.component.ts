import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
    selector: 'app-leader-board-bar',
    templateUrl: './leader-board-bar.component.html',
    styleUrls: ['./leader-board-bar.component.css']
})
export class LeaderBoardBarComponent implements OnInit {
    private data;
    private svg;
    private margin = 100;
    private width = 750 - (this.margin * 2);
    private height = 450 - (this.margin * 2);

    allCharacters$: Observable<any>;
    subStore$: Subscription

    constructor(
        private store: Store<any>
    ) { }

    ngOnInit() {
        this.allCharacters$ = this.store.pipe(
            select(state => state.characters)
        );

        this.subStore$ = this.allCharacters$.subscribe(response => {
            if(response['rawJSON']) {
                this.data = response['rawJSON'];
                this.createSvg();
                this.drawBars(this.data);
            }
        },
            (error: any) => { console.error(error) });



    }

    createSvg(): void {
        this.svg = d3.select("figure#bar")
        .append("svg")
        // .attr("viewBox", "0 0 750 750")
        .attr("width", this.width + (this.margin * 2))
        .attr("height", this.height + (this.margin * 2))
        .append("g")
        .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }

    drawBars(data: any[]): void {
        // Create the X-axis band scale
        const x = d3.scaleBand()
        .range([0, this.width])
        .domain(data.map(d => d.name))
        .padding(0.2);
    
        // Draw the X-axis on the DOM
        this.svg.append("g")
        .attr("transform", "translate(0," + this.height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    
        // Create the Y-axis band scale
        const y = d3.scaleLinear()
        .domain([0, 200])
        .range([this.height, 0]);
    
        // Draw the Y-axis on the DOM
        this.svg.append("g")
        .call(d3.axisLeft(y));
    
        // Create and fill the bars
        this.svg.selectAll("bars")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.stories.available))
        .attr("width", x.bandwidth())
        .attr("height", (d) => this.height - y(d.stories.available))
        .attr("fill", "#d04a35");
    }
}
