import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CdkAccordionModule} from '@angular/cdk/accordion';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CdkAccordionModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
  
})
export class AppComponent implements AfterViewInit {
  title = 'sahiti-akella';
  projects = [
    { title: 'Project 1', description: 'Description for Project 1' },
    { title: 'Project 2', description: 'Description for Project 2' },
    { title: 'Project 3', description: 'Description for Project 3' }
  ];
 

  ngAfterViewInit() {
    setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.fade-in').forEach(el => {
        el.classList.add('visible');
      });
    }, 100); 
  }

 
}
