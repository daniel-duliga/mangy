import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chaos-factor',
  templateUrl: './chaos-factor.component.html',
  styleUrls: ['./chaos-factor.component.scss']
})
export class ChaosFactorComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void { }

  changeChaosFactor(value: number) {
    this.dataService.data.mythic.chaosFactor += value;
    if (this.dataService.data.mythic.chaosFactor < 3) {
      this.dataService.data.mythic.chaosFactor = 3;
    } else if (this.dataService.data.mythic.chaosFactor > 6) {
      this.dataService.data.mythic.chaosFactor = 6;
    }
  }
}
