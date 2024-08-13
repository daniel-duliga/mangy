import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { ListTable, ListTableRow } from 'src/app/features/tables/list-table';
import { RangeTable, RangeTableRow } from 'src/app/features/tables/range-table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-waylays-generator',
  templateUrl: './waylays-generator.component.html',
  styleUrls: ['./waylays-generator.component.scss']
})
export class WaylaysGeneratorComponent implements OnInit {
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void { }

  generateWaylay() {
    this.dataService.data.log.add(this.rollWaylay());
  }

  generateCharacterHistory() {
    const definingMoment1 = this.rollWaylay();
    const definingMoment2 = this.rollWaylay();
    const definingMoment3 = this.rollWaylay();
    this.dataService.data.log.add(`
      1. Early age: ${definingMoment1}\n
      2. During the teenage years: ${definingMoment2}\n
      3. Recently: ${definingMoment3}\n
    `);
  }
  
  private rollWaylay(): string {
    const descriptor = tables.descriptor.roll();
    const noun = descriptor.innerTable?.roll().value;
    let modifier = tables.modifier.roll().value;
    modifier = modifier.charAt(0).toUpperCase() + modifier.slice(1);
    const solution = tables.solution.roll(DiceUtil.rollDice('1d10').sum + DiceUtil.rollDice('1d10').sum).value;
    return `${modifier} ${noun} [${descriptor.value}] overcome by ${solution}.`;
  }

}

const tables = {
  descriptor: new ListTable([
    new ListTableRow('Easy Foes', '', new RangeTable([
      new RangeTableRow(1, 2, 'animals'),
      new RangeTableRow(3, 4, 'mooks'),
      new RangeTableRow(5, 6, 'mob'),
      new RangeTableRow(7, 8, 'bandits'),
      new RangeTableRow(9, 10, 'deputies'),
    ])),
    new ListTableRow('Hard Foes', '', new RangeTable([
      new RangeTableRow(1, 2, 'bounty hunter'),
      new RangeTableRow(3, 4, 'soldiers'),
      new RangeTableRow(5, 6, 'monster'),
      new RangeTableRow(7, 8, 'villain'),
      new RangeTableRow(9, 10, 'horror'),
    ])),
    new ListTableRow('Knowledge', '', new RangeTable([
      new RangeTableRow(1, 2, 'ascetic'),
      new RangeTableRow(3, 4, 'research'),
      new RangeTableRow(5, 6, 'occult'),
      new RangeTableRow(7, 8, 'enigma'),
      new RangeTableRow(9, 10, 'science'),
    ])),
    new ListTableRow('Physical', '', new RangeTable([
      new RangeTableRow(1, 2, 'pursuit'),
      new RangeTableRow(3, 4, 'trap'),
      new RangeTableRow(5, 6, 'struggle'),
      new RangeTableRow(7, 8, 'illness'),
      new RangeTableRow(9, 10, 'labor'),
    ])),
    new ListTableRow('Factional', '', new RangeTable([
      new RangeTableRow(1, 2, 'army'),
      new RangeTableRow(3, 4, 'invader'),
      new RangeTableRow(5, 6, 'holdings'),
      new RangeTableRow(7, 8, 'authority'),
      new RangeTableRow(9, 10, 'rebels'),
    ])),
    new ListTableRow('Haven', '', new RangeTable([
      new RangeTableRow(1, 2, 'festival'),
      new RangeTableRow(3, 4, 'hermit'),
      new RangeTableRow(5, 6, 'tavern'),
      new RangeTableRow(7, 8, 'hamlet'),
      new RangeTableRow(9, 10, 'conclave'),
    ])),
    new ListTableRow('Party', '', new RangeTable([
      new RangeTableRow(1, 2, 'misunderstanding'),
      new RangeTableRow(3, 4, 'accusations'),
      new RangeTableRow(5, 6, 'power play'),
      new RangeTableRow(7, 8, 'friend-in-need'),
      new RangeTableRow(9, 10, 'disappearance'),
    ])),
    new ListTableRow('Personal', '', new RangeTable([
      new RangeTableRow(1, 2, 'traitor'),
      new RangeTableRow(3, 4, 'lover'),
      new RangeTableRow(5, 6, 'death'),
      new RangeTableRow(7, 8, 'relative'),
      new RangeTableRow(9, 10, 'rival'),
    ])),
    new ListTableRow('Epic', '', new RangeTable([
      new RangeTableRow(1, 2, 'heaven/hell'),
      new RangeTableRow(3, 4, 'afterlife'),
      new RangeTableRow(5, 6, 'myth'),
      new RangeTableRow(7, 8, 'otherworldly'),
      new RangeTableRow(9, 10, 'the strange'),
    ])),
    new ListTableRow('Natural', '', new RangeTable([
      new RangeTableRow(1, 2, 'weather'),
      new RangeTableRow(3, 4, 'straying/lost'),
      new RangeTableRow(5, 6, 'social environ'),
      new RangeTableRow(7, 8, 'deprivation'),
      new RangeTableRow(9, 10, 'the wild'),
    ])),
  ]),
  modifier: new ListTable([
    new ListTableRow('futile'),
    new ListTableRow('impassioned'),
    new ListTableRow('hesitant'),
    new ListTableRow('benign'),
    new ListTableRow('revered'),
    new ListTableRow('pedantic'),
    new ListTableRow('grim'),
    new ListTableRow('common'),
    new ListTableRow('bitter'),
    new ListTableRow('impassioned'),
    new ListTableRow('perceiving'),
    new ListTableRow('selfish'),
    new ListTableRow('prohibited'),
    new ListTableRow('brusque'),
    new ListTableRow('prosperous'),
    new ListTableRow('depraved'),
    new ListTableRow('comforting'),
    new ListTableRow('hopeless'),
    new ListTableRow('waning'),
    new ListTableRow('regimental'),
    new ListTableRow('harsh'),
    new ListTableRow('leeching'),
    new ListTableRow('tranquil'),
    new ListTableRow('inclusive'),
    new ListTableRow('righteous'),
    new ListTableRow('attentive'),
    new ListTableRow('inexplicable'),
    new ListTableRow('corrupt'),
    new ListTableRow('roaring'),
    new ListTableRow('unmistakable'),
    new ListTableRow('sudden'),
    new ListTableRow('impending'),
    new ListTableRow('fragile'),
    new ListTableRow('painless'),
    new ListTableRow('haphazard'),
    new ListTableRow('foreign'),
    new ListTableRow('ravenous'),
    new ListTableRow('adept'),
    new ListTableRow('barbaric'),
    new ListTableRow('disputable'),
    new ListTableRow('binding'),
    new ListTableRow('noble'),
    new ListTableRow('copious'),
    new ListTableRow('retired'),
    new ListTableRow('provoking'),
    new ListTableRow('ordinary'),
    new ListTableRow('prolonged'),
    new ListTableRow('deceiving'),
    new ListTableRow('savage'),
    new ListTableRow('drowsy'),
    new ListTableRow('mundane'),
    new ListTableRow('abrupt'),
    new ListTableRow('unforeseen'),
    new ListTableRow('peaceful'),
    new ListTableRow('steady'),
    new ListTableRow('abetting'),
    new ListTableRow('stale'),
    new ListTableRow('regular'),
    new ListTableRow('dubious'),
    new ListTableRow('exclusive'),
    new ListTableRow('unreliable'),
    new ListTableRow('altruistic'),
    new ListTableRow('storied'),
    new ListTableRow('tapped'),
    new ListTableRow('tedious'),
    new ListTableRow('quiet'),
    new ListTableRow('exotic'),
    new ListTableRow('impervious'),
    new ListTableRow('fledgling'),
    new ListTableRow('fixated'),
    new ListTableRow('illuminating'),
    new ListTableRow('exhausting'),
    new ListTableRow('honorable'),
    new ListTableRow('exclusive'),
    new ListTableRow('apparent'),
    new ListTableRow('valuable'),
    new ListTableRow('haunting'),
    new ListTableRow('migrant'),
    new ListTableRow('pleasant'),
    new ListTableRow('incompetent'),
    new ListTableRow('abnormal'),
    new ListTableRow('abstract'),
    new ListTableRow('irritating'),
    new ListTableRow('hidden'),
    new ListTableRow('hallowed'),
    new ListTableRow('illusory'),
    new ListTableRow('legendary'),
    new ListTableRow('prolonged'),
    new ListTableRow('meek'),
    new ListTableRow('proficient'),
    new ListTableRow('forbidden'),
    new ListTableRow('fantastic'),
    new ListTableRow('accidental'),
    new ListTableRow('malevolent'),
    new ListTableRow('unlikely'),
    new ListTableRow('problematic'),
    new ListTableRow('eccentric'),
    new ListTableRow('lethargic'),
    new ListTableRow('amusing'),
    new ListTableRow('afflicting  '),
  ]),
  solution: new RangeTable([
    new RangeTableRow(2, 2, 'legendary help'),
    new RangeTableRow(3, 3, 'act of nature'),
    new RangeTableRow(4, 4, 'the people'),
    new RangeTableRow(5, 5, 'enemy help'),
    new RangeTableRow(6, 6, 'avoidance'),
    new RangeTableRow(7, 7, 'scarce-used ability'),
    new RangeTableRow(8, 8, 'personal resources'),
    new RangeTableRow(9, 9, 'close friend'),
    new RangeTableRow(10, 10, 'strong attribute'),
    new RangeTableRow(11, 11, 'favored ability'),
    new RangeTableRow(12, 12, 'favored skill'),
    new RangeTableRow(13, 13, 'on accident'),
    new RangeTableRow(14, 14, 'weak attribute'),
    new RangeTableRow(15, 15, 'counteraction'),
    new RangeTableRow(16, 16, 'faction intervention'),
    new RangeTableRow(17, 17, 'the authority'),
    new RangeTableRow(18, 18, 'fate'),
    new RangeTableRow(19, 19, 'change of heart'),
    new RangeTableRow(20, 20, 'deus ex'),
  ])
};