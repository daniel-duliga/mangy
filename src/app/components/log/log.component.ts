import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
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

  rollDice(formula: string) {
    this.customLog = formula;
    this.log();
  }

  log() {
    if (this.customLog.startsWith('/roll')) {
      const formula  = this.customLog.replace('/roll ', '');
      const dice = DiceUtil.rollDiceFormula(formula);
      this.dataService.data.log.add(dice.sum.toString(), dice.details);
    } else {
      this.dataService.data.log.add(this.customLog);
    }
    this.customLog = '';
  }
}
