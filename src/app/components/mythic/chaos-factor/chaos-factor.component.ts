import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-chaos-factor',
  templateUrl: './chaos-factor.component.html',
  styleUrls: ['./chaos-factor.component.scss']
})
export class ChaosFactorComponent implements OnInit {
  constructor(
    public dataService: StorageService
  ) { }

  ngOnInit(): void { }

  changeChaosFactor(value: number) {
    this.dataService.data.mythic.chaosFactor += value;
    if (this.dataService.data.mythic.chaosFactor < 3) {
      this.dataService.data.mythic.chaosFactor = 3;
    } else if (this.dataService.data.mythic.chaosFactor > 6) {
      this.dataService.data.mythic.chaosFactor = 6;
    }
  }

  roll() {
    const roll = DiceUtil.rollDice('1d10');
    if (roll.sum <= this.dataService.data.mythic.chaosFactor) {
      if (roll.sum % 2 === 0) {
        this.dataService.data.log.add('Scene Interrupted', `[Roll against Chaos Factor] D: ${roll.sum}`);
      } else {
        this.dataService.data.log.add('Scene Altered', `[Roll against Chaos Factor] D: ${roll.sum}`);
      }
    } else {
      this.dataService.data.log.add('Scene Unmodified', `[Roll against Chaos Factor] D: ${roll.sum}`);
    }
  }
}
