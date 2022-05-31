import { Component } from '@angular/core';
import { DiceUtil } from './dice/dice-util';
import { Tables } from './tables';

class LogEntry {
  constructor(
    public value: string,
    public hint: string,
    public timestamp: Date = new Date(),
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gm-toolbox';

  log: LogEntry[] = [];

  customDiceFormula = '';

  favors: 'yes' | 'no' = 'yes';
  chaosFactor = 4;

  addToLog(value: string, hint: string = '') {
    this.log.unshift(new LogEntry(value, hint));
  }

  clearLog() {
    this.log = [];
  }

  rollDice(formula: string) {
    const result = DiceUtil.rollDiceFormula(formula);
    this.addToLog(result.sum.toString(), result.details);
  }

  changeChaosFactor(value: number) {
    this.chaosFactor += value;
    if (this.chaosFactor < 3) {
      this.chaosFactor = 3;
    } else if (this.chaosFactor > 6) {
      this.chaosFactor = 6;
    }
  }

  fateCheck(modifier: number = 0) {
    if (this.chaosFactor === 3) {
      if (this.favors === 'yes') {
        modifier += 2;
      } else {
        modifier -= 2;
      }
    } else if (this.chaosFactor === 6) {
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
    if (chaosDie.sum <= this.chaosFactor) {
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
    this.addToLog(log, hint);
  }

  detailCheck() {
    const die1 = DiceUtil.rollDiceFormula('1d10');
    const die2 = DiceUtil.rollDiceFormula('1d10');
    let dieResult = die1.sum + die2.sum;

    let modifier = 0;
    if (this.chaosFactor === 3) {
      modifier = 2;
    } else if (this.chaosFactor === 6) {
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

    this.addToLog(`${result}`, `[Detail Check] D: ${die1.sum}, ${die2.sum}, MOD: ${modifier}`);
  }

  descriptor1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.addToLog(Tables.Descriptor1[die.sum - 1], `[Descriptor 1] D: ${die.details}`);
  }

  descriptor2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.addToLog(Tables.Descriptor2[die.sum - 1], `[Descriptor 2] D: ${die.details}`);
    
  }

  action1() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.addToLog(Tables.Action1[die.sum - 1], `[Action 1] D: ${die.details}`);

  }
  
  action2() {
    const die = DiceUtil.rollDiceFormula('1d100');
    this.addToLog(Tables.Action2[die.sum - 1], `[Action 2] D: ${die.details}`);

  }
}
