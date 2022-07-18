import { Component, Input, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { RangeTable, RangeTableRow } from 'src/app/features/tables/range-table';
import { MythicNpcModel } from 'src/app/models/data/mythic/mythic-npc-model';
import { DataService } from 'src/app/services/data.service';
import MeaningTables from '../meaning-tables';

@Component({
  selector: 'app-behavior-check',
  templateUrl: './behavior-check.component.html',
  styleUrls: ['./behavior-check.component.scss']
})
export class BehaviorCheckComponent implements OnInit {
  @Input() selectedNpc!: MythicNpcModel;

  selectedNpcId!: string;
  
  identityModifier: 'lowers' | 'neutral' | 'intensifies' = 'neutral';
  personalityModifier: 'lowers' | 'neutral' | 'intensifies' = 'neutral';
  activityModifier: 'lowers' | 'neutral' | 'intensifies' = 'neutral';
  
  disposition: number = 0;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    if (this.dataService.data.mythic.npcs.length > 0) {
      this.selectedNpc = this.dataService.data.mythic.npcs[0];
    } else {
      this.selectedNpc = new MythicNpcModel('', '');
    }
    this.selectedNpcId = this.selectedNpc.id;
  }

  selectedNpcChanged(npcId: string) {
    const index = this.dataService.data.mythic.npcs.findIndex(x => x.id === npcId);
    if (index !== -1) {
      this.selectedNpc = this.dataService.data.mythic.npcs[index];
    }
  }

  selectedNpcUpdated() {
    if (!this.selectedNpc) { return; }

    const npcs = this.dataService.data.mythic.npcs;

    const index = this.dataService.data.mythic.npcs.findIndex(x => x.id === this.selectedNpc?.id);
    if (index !== -1) {
      npcs[index] = this.selectedNpc;
    }

    this.dataService.data.mythic.npcs = npcs;
  }

  rollIdentity() {
    if (this.selectedNpc) {
      const descriptor1 = MeaningTables.Action1.roll(DiceUtil.rollDiceFormula('1d100').sum);
      const descriptor2 = MeaningTables.Action2.roll(DiceUtil.rollDiceFormula('1d100').sum);
      this.selectedNpc.identity.value = `${descriptor1.value} ${descriptor2.value}`;
      this.persistSelectedItem();
    }
  }

  rollPersonality() {
    if (this.selectedNpc) {
      const descriptor1 = MeaningTables.Descriptor1.roll(DiceUtil.rollDiceFormula('1d100').sum);
      const descriptor2 = MeaningTables.Descriptor2.roll(DiceUtil.rollDiceFormula('1d100').sum);
      this.selectedNpc.personality.value = `${descriptor1.value} ${descriptor2.value}`;
      this.persistSelectedItem();
    }
  }

  rollActivity() {
    if (this.selectedNpc) {
      const descriptor1 = MeaningTables.Action1.roll(DiceUtil.rollDiceFormula('1d100').sum);
      const descriptor2 = MeaningTables.Action2.roll(DiceUtil.rollDiceFormula('1d100').sum);
      this.selectedNpc.activity.value = `${descriptor1.value} ${descriptor2.value}`;
      this.persistSelectedItem();
    }
  }

  behaviorCheck() {
    this.disposition = DiceUtil.rollDiceFormula('1d10').sum + DiceUtil.rollDiceFormula('1d10').sum;
    let identityMod = 0, personalityMod = 0, activityMod = 0;
    if (this.selectedNpc.identity.active && this.identityModifier !== 'neutral') {
      identityMod = this.identityModifier === 'intensifies' ? 2 : -2;
    }
    if (this.selectedNpc.personality.active && this.personalityModifier !== 'neutral') {
      personalityMod = this.personalityModifier === 'intensifies' ? 2 : -2;
    }
    if (this.selectedNpc.activity.active && this.activityModifier !== 'neutral') {
      activityMod = this.activityModifier === 'intensifies' ? 2 : -2;
    }
    
    const roll = this.disposition + identityMod + personalityMod + activityMod;
    const result = DispositionTable.roll(roll);
    this.dataService.data.log.add(result.value, `[Behavior Check] D: ${this.disposition}, IMOD: ${identityMod}, PMOD: ${personalityMod}, AMOD: ${activityMod}\u000d\u000d${result.notes}`);
  }
  
  private persistSelectedItem() {
    if (this.selectedNpc) {
      const npcs = this.dataService.data.mythic.npcs;
      const index = npcs.findIndex(x => x.id === this.selectedNpc?.id);
      if (index !== -1) {
        npcs[index] = this.selectedNpc;
      }
      this.dataService.data.mythic.npcs = npcs;
    }
  }
}

export const DispositionTable = new RangeTable([
  new RangeTableRow(-4, 5, 'Passive (-2)', 'The Character takes the softest approach to their Actions.'),
  new RangeTableRow(6, 10, 'Moderate (0)', 'The Character acts in a moderate fashion, not too intense, not too passive'),
  new RangeTableRow(11, 15, 'Active (+2)', 'The Character wants to make their Actions known'),
  new RangeTableRow(16, 26, 'Aggressive (+4)', 'The Character acts with the utmost urgency and intensity'),
]);