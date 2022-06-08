import { Component, OnInit } from '@angular/core';
import { DiceUtil } from './dice/dice-util';
import { PersistentData } from './persistent-data/persistent-data';
import { Tables } from './tables/tables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Const data
  title = 'gm-toolbox';

  // Persistent data (todo)
  data: PersistentData = new PersistentData();
  
  // One-off data
  favors : 'yes' | 'no' = 'yes';
  customDiceFormula = '';
  customLog = '';

  ngOnInit() {
    this.data.loadFromStorage();
  }

  //#region Log
  addCustomLog() {
    this.data.addToLog(this.customLog);
    this.customLog = '';
  }
  //#endregion

  //#region Mythic
  changeChaosFactor(value: number) {
    this.data.chaosFactor += value;
    if (this.data.chaosFactor < 3) {
      this.data.chaosFactor = 3;
    } else if (this.data.chaosFactor > 6) {
      this.data.chaosFactor = 6;
    }
  }
  
  fateCheck(modifier: number = 0) {
    if (this.data.chaosFactor === 3) {
      if (this.favors === 'yes') {
        modifier += 2;
      } else {
        modifier -= 2;
      }
    } else if (this.data.chaosFactor === 6) {
      if (this.favors === 'yes') {
        modifier -= 2;
      } else {
        modifier += 2;
      }
    }

    const fateDie1 = DiceUtil.rollDiceFormula('1d10');
    const fateDie2 = DiceUtil.rollDiceFormula('1d10');
    const rollResult = fateDie1.sum + fateDie2.sum + modifier;
    const result = rollResult > 11;

    const chaosDie = DiceUtil.rollDiceFormula('1d6');
    let exceptional = false;
    let random = false;
    if (chaosDie.sum <= this.data.chaosFactor) {
      if (fateDie1.sum === fateDie2.sum) {
        exceptional = true;
        random = true;
      } else if (fateDie1.sum % 2 !== 0 && fateDie2.sum % 2 !== 0) {
        exceptional = true;
      } else if (fateDie1.sum % 2 === 0 && fateDie2.sum % 2 === 0) {
        random = true;
      }
    }

    let log = exceptional ? 'Exceptional ' : '';
    log = log.concat(result ? 'Yes' : 'No');
    log = log.concat(random ? ' + Random Event' : '');
    const hint = `[Fate Check] D: ${fateDie1.sum}, ${fateDie2.sum}; MOD: ${modifier}; CD: ${chaosDie.sum}`;
    this.data.addToLog(log, hint);
  }
  
  detailCheck() {
    const die1 = DiceUtil.rollDiceFormula('1d10');
    const die2 = DiceUtil.rollDiceFormula('1d10');
    let dieResult = die1.sum + die2.sum;

    let modifier = 0;
    if (this.data.chaosFactor === 3) {
      modifier = 2;
    } else if (this.data.chaosFactor === 6) {
      modifier = -2;
    }
    dieResult += modifier;

    let result = '';
    if (dieResult <= 4) {
      result = 'Anger';
    } else if (dieResult >= 18) {
      result = 'Calm';
    } else {
      result = Tables.DetailCheck.roll(dieResult - 5);
    }

    this.data.addToLog(result, `[Detail Check] D: ${die1.sum}, ${die2.sum}, MOD: ${modifier}`);
  }
  
  descriptor1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.data.addToLog(Tables.Descriptor1.roll(die.sum - 1), `[Descriptor 1] D: ${die.details}`);
  }
  descriptor2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.data.addToLog(Tables.Descriptor2.roll(die.sum - 1), `[Descriptor 2] D: ${die.details}`);
    
  }
  action1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.data.addToLog(Tables.Action1.roll(die.sum - 1), `[Action 1] D: ${die.details}`);

  }
  action2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.data.addToLog(Tables.Action2.roll(die.sum - 1), `[Action 2] D: ${die.details}`);
  }
  
  eventCheckStandard() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusStandard.roll(dice.sum);
    this.data.addToLog(result, `[Event Check: Standard] D: ${dice.sum}`);
  }
  eventCheckHorror() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusHorror.roll(dice.sum);
    this.data.addToLog(result, `[Event Check: Horror] D: ${dice.sum}`);
  }
  eventCheckActionAdventure() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusActionAdventure.roll(dice.sum);
    this.data.addToLog(result, `[Event Check: Action Adventure] D: ${dice.sum}`);
  }
  eventCheckMystery() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusMystery.roll(dice.sum);
    this.data.addToLog(result, `[Event Check: Mystery] D: ${dice.sum}`);
  }
  eventCheckSocial() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusSocial.roll(dice.sum);
    this.data.addToLog(result, `[Event Check: Social] D: ${dice.sum}`);
  }
  eventCheckPersonal() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusPersonal.roll(dice.sum);
    this.data.addToLog(result, `[Event Check: Personal] D: ${dice.sum}`);
  }
  eventCheckEpic() {
    const dice = DiceUtil.rollDiceFormula('1d100');
    const result = Tables.EventFocusEpic.roll(dice.sum);
    this.data.addToLog(result, `[Event Check: Epic] D: ${dice.sum}`);
  }
  //#endregion
  
  //#region Lists
  addList() {
    const listName = prompt('List name:');
    if (listName) {
      this.data.addList(listName);
    }
  }
  removeList(listName: string) {
    if (confirm(`Are you sure you want to remove List '${listName}'?`)) {
      this.data.removeList(listName);
    }
  }
  addToList(listName: string) {
    const value = prompt('Value:');
    if (value) {
      this.data.addToList(listName, value);
    }
  }
  removeFromList(listName: string) {
    const list = this.data.lists.filter(x => x.name === listName)[0];
    
    if (list.values.length === 0) {
      confirm('List is empty!');
      return;
    }
    
    let message = 'List content:\n\n';
    for (let index = 0; index < list.values.length; index++) {
      const value = list.values[index];
      message = message.concat(`${index + 1}. ${value}\n`);
    }
    message = message.concat('\nNumber of entry to delete:');
    
    const value = prompt(message);
    if (value && !isNaN(+value)) {
      this.data.removeFromList(listName, list.values[+value - 1]);
    }
  }
  rollList(listName: string) {
    const list = this.data.lists.filter(x => x.name === listName)[0];
    const dice = DiceUtil.rollDiceFormula(`1d${list.values.length}`);
    const result = list.values[dice.sum - 1];
    if (result) {
      this.data.addToLog(result, `[List Roll: ${listName}] D: ${dice.sum}`);
    }
  }
  //#endregion

  //#region General
  rollDice(formula: string) {
    const result = DiceUtil.rollDiceFormula(formula);
    this.data.addToLog(result.sum.toString(), result.details);
  }
  //#endregion

}
