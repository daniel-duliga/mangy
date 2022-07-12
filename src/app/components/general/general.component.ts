import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  customDiceFormula = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void { }

  rollDice(formula: string) {
    const result = DiceUtil.rollDiceFormula(formula);
    this.dataService.data.log.add(result.sum.toString(), result.details);
  }
}
