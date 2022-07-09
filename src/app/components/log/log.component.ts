import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  customLog = '';

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void { }

  addCustomLog() {
    this.dataService.data.log.add(this.customLog);
    this.customLog = '';
  }
}
