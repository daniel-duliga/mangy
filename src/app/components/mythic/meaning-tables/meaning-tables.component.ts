import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { DataService } from 'src/app/services/data.service';
import { ListTable, ListTableRow } from 'src/app/features/tables/list-table';
import MeaningTables from '../meaning-tables';

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
    this.dataService.data.log.add(MeaningTables.Descriptor1.roll(die.sum - 1).value, `[Descriptor 1] D: ${die.details}`);
  }
  descriptor2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(MeaningTables.Descriptor2.roll(die.sum - 1).value, `[Descriptor 2] D: ${die.details}`);
    
  }
  action1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(MeaningTables.Action1.roll(die.sum - 1).value, `[Action 1] D: ${die.details}`);

  }
  action2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(MeaningTables.Action2.roll(die.sum - 1).value, `[Action 2] D: ${die.details}`);
  }
}