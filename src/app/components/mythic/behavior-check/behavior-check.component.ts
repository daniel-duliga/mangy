import { Component, Input, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { RangeTable, RangeTableRow } from 'src/app/features/tables/range-table';
import { Descriptor, MythicNpcModel } from 'src/app/models/data/mythic/mythic-npc-model';
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

  identityModifier: DescriptorModifierValue = 'neutral';
  personalityModifier: DescriptorModifierValue = 'neutral';
  activityModifier: DescriptorModifierValue = 'neutral';

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

  reset() {
    this.selectedNpc.identity1.active = false;
    this.selectedNpc.identity1.modifier = 'neutral';
    
    this.selectedNpc.identity2.active = false;
    this.selectedNpc.identity2.modifier = 'neutral';
    
    this.selectedNpc.personality1.active = false;
    this.selectedNpc.personality1.modifier = 'neutral';
    
    this.selectedNpc.personality2.active = false;
    this.selectedNpc.personality2.modifier = 'neutral';
    
    this.selectedNpc.activity1.active = false;
    this.selectedNpc.activity1.modifier = 'neutral';
    
    this.selectedNpc.activity2.active = false;
    this.selectedNpc.activity2.modifier = 'neutral';

    this.selectedNpc.disposition = 6;
    this.displayDisposition();

    this.persistSelectedNpc();
  }

  selectedNpcChanged(npcId: string) {
    const index = this.dataService.data.mythic.npcs.findIndex(x => x.id === npcId);
    if (index !== -1) {
      this.selectedNpc = this.dataService.data.mythic.npcs[index];
    }
  }

  descriptorUpdated(descriptor: DescriptorType, value: Descriptor) {
    switch (descriptor) {
      case 'activity1': {
        this.selectedNpc.activity1 = value;
        if (this.selectedNpc.activity1.active) {
          this.selectedNpc.activity2.active = false;
        }
        break;
      }
      case 'activity2': {
        this.selectedNpc.activity2 = value;
        if (this.selectedNpc.activity2.active) {
          this.selectedNpc.activity1.active = false;
        }
        break;
      }
      case 'identity1': {
        this.selectedNpc.identity1 = value;
        if (this.selectedNpc.identity1.active) {
          this.selectedNpc.identity2.active = false;
        }
        break;
      }
      case 'identity2': {
        this.selectedNpc.identity2 = value;
        if (this.selectedNpc.identity2.active) {
          this.selectedNpc.identity1.active = false;
        }
        break;
      }
      case 'personality1': {
        this.selectedNpc.personality1 = value;
        if (this.selectedNpc.personality1.active) {
          this.selectedNpc.personality2.active = false;
        }
        break;
      }
      case 'personality2': {
        this.selectedNpc.personality2 = value;
        if (this.selectedNpc.personality2.active) {
          this.selectedNpc.personality1.active = false;
        }
        break;
      }
      default:
        return;
    }
    this.persistSelectedNpc();
  }

  rollDescriptor(descriptor: DescriptorType) {
    if (!this.selectedNpc) { return; }

    const action1 = MeaningTables.Verb.roll();
    const action2 = MeaningTables.Noun.roll();
    const descriptor1 = MeaningTables.Adverb.roll();
    const descriptor2 = MeaningTables.Adjective.roll();

    switch (descriptor) {
      case 'activity1': {
        this.selectedNpc.activity1.value = `${descriptor1.value} ${descriptor2.value}`;
        break;
      }
      case 'activity2': {
        this.selectedNpc.activity2.value = `${descriptor1.value} ${descriptor2.value}`;
        break;
      }
      case 'identity1': {
        this.selectedNpc.identity1.value = `${action1.value} ${action2.value}`;
        break;
      }
      case 'identity2': {
        this.selectedNpc.identity2.value = `${action1.value} ${action2.value}`;
        break;
      }
      case 'personality1': {
        this.selectedNpc.personality1.value = `${descriptor1.value} ${descriptor2.value}`;
        break;
      }
      case 'personality2': {
        this.selectedNpc.personality2.value = `${descriptor1.value} ${descriptor2.value}`;
        break;
      }
      default:
        return;
    }
    this.persistSelectedNpc();
  }

  rollDisposition() {
    const roll = DiceUtil.rollDice('1d10').sum + DiceUtil.rollDice('1d10').sum;
    let identityMod = 0, personalityMod = 0, activityMod = 0;
    
    if (this.selectedNpc.identity1.active && this.selectedNpc.identity1.modifier !== 'neutral') {
      identityMod += this.selectedNpc.identity1.modifier === 'intensifies' ? 2 : -2;
    }
    if (this.selectedNpc.identity2.active && this.selectedNpc.identity2.modifier !== 'neutral') {
      identityMod += this.selectedNpc.identity2.modifier === 'intensifies' ? 2 : -2;
    }
    
    if (this.selectedNpc.personality1.active && this.selectedNpc.personality1.modifier !== 'neutral') {
      personalityMod += this.selectedNpc.personality1.modifier === 'intensifies' ? 2 : -2;
    }
    if (this.selectedNpc.personality2.active && this.selectedNpc.personality2.modifier !== 'neutral') {
      personalityMod += this.selectedNpc.personality2.modifier === 'intensifies' ? 2 : -2;
    }
    
    if (this.selectedNpc.activity1.active && this.selectedNpc.activity1.modifier !== 'neutral') {
      activityMod += this.selectedNpc.activity1.modifier === 'intensifies' ? 2 : -2;
    }
    if (this.selectedNpc.activity2.active && this.selectedNpc.activity2.modifier !== 'neutral') {
      activityMod += this.selectedNpc.activity2.modifier === 'intensifies' ? 2 : -2;
    }

    this.saveAndDisplayDisposition(roll, identityMod, personalityMod, activityMod);
  }

  changeDisposition(modifier: number) {
    this.saveAndDisplayDisposition(this.selectedNpc.disposition + modifier)
  }

  saveAndDisplayDisposition(
    initialDisposition: number, identityMod: number = 0, personalityMod: number = 0, activityMod: number = 0) {
    this.selectedNpc.disposition = initialDisposition + identityMod + personalityMod + activityMod;
    this.persistSelectedNpc();
    this.displayDisposition(initialDisposition, identityMod, personalityMod, activityMod);
  }

  npcAction() {
    // NPC Action 1

    const npcAction1Roll = DiceUtil.rollDice('1d10');
    const npcAction1Result = NpcAction1.roll(npcAction1Roll.sum);

    if (npcAction1Result.value === 'NPC Continues +2') {
      this.selectedNpc.disposition += 2;
    } else if (npcAction1Result.value === 'NPC Continues -2') {
      this.selectedNpc.disposition -= 2;
    } else if (npcAction1Result.value === 'NPC Action -4') {
      this.selectedNpc.disposition -= 4;
    } else if (npcAction1Result.value === 'NPC Action +4') {
      this.selectedNpc.disposition += 4;
    }

    this.displayDisposition();
    this.persistSelectedNpc();

    this.dataService.data.log.add(
      npcAction1Result.value,
      `[Behavior Check - NPC Action 1] D: ${npcAction1Roll.sum}\u000d\u000d${npcAction1Result.notes}`);

    // NPC Action 2

    if (
      npcAction1Result.value === 'NPC Action' ||
      npcAction1Result.value === 'NPC Action -4' ||
      npcAction1Result.value === 'NPC Action +4'
    ) {
      const npcAction2Roll = DiceUtil.rollDice('1d20');
      const npcAction2Result = NpcAction2.roll(npcAction2Roll.sum);

      this.dataService.data.log.add(
        npcAction2Result.value,
        `[Behavior Check - NPC Action 2] D: ${npcAction2Roll.sum}\u000d\u000d${npcAction2Result.notes}`);
    }
  }

  persistSelectedNpc() {
    if (!this.selectedNpc) { return; }
    const npcs = this.dataService.data.mythic.npcs;
    const index = npcs.findIndex(x => x.id === this.selectedNpc?.id);
    if (index !== -1) {
      npcs[index] = this.selectedNpc;
    }
    this.dataService.data.mythic.npcs = npcs;
  }

  private displayDisposition(
    initialDisposition: number = 0, identityMod: number = 0, personalityMod: number = 0, activityMod: number = 0) {
    const result = DispositionTable.roll(this.selectedNpc.disposition);
    this.dispositionDescriptor = result.value;
    this.dispositionDescriptorExplanation = `D: ${initialDisposition}, IMOD: ${identityMod}, PMOD: ${personalityMod}, AMOD: ${activityMod}\u000d\u000d${result.notes}`;
  }
}

export const DispositionTable = new RangeTable([
  new RangeTableRow(-4, 5, 'Passive (-2)', 'The Character takes the softest approach to their Actions.'),
  new RangeTableRow(6, 10, 'Moderate (0)', 'The Character acts in a moderate fashion, not too intense, not too passive.'),
  new RangeTableRow(11, 15, 'Active (+2)', 'The Character wants to make their Actions known.'),
  new RangeTableRow(16, 26, 'Aggressive (+4)', 'The Character acts with the utmost urgency and intensity.'),
]);
export const NpcAction1 = new RangeTable([
  new RangeTableRow(
    1, 3,
    'Theme Action',
    'The NPC takes an Action in keeping with the current Theme, Disposition, and Activated. If the NPC was already performing an Action, the NPC stops that Action and switches to another, expected Action.'),
  new RangeTableRow(
    4, 5,
    'NPC Continues',
    'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action.'),
  new RangeTableRow(
    6, 6,
    'NPC Continues +2',
    'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. Apply a +2 adjustment to their Disposition Score, representing a possible shift in their current attitude. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action +2.'),
  new RangeTableRow(
    7, 7,
    'NPC Continues -2',
    'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. Apply a -2 adjustment to their Disposition Score, representing a possible shift in their current attitude. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action -2.'),
  new RangeTableRow(
    8, 8,
    'NPC Action',
    'The NPC takes a new, maybe unexpected, Action determined by rolling on NPC Action Table 2 and applying the Disposition Modifier (if any) to that roll.'),
  new RangeTableRow(
    9, 9,
    'NPC Action -4',
    'The NPC takes a new, maybe unexpected, Action determined by rolling on NPC Action Table 2, applying a -4 modifier and the Disposition Modifier (if any) to that roll.'),
  new RangeTableRow(
    10, 10,
    'NPC Action +4',
    'The NPC takes a new, maybe unexpected, Action determined by rolling on NPC Action Table 2, applying a +4 modifier and the Disposition Modifier (if any) to that roll.'),
]);
export const NpcAction2 = new RangeTable([
  new RangeTableRow(
    1, 6,
    'Talks, Exposition',
    'The NPC decides to engage in conversation. If they already were talking, then they change the subject and talk about something else. Determine what they say by using the Theme, Disposition, and Activated Descriptors and going with what you would most expect them to say or by rolling on the the Descriptor set from the Meaning Tables.'),
  new RangeTableRow(
    7, 8,
    'Performs an ambiguous action',
    'The NPC does something that has nothing to do with their current Action and doesn’t seem connected to the Theme, Disposition, or Activated Descriptors. It’s a neutral Action. To determine what the Action is, roll on the Action Meaning Tables in the Detail Check chapter. Don\'t feel constrained to come up with something that is completely and totally neutral, just go with the first idea that comes to you along that line as inspired by the Meaning Tables.'),
  new RangeTableRow(
    9, 10,
    'Acts out of PC interest', 'The NPC does something that is in the best interest of the Player Character. If there is more than one PC, either have this result refer to the Player Character dealing most directly with the NPC or determine it randomly.'),
  new RangeTableRow(
    11, 11,
    'Gives something',
    'The Non-Player Character gives the Player Characters something. If there is more than one PC, either have this result refer to the Player Character dealing most directly with the NPC or determine it randomly. This result is similar to Acts Out Of PC Interest, except that what is given may not necessarily be helpful. The “something” in question can be anything, from an object to information. Whatever it is, the NPC is imparting something to the PC and it should have story relevance.'),
  new RangeTableRow(
    12, 12,
    'Seeks to end the encounter',
    'The NPC has had enough of this encounter and wishes to end it. This might mean ending a conversation, walking away from a situation, stopping a fight, etc. This result doesn\'t necessarily mean that the encounter actually ends, just that the NPC tries to end it.'),
  new RangeTableRow(
    13, 13,
    'Changes the theme',
    'The NPC changes the current nature of the encounter. Remember that the Theme is a simple summary of what the NPC is engaged in. Whatever the NPC is currently focusing on, or what is focusing on him, that focus shifts to something else.'),
  new RangeTableRow(
    14, 14,
    'Changes descriptor',
    'One of these Descriptors changes right now into something new, which is reflected in the NPC\'s next Action. Determine the Descriptor category randomly by rolling any set of dice that can give you a 1 to 3 outcome. Once determined, record the new Descriptor alongside the original Descriptor and consider it a secondary Descriptor for this NPC. Once the Descriptor is known, consider it Activated (with a -2 or +2 adjustment to the Disposition, just like any Activated Descriptor would cause, and making any adjustments for deactivating the previous Descriptor). If you get the Changes Descriptor result for a Descriptor category that you have previously already determined a secondary Descriptor for that NPC, instead of generating a new Descriptor you flip to the previously generated secondary Descriptor. If a secondary Descriptor exists in any category and makes sense in the current situation, and you roll the Changes Descriptor result, then you may decide to just go with the Descriptor category that already has a secondary Descriptor instead of first rolling to see which Descriptor category to pull from. A switch in Descriptor like this will last throughout the remainder of this Scene unless this result is rolled again. If the encounter ends and the NPC is met again later in the Adventure, then assume that the NPC has reverted back to their primary, original Descriptor in that category, but retains the secondary Descriptor as reference should Changes Descriptor come up again.'),
  new RangeTableRow(
    15, 17,
    'Acts out of self interest',
    'This is the flip side result of Acts Out Of PC Interest. The NPC does something that is clearly for their own gain. You can look to their Activated Descriptors, Disposition, and the Theme to understand what it is that the NPC wants. If a logical interpretation jumps out at you based on these factors, then run with it. Otherwise, roll on the Action Meaning Table to determine what the NPC does. Whatever it is, it should further their own interests.'),
  new RangeTableRow(
    18, 18,
    'Takes something',
    'The NPC takes something from the PC. If there is more than one PC, then the NPC either takes something from the PC they are most directly dealing with or roll the PC randomly. Whatever it is that the NPC takes it should be something of value to the PC and constitute a loss.'),
  new RangeTableRow(
    19, 20,
    'Causes harm',
    'This result is simple in nature: the NPC tries to hurt the PC. If there is more than one PC, then the NPC either hurts the PC they are most directly dealing with or roll the PC randomly.'),
]);

export type DescriptorModifierValue = 'lowers' | 'neutral' | 'intensifies';
export type DescriptorType = 'identity1' | 'identity2' | 'personality1' | 'personality2' | 'activity1' | 'activity2';