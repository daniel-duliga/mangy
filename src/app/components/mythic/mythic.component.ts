import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mythic',
  templateUrl: './mythic.component.html',
  styleUrls: ['./mythic.component.scss']
})
export class MythicComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void { }
}
