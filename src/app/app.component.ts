import { HOWEWORKS } from './pages';
import { Homeworks } from './home-work-pages';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homeworks';
  homeworks = HOWEWORKS
  selectedHomework:Homeworks
  onSelect(homework: Homeworks): void {
    this.selectedHomework = homework;
  }

}
