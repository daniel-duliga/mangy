import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-fate-check',
  templateUrl: './fate-check.component.html',
  styleUrls: ['./fate-check.component.scss']
})
export class FateCheckComponent implements OnInit {
  favors: 'yes' | 'no' = 'yes';

  constructor(
    private dataService: StorageService
  ) { }

  ngOnInit(): void { }

  fateCheck(modifier: number = 0) {
    if (this.dataService.data.mythic.chaosFactor === 3) {
      if (this.favors === 'yes') {
        modifier += 2;
      } else {
        modifier -= 2;
      }
    } else if (this.dataService.data.mythic.chaosFactor === 6) {
      if (this.favors === 'yes') {
        modifier -= 2;
      } else {
        modifier += 2;
      }
    }

    const fateDie1 = DiceUtil.rollDice('1d10');
    const fateDie2 = DiceUtil.rollDice('1d10');
    const rollResult = fateDie1.sum + fateDie2.sum + modifier;
    const result = rollResult > 11;

    const chaosDie = DiceUtil.rollDice('1d6');
    let exceptional = false;
    let random = false;
    if (chaosDie.sum <= this.dataService.data.mythic.chaosFactor) {
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
    this.dataService.data.log.add(log, hint);
  }
}
