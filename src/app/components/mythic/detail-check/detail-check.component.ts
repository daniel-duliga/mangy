import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/dice/dice-util';
import { DataService } from 'src/app/services/data.service';
import { Tables } from 'src/app/tables/tables';

@Component({
  selector: 'app-detail-check',
  templateUrl: './detail-check.component.html',
  styleUrls: ['./detail-check.component.scss']
})
export class DetailCheckComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void { }
  
  detailCheck() {
    const die1 = DiceUtil.rollDiceFormula('1d10');
    const die2 = DiceUtil.rollDiceFormula('1d10');
    let dieResult = die1.sum + die2.sum;

    let modifier = 0;
    if (this.dataService.data.mythic.chaosFactor === 3) {
      modifier = 2;
    } else if (this.dataService.data.mythic.chaosFactor === 6) {
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

    this.dataService.data.log.add(result, `[Detail Check] D: ${die1.sum}, ${die2.sum}, MOD: ${modifier}`);
  }
}
