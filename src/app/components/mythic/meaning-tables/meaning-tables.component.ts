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
    this.dataService.data.log.add(MeaningTables.Adverb.roll(die.sum).value, `[Adverb] D: ${die.details}`);
  }
  descriptor2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(MeaningTables.Adjective.roll(die.sum).value, `[Verb] D: ${die.details}`);
  }
  descriptor1plus2() {
    const dice1 = DiceUtil.rollDiceFormula('1d100');
    const d1 = MeaningTables.Adverb.roll(dice1.sum);
    
    const dice2 = DiceUtil.rollDiceFormula('1d100');
    const a1 = MeaningTables.Verb.roll(dice2.sum);
    
    this.dataService.data.log.add(`${d1.value} ${a1.value}`, `[Adverb + Verb] D: ${dice1.details}, ${dice2.details}`);
  }

  action1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(MeaningTables.Verb.roll(die.sum).value, `[Adjective] D: ${die.details}`);

  }
  action2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.dataService.data.log.add(MeaningTables.Noun.roll(die.sum).value, `[Noun] D: ${die.details}`);
  }
  action1plus2() {
    const dice1 = DiceUtil.rollDiceFormula('1d100');
    const d2 = MeaningTables.Adjective.roll(dice1.sum);
    
    const dice2 = DiceUtil.rollDiceFormula('1d100');
    const a2 = MeaningTables.Noun.roll(dice2.sum);
    
    this.dataService.data.log.add(`${d2.value} ${a2.value}`, `[Adjective + Noun] D: ${dice1.details}, ${dice2.details}`);
  }
}