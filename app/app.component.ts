import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <button          
                (click)='onClick($event)'
                class="btn btn-primary" 
                [class.active]="isActive" 
                [style.backgroundColor]="isActive ? 'blue' : 'gray'"
                >Submit</button>
                <input type="text" [(ngModel)]="title">
                
                <courses></courses>
                <authors></authors>
                
                <i (click)="onStarClick()" class="glyphicon"
                    [class.glyphicon-star-empty]="!isFavorite"
                    [class.glyphicon-star]="isFavorite"
                    ></i>`,
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent {
    start = "glyphicon glyphicon-star";

    isActive = true;
    isFavorite = false;

    onClick($event) {
        console.log("Clicked", $event)
    }

    onStarClick() {
       this.isFavorite = !this.isFavorite;
        // this.start = !this.start;
    }

    title = 'Tutorial'
 }