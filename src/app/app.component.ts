import { Component, OnInit } from '@angular/core';
import { DiceUtil } from './dice/dice-util';
import { DataService } from './services/data.service';
import { Tables } from './tables/tables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mangy';

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() { }
}
