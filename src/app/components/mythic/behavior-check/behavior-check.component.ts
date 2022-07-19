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
  
  dispositionDescriptor: string = '';
  dispositionDescriptorExplanation: string = '';

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
    this.displayDisposition(this.selectedNpc.disposition);
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
      this.persistSelectedNpc();
    }
  }

  rollPersonality() {
    if (this.selectedNpc) {
      const descriptor1 = MeaningTables.Descriptor1.roll(DiceUtil.rollDiceFormula('1d100').sum);
      const descriptor2 = MeaningTables.Descriptor2.roll(DiceUtil.rollDiceFormula('1d100').sum);
      this.selectedNpc.personality.value = `${descriptor1.value} ${descriptor2.value}`;
      this.persistSelectedNpc();
    }
  }

  rollActivity() {
    if (this.selectedNpc) {
      const descriptor1 = MeaningTables.Action1.roll(DiceUtil.rollDiceFormula('1d100').sum);
      const descriptor2 = MeaningTables.Action2.roll(DiceUtil.rollDiceFormula('1d100').sum);
      this.selectedNpc.activity.value = `${descriptor1.value} ${descriptor2.value}`;
      this.persistSelectedNpc();
    }
  }

  rollDisposition() {
    const roll = DiceUtil.rollDiceFormula('1d10').sum + DiceUtil.rollDiceFormula('1d10').sum;
    let identityMod = 0, personalityMod = 0, activityMod = 0;
    if (this.selectedNpc.identity.active && this.selectedNpc.identity.modifier !== 'neutral') {
      identityMod = this.selectedNpc.identity.modifier === 'intensifies' ? 2 : -2;
    }
    if (this.selectedNpc.personality.active && this.selectedNpc.personality.modifier !== 'neutral') {
      personalityMod = this.selectedNpc.personality.modifier === 'intensifies' ? 2 : -2;
    }
    if (this.selectedNpc.activity.active && this.selectedNpc.activity.modifier !== 'neutral') {
      activityMod = this.selectedNpc.activity.modifier === 'intensifies' ? 2 : -2;
    }
    
    this.saveAndDisplayDisposition(roll, identityMod, personalityMod, activityMod);
  }

  changeDisposition(modifier: number) {
    this.saveAndDisplayDisposition(this.selectedNpc.disposition + modifier)
  }
  
  saveAndDisplayDisposition(
    initialDisposition: number, identityMod: number = 0, personalityMod: number = 0, activityMod: number = 0)
  {
    this.selectedNpc.disposition = initialDisposition + identityMod + personalityMod + activityMod;
    this.persistSelectedNpc();
    this.displayDisposition(initialDisposition, identityMod, personalityMod, activityMod);
  }

  npcAction() {
    const roll = DiceUtil.rollDiceFormula('1d10');
    
  }

  private displayDisposition(
    initialDisposition: number = 0, identityMod: number = 0, personalityMod: number = 0, activityMod: number = 0) 
  {
    const result = DispositionTable.roll(this.selectedNpc.disposition);
    this.dispositionDescriptor = result.value;
    this.dispositionDescriptorExplanation = `D: ${initialDisposition}, IMOD: ${identityMod}, PMOD: ${personalityMod}, AMOD: ${activityMod}\u000d\u000d${result.notes}`;
  }

  private persistSelectedNpc() {
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
  new RangeTableRow(6, 10, 'Moderate (0)', 'The Character acts in a moderate fashion, not too intense, not too passive.'),
  new RangeTableRow(11, 15, 'Active (+2)', 'The Character wants to make their Actions known.'),
  new RangeTableRow(16, 26, 'Aggressive (+4)', 'The Character acts with the utmost urgency and intensity.'),
]);
export const NpcAction1 = new RangeTable([
  new RangeTableRow(1, 3, 'Theme Action', 'The NPC takes an Action in keeping with the current Theme, Disposition, and Activated. If the NPC was already performing an Action, the NPC stops that Action and switches to another, expected Action.'),
  new RangeTableRow(4, 5, 'NPC Continues', 'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action.'),
  new RangeTableRow(6, 6, 'NPC Continues +2', 'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. Apply a +2 adjustment to their Disposition Score, representing a possible shift in their current attitude. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action +2.'),
  new RangeTableRow(7, 7, 'NPC Continues -2', 'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. Apply a -2 adjustment to their Disposition Score, representing a possible shift in their current attitude. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action -2.'),
  new RangeTableRow(8, 8, 'NPC Action', 'The NPC takes a new, maybe unexpected, Action determined by rolling on NPC Action Table 2 and applying the Disposition Modifier (if any) to that roll.'),
  new RangeTableRow(9, 9, 'NPC Action -4', 'The NPC takes a new, maybe unexpected, Action determined by rolling on NPC Action Table 2, applying a -4 modifier and the Disposition Modifier (if any) to that roll.'),
  new RangeTableRow(10, 10, 'NPC Action +4', 'The NPC takes a new, maybe unexpected, Action determined by rolling on NPC Action Table 2, applying a +4 modifier and the Disposition Modifier (if any) to that roll.'),
]);