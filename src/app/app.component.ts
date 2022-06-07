import { Component, OnInit } from '@angular/core';
import { DiceUtil } from './dice/dice-util';
import { Tables } from './tables';

class LogEntry {
  constructor(
    public value: string,
    public hint: string,
    public timestamp: Date = new Date(),
  ) { }
}

class PersistentData {
  private _log: LogEntry[] = [];
  public get log() : LogEntry[] { 
    return this._log;
  }
  addToLog(value: string, hint: string = '') {
    this.log.unshift(new LogEntry(value, hint));
    this.persist();
  }
  clearLog() {
    this._log = [];
    this.persist();
  }
  
  private _chaosFactor = 4;
  public get chaosFactor() : number { return this._chaosFactor; }
  public set chaosFactor(v : number) {
    this._chaosFactor = v;
    this.persist();
  }

  private static key = 'data';
  private persist() {
    localStorage.setItem(PersistentData.key, JSON.stringify(this));
  }
  public loadFromStorage() {
    const rawData = localStorage.getItem(PersistentData.key);
    if (rawData) {
      const result = JSON.parse(rawData);
      this._log = result._log;
      this._chaosFactor = result._chaosFactor;
    }
  }
}

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
      result = Tables.DetailCheck[dieResult - 5];
    }

    this.data.addToLog(`${result}`, `[Detail Check] D: ${die1.sum}, ${die2.sum}, MOD: ${modifier}`);
  }
  descriptor1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.data.addToLog(Tables.Descriptor1[die.sum - 1], `[Descriptor 1] D: ${die.details}`);
  }
  descriptor2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.data.addToLog(Tables.Descriptor2[die.sum - 1], `[Descriptor 2] D: ${die.details}`);
    
  }
  action1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.data.addToLog(Tables.Action1[die.sum - 1], `[Action 1] D: ${die.details}`);

  }
  action2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.data.addToLog(Tables.Action2[die.sum - 1], `[Action 2] D: ${die.details}`);
  }
  //#endregion
  
  //#region General
  rollDice(formula: string) {
    const result = DiceUtil.rollDiceFormula(formula);
    this.data.addToLog(result.sum.toString(), result.details);
  }
  //#endregion

}
