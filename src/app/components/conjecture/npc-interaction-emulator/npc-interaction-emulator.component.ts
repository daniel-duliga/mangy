import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { ListTable, ListTableRow } from 'src/app/features/tables/list-table';
import { RangeTable, RangeTableRow } from 'src/app/features/tables/range-table';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-npc-interaction-emulator',
  templateUrl: './npc-interaction-emulator.component.html',
  styleUrls: ['./npc-interaction-emulator.component.scss']
})
export class NpcInteractionEmulatorComponent implements OnInit {
  relationship = 'Neutral';
  npcRelationship = new ListTable([
    new ListTableRow('Loved'),
    new ListTableRow('Friendly'),
    new ListTableRow('Peaceful'),
    new ListTableRow('Neutral'),
    new ListTableRow('Distrustful'),
    new ListTableRow('Hostile'),
    new ListTableRow('Hated'),
  ]);
  bearing = 'Mysterious';
  npcBearing = new RangeTable([
    new RangeTableRow(1, 12, 'Scheming'),
    new RangeTableRow(13, 24, 'Insane'),
    new RangeTableRow(25, 36, 'Friendly'),
    new RangeTableRow(37, 49, 'Hostile'),
    new RangeTableRow(50, 62, 'Inquisitive'),
    new RangeTableRow(63, 75, 'Knowing'),
    new RangeTableRow(76, 88, 'Mysterious'),
    new RangeTableRow(89, 100, 'Prejudiced'),
  ]);

  constructor(
    private dataService: StorageService,
  ) { }

  ngOnInit(): void { }

  rollRelationship() {
    this.relationship = this.npcRelationship.roll().value;
  }

  rollBearing() {
    this.bearing = this.npcBearing.roll().value;
  }

  rollConversationMood() {
    let message = '';
    if (this.relationship === 'Loved') {
      const mood = npcConversationMood_Loved.roll();
      message = `The NPC, who usually loves the party, is ${mood.value} right now.`;
    } else if (this.relationship === 'Friendly') {
      const mood = npcConversationMood_Friendly.roll();
      message = `The NPC, who is usually friendly with the party, is ${mood.value} right now.`;
    } else if (this.relationship === 'Peaceful') {
      const mood = npcConversationMood_Peaceful.roll();
      message = `The NPC, who is usually peaceful towards the party, is ${mood.value} right now.`;
    } else if (this.relationship === 'Neutral') {
      const mood = npcConversationMood_Neutral.roll();
      message = `The NPC, who is usually neutral towards the party, is ${mood.value} right now.`;
    } else if (this.relationship === 'Distrustful') {
      const mood = npcConversationMood_Distrustful.roll();
      message = `The NPC, who is usually distrustful of the party, is ${mood.value} right now.`;
    } else if (this.relationship === 'Hostile') {
      const mood = npcConversationMood_Hostile.roll();
      message = `The NPC, who is usually hostile towards the party, is ${mood.value} right now.`;
    } else if (this.relationship === 'Hated') {
      const mood = npcConversationMood_Hated.roll();
      message = `The NPC, who usually hates the party, is ${mood.value} right now.`;
    }
    this.dataService.data.log.add(message);
  }

  rollInteraction() {
    let bearingSecondary: RangeTableRow | null = null;
    if (this.bearing === 'Scheming') {
      bearingSecondary = npcBearing_Scheming.roll(DiceUtil.rollDice('1d100').sum);
    } else if (this.bearing === 'Insane') {
      bearingSecondary = npcBearing_Insane.roll(DiceUtil.rollDice('1d100').sum);
    } else if (this.bearing === 'Friendly') {
      bearingSecondary = npcBearing_Friendly.roll(DiceUtil.rollDice('1d100').sum);
    } else if (this.bearing === 'Hostile') {
      bearingSecondary = npcBearing_Hostile.roll(DiceUtil.rollDice('1d100').sum);
    } else if (this.bearing === 'Inquisitive') {
      bearingSecondary = npcBearing_Inquisitive.roll(DiceUtil.rollDice('1d100').sum);
    } else if (this.bearing === 'Knowing') {
      bearingSecondary = npcBearing_Knowing.roll(DiceUtil.rollDice('1d100').sum);
    } else if (this.bearing === 'Mysterious') {
      bearingSecondary = npcBearing_Mysterious.roll(DiceUtil.rollDice('1d100').sum);
    } else if (this.bearing === 'Prejudiced') {
      bearingSecondary = npcBearing_Prejudiced.roll(DiceUtil.rollDice('1d100').sum);
    }
    const focus = npcFocus.roll(DiceUtil.rollDice('1d100').sum);

    this.dataService.data.log.add(`The ${this.bearing.toLowerCase()} NPC speaks of ${bearingSecondary?.value} regarding the PC's ${focus.value}.`);
  }
}

const npcConversationMood_Loved = new RangeTable([
  new RangeTableRow(1, 1, 'withdrawn'),
  new RangeTableRow(2, 6, 'guarded'),
  new RangeTableRow(7, 16, 'cautious'),
  new RangeTableRow(17, 31, 'neutral'),
  new RangeTableRow(32, 70, 'sociable'),
  new RangeTableRow(71, 85, 'helpful'),
  new RangeTableRow(86, 100, 'forthcoming'),
]);
const npcConversationMood_Friendly = new RangeTable([
  new RangeTableRow(1, 2, 'withdrawn'),
  new RangeTableRow(3, 8, 'guarded'),
  new RangeTableRow(9, 20, 'cautious'),
  new RangeTableRow(21, 40, 'neutral'),
  new RangeTableRow(41, 76, 'sociable'),
  new RangeTableRow(77, 89, 'helpful'),
  new RangeTableRow(90, 100, 'forthcoming'),
]);
const npcConversationMood_Peaceful = new RangeTable([
  new RangeTableRow(1, 3, 'withdrawn'),
  new RangeTableRow(4, 11, 'guarded'),
  new RangeTableRow(12, 25, 'cautious'),
  new RangeTableRow(26, 55, 'neutral'),
  new RangeTableRow(56, 82, 'sociable'),
  new RangeTableRow(83, 93, 'helpful'),
  new RangeTableRow(94, 100, 'forthcoming'),
]);
const npcConversationMood_Neutral = new RangeTable([
  new RangeTableRow(1, 5, 'withdrawn'),
  new RangeTableRow(6, 15, 'guarded'),
  new RangeTableRow(16, 30, 'cautious'),
  new RangeTableRow(31, 60, 'neutral'),
  new RangeTableRow(61, 85, 'sociable'),
  new RangeTableRow(86, 95, 'helpful'),
  new RangeTableRow(96, 100, 'forthcoming'),
]);
const npcConversationMood_Distrustful = new RangeTable([
  new RangeTableRow(1, 7, 'withdrawn'),
  new RangeTableRow(8, 18, 'guarded'),
  new RangeTableRow(19, 46, 'cautious'),
  new RangeTableRow(47, 76, 'neutral'),
  new RangeTableRow(77, 90, 'sociable'),
  new RangeTableRow(91, 97, 'helpful'),
  new RangeTableRow(98, 100, 'forthcoming'),
]);
const npcConversationMood_Hostile = new RangeTable([
  new RangeTableRow(1, 11, 'withdrawn'),
  new RangeTableRow(12, 24, 'guarded'),
  new RangeTableRow(25, 61, 'cautious'),
  new RangeTableRow(62, 81, 'neutral'),
  new RangeTableRow(82, 93, 'sociable'),
  new RangeTableRow(94, 98, 'helpful'),
  new RangeTableRow(99, 100, 'forthcoming'),
]);
const npcConversationMood_Hated = new RangeTable([
  new RangeTableRow(1, 15, 'withdrawn'),
  new RangeTableRow(16, 30, 'guarded'),
  new RangeTableRow(31, 69, 'cautious'),
  new RangeTableRow(70, 84, 'neutral'),
  new RangeTableRow(85, 94, 'sociable'),
  new RangeTableRow(95, 99, 'helpful'),
  new RangeTableRow(100, 100, 'forthcoming'),
]);

const npcBearing_Scheming = new RangeTable([
  new RangeTableRow(1, 10, 'intent'),
  new RangeTableRow(11, 20, 'bargain'),
  new RangeTableRow(21, 30, 'means'),
  new RangeTableRow(31, 40, 'proposition'),
  new RangeTableRow(41, 50, 'plan'),
  new RangeTableRow(51, 60, 'compromise'),
  new RangeTableRow(61, 70, 'agenda'),
  new RangeTableRow(71, 80, 'arrangement'),
  new RangeTableRow(81, 90, 'negotiation'),
  new RangeTableRow(91, 100, 'plot'),
]);
const npcBearing_Insane = new RangeTable([
  new RangeTableRow(1, 10, 'madness'),
  new RangeTableRow(11, 20, 'fear'),
  new RangeTableRow(21, 30, 'accident'),
  new RangeTableRow(31, 40, 'chaos'),
  new RangeTableRow(41, 50, 'idiocy'),
  new RangeTableRow(51, 60, 'illusion'),
  new RangeTableRow(61, 70, 'turmoil'),
  new RangeTableRow(71, 80, 'confusion'),
  new RangeTableRow(81, 90, 'façade'),
  new RangeTableRow(91, 100, 'bewilderment'),
]);
const npcBearing_Friendly = new RangeTable([
  new RangeTableRow(1, 10, 'alliance'),
  new RangeTableRow(11, 20, 'comfort'),
  new RangeTableRow(21, 30, 'gratitude'),
  new RangeTableRow(31, 40, 'shelter'),
  new RangeTableRow(41, 50, 'happiness'),
  new RangeTableRow(51, 60, 'support'),
  new RangeTableRow(61, 70, 'promise'),
  new RangeTableRow(71, 80, 'delight'),
  new RangeTableRow(81, 90, 'aid'),
  new RangeTableRow(91, 100, 'celebration'),
]);
const npcBearing_Hostile = new RangeTable([
  new RangeTableRow(1, 10, ' death'),
  new RangeTableRow(11, 20, ' capture'),
  new RangeTableRow(21, 30, ' judgment'),
  new RangeTableRow(31, 40, ' combat'),
  new RangeTableRow(41, 50, ' surrender'),
  new RangeTableRow(51, 60, ' rage'),
  new RangeTableRow(61, 70, ' resentment'),
  new RangeTableRow(71, 80, ' submission'),
  new RangeTableRow(81, 90, ' injury'),
  new RangeTableRow(91, 100, ' destruction'),
]);
const npcBearing_Inquisitive = new RangeTable([
  new RangeTableRow(1, 10, 'questions'),
  new RangeTableRow(11, 20, 'investigation'),
  new RangeTableRow(21, 30, 'interest'),
  new RangeTableRow(31, 40, 'demand'),
  new RangeTableRow(41, 50, 'suspicion'),
  new RangeTableRow(51, 60, 'request'),
  new RangeTableRow(61, 70, 'curiosity'),
  new RangeTableRow(71, 80, 'skepticism'),
  new RangeTableRow(81, 90, 'command'),
  new RangeTableRow(91, 100, 'petition'),
]);
const npcBearing_Knowing = new RangeTable([
  new RangeTableRow(1, 10, 'report'),
  new RangeTableRow(11, 20, 'effects'),
  new RangeTableRow(21, 30, 'examination'),
  new RangeTableRow(31, 40, 'records'),
  new RangeTableRow(41, 50, 'account'),
  new RangeTableRow(51, 60, 'news'),
  new RangeTableRow(61, 70, 'history'),
  new RangeTableRow(71, 80, 'telling'),
  new RangeTableRow(81, 90, 'discourse'),
  new RangeTableRow(91, 100, 'speech'),
]);
const npcBearing_Mysterious = new RangeTable([
  new RangeTableRow(1, 10, 'rumor'),
  new RangeTableRow(11, 20, 'uncertainty'),
  new RangeTableRow(21, 30, 'secrets'),
  new RangeTableRow(31, 40, 'misdirection'),
  new RangeTableRow(41, 50, 'whispers'),
  new RangeTableRow(51, 60, 'lies'),
  new RangeTableRow(61, 70, 'shadows'),
  new RangeTableRow(71, 80, 'enigma'),
  new RangeTableRow(81, 90, 'obscurity'),
  new RangeTableRow(91, 100, 'conundrum'),
]);
const npcBearing_Prejudiced = new RangeTable([
  new RangeTableRow(1, 10, 'reputation'),
  new RangeTableRow(11, 20, 'doubt'),
  new RangeTableRow(21, 30, 'bias'),
  new RangeTableRow(31, 40, 'dislike'),
  new RangeTableRow(41, 50, 'partiality'),
  new RangeTableRow(51, 60, 'belief'),
  new RangeTableRow(61, 70, 'view'),
  new RangeTableRow(71, 80, 'discrimination'),
  new RangeTableRow(81, 90, 'assessment'),
  new RangeTableRow(91, 100, 'difference'),
]);
const npcFocus = new RangeTable([
  new RangeTableRow(1, 3, 'current scene'),
  new RangeTableRow(4, 6, 'last story'),
  new RangeTableRow(7, 9, 'equipment'),
  new RangeTableRow(10, 12, 'parents'),
  new RangeTableRow(13, 15, 'history'),
  new RangeTableRow(16, 18, 'retainers'),
  new RangeTableRow(19, 21, 'wealth'),
  new RangeTableRow(22, 24, 'relics'),
  new RangeTableRow(25, 27, 'last action'),
  new RangeTableRow(28, 30, 'skills'),
  new RangeTableRow(31, 33, 'superiors'),
  new RangeTableRow(34, 36, 'fame'),
  new RangeTableRow(37, 39, 'campaign'),
  new RangeTableRow(40, 42, 'future action'),
  new RangeTableRow(43, 45, 'friends'),
  new RangeTableRow(46, 48, 'allies'),
  new RangeTableRow(49, 51, 'last scene'),
  new RangeTableRow(52, 54, 'contacts'),
  new RangeTableRow(55, 57, 'flaws'),
  new RangeTableRow(58, 60, 'antagonist'),
  new RangeTableRow(61, 63, 'rewards'),
  new RangeTableRow(64, 66, 'experience'),
  new RangeTableRow(67, 69, 'knowledge'),
  new RangeTableRow(70, 72, 'recent scene'),
  new RangeTableRow(73, 75, 'community'),
  new RangeTableRow(76, 78, 'treasure'),
  new RangeTableRow(79, 81, 'the character'),
  new RangeTableRow(82, 84, 'current story'),
  new RangeTableRow(85, 87, 'family'),
  new RangeTableRow(88, 90, 'power'),
  new RangeTableRow(91, 93, 'weapons'),
  new RangeTableRow(94, 96, 'previous scene'),
  new RangeTableRow(97, 100, 'enemy'),
]);