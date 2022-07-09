import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/dice/dice-util';
import { DataService } from 'src/app/services/data.service';
import { Tables } from 'src/app/tables/tables';

@Component({
  selector: 'app-event-check',
  templateUrl: './event-check.component.html',
  styleUrls: ['./event-check.component.scss']
})
export class EventCheckComponent implements OnInit {
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void { }

  eventCheckStandard() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusStandard.roll(dice.sum);
    this.dataService.data.log.add(result, `[Event Check: Standard] D: ${dice.sum}`);
  }
  eventCheckHorror() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusHorror.roll(dice.sum);
    this.dataService.data.log.add(result, `[Event Check: Horror] D: ${dice.sum}`);
  }
  eventCheckActionAdventure() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusActionAdventure.roll(dice.sum);
    this.dataService.data.log.add(result, `[Event Check: Action Adventure] D: ${dice.sum}`);
  }
  eventCheckMystery() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusMystery.roll(dice.sum);
    this.dataService.data.log.add(result, `[Event Check: Mystery] D: ${dice.sum}`);
  }
  eventCheckSocial() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusSocial.roll(dice.sum);
    this.dataService.data.log.add(result, `[Event Check: Social] D: ${dice.sum}`);
  }
  eventCheckPersonal() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusPersonal.roll(dice.sum);
    this.dataService.data.log.add(result, `[Event Check: Personal] D: ${dice.sum}`);
  }
  eventCheckEpic() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusEpic.roll(dice.sum);
    this.dataService.data.log.add(result, `[Event Check: Epic] D: ${dice.sum}`);
  }
}
