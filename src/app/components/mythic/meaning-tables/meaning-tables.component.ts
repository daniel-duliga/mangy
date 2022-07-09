import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/dice/dice-util';
import { DataService } from 'src/app/services/data.service';
import { Tables } from 'src/app/tables/tables';

@Component({
  selector: 'app-meaning-tables',
  templateUrl: './meaning-tables.component.html',
  styleUrls: ['./meaning-tables.component.scss']
})
export class MeaningTablesComponent implements OnInit {
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void { }

  descriptor1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(Tables.Descriptor1.roll(die.sum - 1), `[Descriptor 1] D: ${die.details}`);
  }
  descriptor2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(Tables.Descriptor2.roll(die.sum - 1), `[Descriptor 2] D: ${die.details}`);
    
  }
  action1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(Tables.Action1.roll(die.sum - 1), `[Action 1] D: ${die.details}`);

  }
  action2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(Tables.Action2.roll(die.sum - 1), `[Action 2] D: ${die.details}`);
  }
}
