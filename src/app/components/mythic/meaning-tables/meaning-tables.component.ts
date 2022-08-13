import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { StorageService } from 'src/app/services/storage.service';
import { ListTable, ListTableRow } from 'src/app/features/tables/list-table';
import MeaningTables from '../meaning-tables';

@Component({
  selector: 'app-meaning-tables',
  templateUrl: './meaning-tables.component.html',
  styleUrls: ['./meaning-tables.component.scss']
})
export class MeaningTablesComponent implements OnInit {
  constructor(
    private dataService: StorageService
  ) { }

  ngOnInit(): void { }

  descriptor1() {
    this.dataService.data.log.add(MeaningTables.Adverb.roll().value);
  }
  descriptor2() {
    const die = DiceUtil.rollDice('1d100');
    this.dataService.data.log.add(MeaningTables.Adjective.roll().value);
  }
  descriptor1plus2() {
    const d1 = MeaningTables.Adverb.roll();
    const a1 = MeaningTables.Verb.roll();
    
    this.dataService.data.log.add(`${d1.value} ${a1.value}`);
  }

  action1() {
    this.dataService.data.log.add(MeaningTables.Verb.roll().value);

  }
  action2() {
    const die = DiceUtil.rollDice('1d100');
    this.dataService.data.log.add(MeaningTables.Noun.roll().value);
  }
  action1plus2() {
    const d2 = MeaningTables.Adjective.roll();
    const a2 = MeaningTables.Noun.roll();
    
    this.dataService.data.log.add(`${d2.value} ${a2.value}`);
  }
}