import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { DataService } from 'src/app/services/data.service';
import { 
  EventFocusActionAdventure, 
  EventFocusEpic, 
  EventFocusHorror, 
  EventFocusMystery, 
  EventFocusPersonal, 
  EventFocusSocial,
  EventFocusStandard
} from './tables';

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
    const dice = DiceUtil.rollDice('1d100');
    const result = EventFocusStandard.roll(dice.sum);
    this.addToLog(result.value, "Standard", dice.sum, result.notes);
  }
  eventCheckHorror() {
    const dice = DiceUtil.rollDice('1d100');
    const result = EventFocusHorror.roll(dice.sum);
    this.addToLog(result.value, "Horror", dice.sum, result.notes);
  }
  eventCheckActionAdventure() {
    const dice = DiceUtil.rollDice('1d100');
    const result = EventFocusActionAdventure.roll(dice.sum);
    this.addToLog(result.value, "Action Adventure", dice.sum, result.notes);
  }
  eventCheckMystery() {
    const dice = DiceUtil.rollDice('1d100');
    const result = EventFocusMystery.roll(dice.sum);
    this.addToLog(result.value, "Mystery", dice.sum, result.notes);
  }
  eventCheckSocial() {
    const dice = DiceUtil.rollDice('1d100');
    const result = EventFocusSocial.roll(dice.sum);
    this.addToLog(result.value, "Social", dice.sum, result.notes);
  }
  eventCheckPersonal() {
    const dice = DiceUtil.rollDice('1d100');
    const result = EventFocusPersonal.roll(dice.sum);
    this.addToLog(result.value, "Personal", dice.sum, result.notes);
  }
  eventCheckEpic() {
    const dice = DiceUtil.rollDice('1d100');
    const result = EventFocusEpic.roll(dice.sum);
    this.addToLog(result.value, "Epic", dice.sum, result.notes);
  }
  addToLog(value: string, check: string, dice: number, notes: string) {
    this.dataService.data.log.add(value, `[Event Check: ${check}] D: ${dice}\u000d\u000d${notes}`);
  }
}