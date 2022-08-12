import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { ListTable, ListTableRow } from 'src/app/features/tables/list-table';
import { RangeTable, RangeTableRow } from 'src/app/features/tables/range-table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wfrp',
  templateUrl: './wfrp.component.html',
  styleUrls: ['./wfrp.component.scss']
})
export class WfrpComponent implements OnInit {
  race: 'human' | 'dwarf' | 'elf' | 'halfling' | 'gnome' = 'human';
  gender: 'male' | 'female' = 'male';
  status: 'commoner' | 'noble' = 'commoner';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void { }

  rollName() {
    if (this.race === 'human') {
      this.rollHumanName();
    } else if (this.race === 'dwarf') {
      this.rollDwarfName();
    } else if (this.race === 'elf') {
      this.rollElfName();
    } else if (this.race === 'gnome') {

    } else if (this.race === 'halfling') {

    }
  }

  private rollHumanName() {
    let forename = '';
    const forenameDice = DiceUtil.rollDice('1d1000').sum;
    if (this.gender === 'male') {
      forename = tables.names.human.forenames.male.roll(forenameDice).value;
    } else {
      forename = tables.names.human.forenames.female.roll(forenameDice).value;
    }

    let surname = '';
    const surnameTypeDice = DiceUtil.rollDice('1d4').sum;
    if (surnameTypeDice === 1) {
      // Settlement
      let settlementRoll = tables.settlements.human.insideEmpire.roll(DiceUtil.rollDice('1d100').sum);
      if (settlementRoll.value === 'Outside the Empire') {
        settlementRoll = tables.settlements.human.outsideEmpire.roll(DiceUtil.rollDice('1d100').sum);
        if (settlementRoll.innerTable !== null) {
          settlementRoll = settlementRoll.innerTable.roll(DiceUtil.rollDice('1d100').sum);
        }
      }
      surname = settlementRoll.value;
    } else if (surnameTypeDice === 2) {
      // Occupation
      surname = tables.names.human.professions.roll(DiceUtil.rollDice('1d23').sum).value;
    } else if (surnameTypeDice === 3) {
      // Nickname
      surname = tables.names.human.nicknames.roll(DiceUtil.rollDice('1d16').sum).value;
    } else {
      // Parent or ancestor
      const ancestorDice = DiceUtil.rollDice('1d1000').sum;
      let ancestor = '';
      if (this.gender === 'male') {
        ancestor = tables.names.human.forenames.male.roll(ancestorDice).value;
        surname = `${ancestor}son`;
      } else {
        ancestor = tables.names.human.forenames.female.roll(ancestorDice).value;
        surname = `${ancestor}dottir`;
      }
    }

    if (this.status === 'noble') {
      surname = `von ${surname}`;
    }

    this.dataService.data.log.add(`${forename} ${surname}`);
  }
  
  private rollDwarfName() {
    const surnameDice = DiceUtil.rollDice('1d1000').sum;
    const ancestorDice = DiceUtil.rollDice('1d1000').sum;
    if (this.gender === 'male') {
      const surname = tables.names.dwarf.forenames.male.roll(surnameDice).value;
      const ancestor = tables.names.dwarf.forenames.male.roll(ancestorDice).value;
      this.dataService.data.log.add(`${surname} ${ancestor}son`);
    } else {
      const surname = tables.names.dwarf.forenames.female.roll(surnameDice).value;
      const ancestor = tables.names.dwarf.forenames.female.roll(ancestorDice).value;
      this.dataService.data.log.add(`${surname} ${ancestor}dottir`);
    }
  }

  private rollElfName() {
    const numberOfNames = DiceUtil.rollDice('1d3').sum;
    let name = '';
    for (let index = 0; index < numberOfNames; index++) {
      const prefix = tables.names.elf.prefix.roll(DiceUtil.rollDice('1d100').sum).value;
      const suffix = tables.names.elf.suffix.roll(DiceUtil.rollDice('1d100').sum).value;
      name = `${name} ${prefix}${suffix}`;
    }
    name.trimStart();
    this.dataService.data.log.add(name);
  }

  rollHumanSettlement() {
    let settlement1 = tables.settlements.human.insideEmpire.roll(DiceUtil.rollDice('1d100').sum);

    if (settlement1.value === 'Outside the Empire') {
      settlement1 = tables.settlements.human.outsideEmpire.roll(DiceUtil.rollDice('1d100').sum);
    }

    if (settlement1.innerTable !== null) {
      const settlement2 = settlement1.innerTable.roll(DiceUtil.rollDice('1d100').sum);
      this.dataService.data.log.add(`${settlement2.value} in ${settlement1.value}`);
    } else {
      this.dataService.data.log.add(settlement1.value);
    }
  }

}

const tables = {
  names: {
    human: {
      forenames: {
        male: new RangeTable([
          new RangeTableRow(1, 2, 'Adam'),
          new RangeTableRow(3, 6, 'Adelbert'),
          new RangeTableRow(7, 22, 'Adolf'),
          new RangeTableRow(23, 26, 'Albert'),
          new RangeTableRow(27, 34, 'Albricht'),
          new RangeTableRow(35, 36, 'Aldheim'),
          new RangeTableRow(37, 44, 'Alex'),
          new RangeTableRow(45, 48, 'Alfred'),
          new RangeTableRow(49, 50, 'Alfricht'),
          new RangeTableRow(51, 66, 'Anders'),
          new RangeTableRow(67, 74, 'Andreas'),
          new RangeTableRow(75, 82, 'Anton'),
          new RangeTableRow(83, 84, 'Arthur'),
          new RangeTableRow(85, 88, 'Axel'),
          new RangeTableRow(89, 92, 'Barthelm'),
          new RangeTableRow(93, 100, 'Bengt'),
          new RangeTableRow(101, 116, 'Bernhard'),
          new RangeTableRow(117, 132, 'Berthold'),
          new RangeTableRow(133, 140, 'Boris'),
          new RangeTableRow(141, 164, 'Bruno'),
          new RangeTableRow(165, 196, 'Carolus'),
          new RangeTableRow(197, 220, 'Claus'),
          new RangeTableRow(221, 228, 'Conrad'),
          new RangeTableRow(229, 232, 'Diehl'),
          new RangeTableRow(233, 240, 'Dieter'),
          new RangeTableRow(241, 244, 'Dietrich'),
          new RangeTableRow(245, 248, 'Eberhard'),
          new RangeTableRow(249, 250, 'Eckhard'),
          new RangeTableRow(251, 254, 'Edgar'),
          new RangeTableRow(255, 262, 'Ehrhard'),
          new RangeTableRow(263, 266, 'Ehrmann'),
          new RangeTableRow(267, 268, 'Emmerich'),
          new RangeTableRow(269, 292, 'Erich'),
          new RangeTableRow(293, 324, 'Ernst'),
          new RangeTableRow(325, 332, 'Erwin'),
          new RangeTableRow(333, 334, 'Faustmann'),
          new RangeTableRow(335, 336, 'Felix'),
          new RangeTableRow(337, 340, 'Ferdinand'),
          new RangeTableRow(341, 372, 'Franz'),
          new RangeTableRow(373, 404, 'Friedrich'),
          new RangeTableRow(405, 408, 'Gebhard'),
          new RangeTableRow(409, 412, 'Georg'),
          new RangeTableRow(413, 420, 'Gerhard'),
          new RangeTableRow(421, 424, 'Gottfried'),
          new RangeTableRow(425, 428, 'Gotthard'),
          new RangeTableRow(429, 432, 'Gottlieb'),
          new RangeTableRow(433, 434, 'Gregor'),
          new RangeTableRow(435, 438, 'Gunnar'),
          new RangeTableRow(439, 446, 'Gunthar'),
          new RangeTableRow(447, 462, 'Gustaf'),
          new RangeTableRow(463, 466, 'Hals'),
          new RangeTableRow(467, 498, 'Hannes'),
          new RangeTableRow(499, 500, 'Hartwig'),
          new RangeTableRow(501, 516, 'Heinrich'),
          new RangeTableRow(517, 524, 'Heinz'),
          new RangeTableRow(525, 526, 'Heironymus'),
          new RangeTableRow(527, 534, 'Helmut'),
          new RangeTableRow(535, 536, 'Hergard'),
          new RangeTableRow(537, 544, 'Herman'),
          new RangeTableRow(545, 546, 'Herpin'),
          new RangeTableRow(547, 548, 'Hildebrand'),
          new RangeTableRow(549, 550, 'Holger'),
          new RangeTableRow(551, 554, 'Hugo'),
          new RangeTableRow(555, 556, 'Hultz'),
          new RangeTableRow(557, 558, 'Humfried'),
          new RangeTableRow(559, 562, 'Jakob'),
          new RangeTableRow(563, 566, 'Joachim'),
          new RangeTableRow(567, 598, 'Johann'),
          new RangeTableRow(599, 606, 'Josef'),
          new RangeTableRow(607, 608, 'Kaspar'),
          new RangeTableRow(609, 610, 'Kastor'),
          new RangeTableRow(611, 614, 'Knud'),
          new RangeTableRow(615, 638, 'Kurt'),
          new RangeTableRow(639, 640, 'Lorenz'),
          new RangeTableRow(641, 642, 'Leonhard'),
          new RangeTableRow(643, 646, 'Leopold'),
          new RangeTableRow(647, 648, 'Luitpold'),
          new RangeTableRow(649, 656, 'Ludovicus'),
          new RangeTableRow(657, 660, 'Lukas'),
          new RangeTableRow(661, 664, 'Magnus'),
          new RangeTableRow(665, 672, 'Martin'),
          new RangeTableRow(673, 676, 'Matthias'),
          new RangeTableRow(677, 684, 'Max'),
          new RangeTableRow(685, 686, 'Moritz'),
          new RangeTableRow(687, 694, 'Niklaus'),
          new RangeTableRow(695, 698, 'Olaf'),
          new RangeTableRow(699, 700, 'Oskar'),
          new RangeTableRow(701, 708, 'Otto'),
          new RangeTableRow(709, 716, 'Paul'),
          new RangeTableRow(717, 724, 'Peter'),
          new RangeTableRow(725, 726, 'Quintus'),
          new RangeTableRow(727, 728, 'Ralf'),
          new RangeTableRow(729, 736, 'Rolf'),
          new RangeTableRow(737, 738, 'Reinald'),
          new RangeTableRow(739, 746, 'Reiner'),
          new RangeTableRow(747, 754, 'Reinhard'),
          new RangeTableRow(755, 762, 'Reinhold'),
          new RangeTableRow(763, 766, 'Reinwald'),
          new RangeTableRow(767, 770, 'Rudiger'),
          new RangeTableRow(771, 778, 'Rudolf'),
          new RangeTableRow(779, 780, 'Ruprecht'),
          new RangeTableRow(781, 788, 'Siegfried'),
          new RangeTableRow(789, 792, 'Sigismund'),
          new RangeTableRow(793, 800, 'Sigmund'),
          new RangeTableRow(801, 802, 'Stehmar'),
          new RangeTableRow(803, 818, 'Stephan'),
          new RangeTableRow(819, 820, 'Theodosius'),
          new RangeTableRow(821, 822, 'Theophilus'),
          new RangeTableRow(823, 830, 'Thomas'),
          new RangeTableRow(831, 832, 'Tobias'),
          new RangeTableRow(833, 840, 'Udo'),
          new RangeTableRow(841, 844, 'Uhler'),
          new RangeTableRow(845, 852, 'Ulrich'),
          new RangeTableRow(853, 856, 'Viktor',),
          new RangeTableRow(857, 860, 'Vorster'),
          new RangeTableRow(861, 868, 'Waldemar'),
          new RangeTableRow(869, 876, 'Walter'),
          new RangeTableRow(877, 909, 'Werner'),
          new RangeTableRow(910, 942, 'Wilhelm'),
          new RangeTableRow(943, 959, 'Wolf'),
          new RangeTableRow(960, 983, 'Wolfgang'),
          new RangeTableRow(984, 1000, 'Wolmar '),
        ]),
        female: new RangeTable([
          new RangeTableRow(1, 5, 'Agnes'),
          new RangeTableRow(6, 15, 'Agnetha'),
          new RangeTableRow(16, 20, 'Alexa'),
          new RangeTableRow(21, 30, 'Alfrida'),
          new RangeTableRow(31, 35, 'Alice'),
          new RangeTableRow(36, 40, 'Amalie'),
          new RangeTableRow(41, 60, 'Andrea'),
          new RangeTableRow(61, 65, 'Anika'),
          new RangeTableRow(66, 90, 'Anna'),
          new RangeTableRow(91, 95, 'Astrid'),
          new RangeTableRow(96, 100, 'Barbara'),
          new RangeTableRow(101, 105, 'Beatrix'),
          new RangeTableRow(106, 115, 'Berta'),
          new RangeTableRow(116, 125, 'Bianka'),
          new RangeTableRow(126, 130, 'Birgit'),
          new RangeTableRow(131, 145, 'Brigette'),
          new RangeTableRow(146, 155, 'Britt'),
          new RangeTableRow(156, 170, 'Brunhild'),
          new RangeTableRow(171, 180, 'Charlotte'),
          new RangeTableRow(181, 190, 'Carina'),
          new RangeTableRow(191, 200, 'Carmilla'),
          new RangeTableRow(201, 205, 'Claudia'),
          new RangeTableRow(206, 215, 'Dagmar'),
          new RangeTableRow(216, 220, 'Elena'),
          new RangeTableRow(221, 230, 'Elfrida'),
          new RangeTableRow(231, 250, 'Elisa'),
          new RangeTableRow(251, 260, 'Elisabeth'),
          new RangeTableRow(261, 275, 'Elsa'),
          new RangeTableRow(276, 285, 'Emmanuelle'),
          new RangeTableRow(286, 295, 'Emilie'),
          new RangeTableRow(296, 300, 'Erika'),
          new RangeTableRow(301, 305, 'Esther'),
          new RangeTableRow(306, 315, 'Etelka'),
          new RangeTableRow(316, 340, 'Eva'),
          new RangeTableRow(341, 350, 'Franziska'),
          new RangeTableRow(351, 360, 'Frida'),
          new RangeTableRow(361, 370, 'Gabrielle'),
          new RangeTableRow(371, 385, 'Gerda'),
          new RangeTableRow(386, 390, 'Gertrud'),
          new RangeTableRow(391, 400, 'Gilda'),
          new RangeTableRow(401, 415, 'Greta'),
          new RangeTableRow(416, 425, 'Gretel'),
          new RangeTableRow(426, 435, 'Gretchen'),
          new RangeTableRow(436, 450, 'Hanna'),
          new RangeTableRow(451, 460, 'Hedwig'),
          new RangeTableRow(461, 470, 'Heidi'),
          new RangeTableRow(471, 475, 'Helena'),
          new RangeTableRow(476, 495, 'Hilda'),
          new RangeTableRow(496, 505, 'Hildegard'),
          new RangeTableRow(506, 515, 'Hunni'),
          new RangeTableRow(516, 530, 'Ilsa'),
          new RangeTableRow(531, 550, 'Inga'),
          new RangeTableRow(551, 570, 'Ingrid'),
          new RangeTableRow(571, 575, 'Irene'),
          new RangeTableRow(576, 590, 'Isolde'),
          new RangeTableRow(591, 615, 'Johanna'),
          new RangeTableRow(616, 620, 'Juliane'),
          new RangeTableRow(621, 625, 'Karelia'),
          new RangeTableRow(626, 635, 'Karin'),
          new RangeTableRow(636, 645, 'Karoline'),
          new RangeTableRow(646, 660, 'Katharine'),
          new RangeTableRow(661, 680, 'Kirsten'),
          new RangeTableRow(681, 690, 'Klara'),
          new RangeTableRow(691, 700, 'Leonore'),
          new RangeTableRow(701, 710, 'Ludmilla'),
          new RangeTableRow(711, 715, 'Luise'),
          new RangeTableRow(716, 720, 'Magdalene'),
          new RangeTableRow(721, 725, 'Margaritha'),
          new RangeTableRow(726, 735, 'Marianne'),
          new RangeTableRow(736, 750, 'Marlene'),
          new RangeTableRow(751, 760, 'Martha'),
          new RangeTableRow(761, 765, 'Martina'),
          new RangeTableRow(766, 775, 'Marie'),
          new RangeTableRow(776, 780, 'Mathilde'),
          new RangeTableRow(781, 785, 'Nastassia'),
          new RangeTableRow(786, 790, 'Natasha'),
          new RangeTableRow(791, 795, 'Ottilia'),
          new RangeTableRow(796, 800, 'Petra'),
          new RangeTableRow(801, 815, 'Regina'),
          new RangeTableRow(816, 830, 'Renata'),
          new RangeTableRow(831, 835, 'Selena'),
          new RangeTableRow(836, 850, 'Sigrid'),
          new RangeTableRow(851, 855, 'Sigrun'),
          new RangeTableRow(856, 860, 'Silma'),
          new RangeTableRow(861, 870, 'Solveig'),
          new RangeTableRow(871, 880, 'Sophia'),
          new RangeTableRow(881, 890, 'Susanne'),
          new RangeTableRow(891, 895, 'Theodora'),
          new RangeTableRow(896, 900, 'Theodosia'),
          new RangeTableRow(901, 910, 'Therese'),
          new RangeTableRow(911, 920, 'Thylda'),
          new RangeTableRow(921, 935, 'Ulrike'),
          new RangeTableRow(936, 960, 'Ursula'),
          new RangeTableRow(961, 965, 'Veronica'),
          new RangeTableRow(966, 975, 'Wanda'),
          new RangeTableRow(976, 985, 'Wertha'),
          new RangeTableRow(986, 1000, 'Wilhemina'),
        ])
      },
      professions: new ListTable([
        new ListTableRow('Bäcker'),
        new ListTableRow('Schmidt'),
        new ListTableRow('Brauer'),
        new ListTableRow('Bootmann'),
        new ListTableRow('Baumeister'),
        new ListTableRow('Fleischer'),
        new ListTableRow('Zimmermann'),
        new ListTableRow('Schuster'),
        new ListTableRow('Küfer'),
        new ListTableRow('Graveur'),
        new ListTableRow('Bauer'),
        new ListTableRow('Glaser'),
        new ListTableRow('Jäger'),
        new ListTableRow('Juwelier'),
        new ListTableRow('Handler'),
        new ListTableRow('Hausier'),
        new ListTableRow('Topfer'),
        new ListTableRow('Drucker'),
        new ListTableRow('Schreiber'),
        new ListTableRow('Schiffbauer'),
        new ListTableRow('Maurer'),
        new ListTableRow('Schneider'),
        new ListTableRow('Gerber'),
      ]),
      nicknames: new ListTable([
        new ListTableRow('Nase (Large nose)'),
        new ListTableRow('Narbe (Scar on face)'),
        new ListTableRow('Einauge (One eye)'),
        new ListTableRow('Einarm (One arm)'),
        new ListTableRow('Schön (Attractive face)'),
        new ListTableRow('Grosz (Huge frame)'),
        new ListTableRow('Kahl (Bald)'),
        new ListTableRow('Haarig (Hairy)'),
        new ListTableRow('Bart (Huge beard)'),
        new ListTableRow('Bucker (Stooping)'),
        new ListTableRow('Lang (Very tall)'),
        new ListTableRow('Kurz (Very short)'),
        new ListTableRow('Dunn (Very skinny)'),
        new ListTableRow('Blass (Pale-skinned)'),
        new ListTableRow('Stotter (Stutter)'),
        new ListTableRow('Laut (Loud voice)'),
      ])
    },
    dwarf: {
      forenames: {
        male: new RangeTable([
          new RangeTableRow(1, 9, 'Alaric'),
          new RangeTableRow(10, 18, 'Algrim'),
          new RangeTableRow(19, 27, 'Alrik'),
          new RangeTableRow(28, 37, 'Baragor'),
          new RangeTableRow(38, 45, 'Bardin'),
          new RangeTableRow(46, 53, 'Belegar'),
          new RangeTableRow(54, 61, 'Bel(e)gol'),
          new RangeTableRow(62, 70, 'Borgin'),
          new RangeTableRow(71, 79, 'Borin'),
          new RangeTableRow(80, 88, 'Bradni'),
          new RangeTableRow(89, 98, 'Brogar'),
          new RangeTableRow(99, 107, 'Brokk'),
          new RangeTableRow(108, 115, 'Brond(l)'),
          new RangeTableRow(116, 121, 'Bronn'),
          new RangeTableRow(122, 129, 'Burlok'),
          new RangeTableRow(130, 137, 'Cranneg'),
          new RangeTableRow(138, 145, 'Darbli'),
          new RangeTableRow(146, 153, 'Dargo'),
          new RangeTableRow(154, 161, 'Dern'),
          new RangeTableRow(162, 170, 'Dimrond'),
          new RangeTableRow(171, 179, 'Dimzad'),
          new RangeTableRow(180, 184, 'Dorin'),
          new RangeTableRow(185, 188, 'Drong'),
          new RangeTableRow(189, 200, 'Drumin'),
          new RangeTableRow(201, 209, 'Durak'),
          new RangeTableRow(210, 218, 'Duregar'),
          new RangeTableRow(219, 227, 'Durgin'),
          new RangeTableRow(228, 234, 'Dwinbar'),
          new RangeTableRow(235, 239, 'Elmador'),
          new RangeTableRow(240, 246, 'Enlag'),
          new RangeTableRow(247, 253, 'Fenni'),
          new RangeTableRow(254, 261, 'Fimbur'),
          new RangeTableRow(262, 270, 'Finn'),
          new RangeTableRow(271, 279, 'Furgil'),
          new RangeTableRow(280, 288, 'Garil'),
          new RangeTableRow(289, 300, 'Goddi'),
          new RangeTableRow(301, 309, 'Gomrund'),
          new RangeTableRow(310, 318, 'Gorazin'),
          new RangeTableRow(319, 327, 'Gorim'),
          new RangeTableRow(328, 337, 'Gorm'),
          new RangeTableRow(338, 345, 'Gotrek'),
          new RangeTableRow(346, 353, 'Gottri'),
          new RangeTableRow(354, 361, 'Grim'),
          new RangeTableRow(362, 370, 'Grimli'),
          new RangeTableRow(371, 379, 'Grindol'),
          new RangeTableRow(380, 390, 'Grom'),
          new RangeTableRow(391, 400, 'Grond'),
          new RangeTableRow(401, 409, 'Groth'),
          new RangeTableRow(410, 418, 'Grum'),
          new RangeTableRow(419, 427, 'Grumdin'),
          new RangeTableRow(428, 437, 'Grundi'),
          new RangeTableRow(438, 445, 'Grung'),
          new RangeTableRow(446, 453, 'Grunni'),
          new RangeTableRow(454, 461, 'Guttri'),
          new RangeTableRow(462, 470, 'Haakon'),
          new RangeTableRow(471, 479, 'Hadra'),
          new RangeTableRow(480, 489, 'Harek'),
          new RangeTableRow(490, 499, 'Hargin'),
          new RangeTableRow(500, 507, 'Hargrim'),
          new RangeTableRow(508, 512, 'Harok'),
          new RangeTableRow(513, 518, 'Heganbor'),
          new RangeTableRow(519, 527, 'Hergar'),
          new RangeTableRow(528, 537, 'Hugnir'),
          new RangeTableRow(538, 545, 'Hurgar'),
          new RangeTableRow(546, 553, 'Kadri'),
          new RangeTableRow(554, 561, 'Kadrin'),
          new RangeTableRow(562, 570, 'Kallon'),
          new RangeTableRow(571, 579, 'Kargun'),
          new RangeTableRow(580, 589, 'Katalin'),
          new RangeTableRow(590, 600, 'Kazadar'),
          new RangeTableRow(601, 609, 'Kazgar'),
          new RangeTableRow(610, 618, 'Kazran'),
          new RangeTableRow(619, 627, 'Kazrik'),
          new RangeTableRow(628, 637, 'Ketil'),
          new RangeTableRow(638, 645, 'Kettri'),
          new RangeTableRow(646, 653, 'Kragg'),
          new RangeTableRow(654, 661, 'Krudd'),
          new RangeTableRow(662, 670, 'Kurgan'),
          new RangeTableRow(671, 679, 'Largs'),
          new RangeTableRow(680, 689, 'Logan'),
          new RangeTableRow(690, 700, 'Logazor'),
          new RangeTableRow(701, 707, 'Lunn'),
          new RangeTableRow(708, 718, 'Mendri'),
          new RangeTableRow(719, 727, 'Mordin'),
          new RangeTableRow(728, 737, 'Morek'),
          new RangeTableRow(738, 753, 'Mundri'),
          new RangeTableRow(754, 761, 'Norgrim'),
          new RangeTableRow(762, 768, 'Oldor'),
          new RangeTableRow(769, 775, 'Ragni'),
          new RangeTableRow(776, 784, 'Rogni'),
          new RangeTableRow(785, 790, 'Rorek'),
          new RangeTableRow(791, 800, 'Rungni'),
          new RangeTableRow(801, 812, 'Skag'),
          new RangeTableRow(813, 820, 'Skaldor'),
          new RangeTableRow(821, 830, 'Skalf'),
          new RangeTableRow(831, 838, 'Skalli'),
          new RangeTableRow(839, 844, 'Skorri'),
          new RangeTableRow(845, 851, 'Sindri'),
          new RangeTableRow(852, 860, 'Snorri'),
          new RangeTableRow(861, 866, 'Stromni'),
          new RangeTableRow(867, 874, 'Storri'),
          new RangeTableRow(875, 882, 'Sundrim'),
          new RangeTableRow(883, 890, 'Sven'),
          new RangeTableRow(891, 900, 'Thingrim'),
          new RangeTableRow(901, 909, 'Thori'),
          new RangeTableRow(910, 920, 'Thrund'),
          new RangeTableRow(921, 929, 'Thungni'),
          new RangeTableRow(930, 936, 'Thurgrom'),
          new RangeTableRow(937, 942, 'Thyk'),
          new RangeTableRow(943, 950, 'Ulfar'),
          new RangeTableRow(951, 957, 'Ulther'),
          new RangeTableRow(958, 965, 'Vikram'),
          new RangeTableRow(966, 972, 'Vragni'),
          new RangeTableRow(973, 980, 'Yadri'),
          new RangeTableRow(981, 988, 'Yanni'),
          new RangeTableRow(989, 993, 'Yorri'),
          new RangeTableRow(994, 1000, 'Zamnil'),
        ]),
        female: new RangeTable([
          new RangeTableRow(1, 23, 'Alrika'),
          new RangeTableRow(24, 46, 'Askima'),
          new RangeTableRow(47, 70, 'Astrid'),
          new RangeTableRow(71, 94, 'Berta'),
          new RangeTableRow(95, 117, 'Boria'),
          new RangeTableRow(118, 137, 'Breda'),
          new RangeTableRow(138, 159, 'Brondra'),
          new RangeTableRow(160, 183, 'Derna'),
          new RangeTableRow(184, 200, 'Dorbi'),
          new RangeTableRow(201, 221, 'Duree'),
          new RangeTableRow(222, 242, 'Fenna'),
          new RangeTableRow(243, 263, 'Freda'),
          new RangeTableRow(264, 284, 'Friga'),
          new RangeTableRow(285, 305, 'Gerta'),
          new RangeTableRow(306, 328, 'Gottra'),
          new RangeTableRow(329, 349, 'Grondi'),
          new RangeTableRow(350, 363, 'Grunna'),
          new RangeTableRow(364, 385, 'Harga'),
          new RangeTableRow(386, 405, 'Helga'),
          new RangeTableRow(406, 426, 'Helgar'),
          new RangeTableRow(427, 451, 'Hunni'),
          new RangeTableRow(452, 476, 'Kalea'),
          new RangeTableRow(477, 500, 'Karelia'),
          new RangeTableRow(501, 526, 'Karga'),
          new RangeTableRow(527, 553, 'Karstin'),
          new RangeTableRow(554, 579, 'Katrin'),
          new RangeTableRow(580, 603, 'Kettra'),
          new RangeTableRow(604, 611, 'Lakin'),
          new RangeTableRow(612, 625, 'Lenka'),
          new RangeTableRow(626, 646, 'Magda'),
          new RangeTableRow(647, 667, 'Menni'),
          new RangeTableRow(668, 688, 'Modra'),
          new RangeTableRow(689, 709, 'Morga'),
          new RangeTableRow(710, 730, 'Olka'),
          new RangeTableRow(731, 751, 'Sifna'),
          new RangeTableRow(752, 774, 'Sigrid'),
          new RangeTableRow(775, 797, 'Sigrun'),
          new RangeTableRow(798, 815, 'Skorina'),
          new RangeTableRow(816, 828, 'Solveig'),
          new RangeTableRow(829, 837, 'Sunni'),
          new RangeTableRow(838, 844, 'Tarni'),
          new RangeTableRow(845, 857, 'Tharma'),
          new RangeTableRow(858, 876, 'Thindra'),
          new RangeTableRow(877, 895, 'Thoda'),
          new RangeTableRow(896, 916, 'Throlin'),
          new RangeTableRow(917, 926, 'Trunni'),
          new RangeTableRow(927, 937, 'Ulla'),
          new RangeTableRow(938, 958, 'Vala'),
          new RangeTableRow(959, 979, 'Valma'),
          new RangeTableRow(980, 994, 'Vanyra'),
          new RangeTableRow(995, 1000, 'Zylra'),
        ]),
      }
    },
    elf: {
      prefix: new RangeTable([
        new RangeTableRow(1, 3, 'Aes'),
        new RangeTableRow(4, 5, 'Air'),
        new RangeTableRow(6, 8, 'Al(d)'),
        new RangeTableRow(9, 10, 'Am'),
        new RangeTableRow(11, 12, 'Ang'),
        new RangeTableRow(13, 14, 'Ca(l)'),
        new RangeTableRow(15, 16, 'Car'),
        new RangeTableRow(17, 18, 'Dol'),
        new RangeTableRow(19, 20, 'Edri'),
        new RangeTableRow(21, 22, 'Eldi(r)'),
        new RangeTableRow(23, 24, 'Ell'),
        new RangeTableRow(25, 26, 'Epon'),
        new RangeTableRow(27, 29, 'Err'),
        new RangeTableRow(30, 31, 'Fan'),
        new RangeTableRow(32, 33, 'Far'),
        new RangeTableRow(34, 36, 'Fil'),
        new RangeTableRow(37, 38, 'Gal'),
        new RangeTableRow(39, 40, 'Gil'),
        new RangeTableRow(41, 43, 'Hal'),
        new RangeTableRow(44, 45, 'Har'),
        new RangeTableRow(46, 47, 'Has'),
        new RangeTableRow(48, 49, 'Ilu'),
        new RangeTableRow(50, 51, 'Im(ra)'),
        new RangeTableRow(52, 53, 'Io'),
        new RangeTableRow(54, 55, 'Lar'),
        new RangeTableRow(56, 57, 'Laure(l)'),
        new RangeTableRow(58, 60, 'Lin'),
        new RangeTableRow(61, 63, 'Lor'),
        new RangeTableRow(64, 66, 'Lora(l)'),
        new RangeTableRow(67, 68, 'Mal'),
        new RangeTableRow(69, 70, 'Mar'),
        new RangeTableRow(71, 72, 'Mor'),
        new RangeTableRow(73, 74, 'Orr'),
        new RangeTableRow(75, 77, 'Pel'),
        new RangeTableRow(78, 79, 'Ral'),
        new RangeTableRow(80, 81, 'Shas'),
        new RangeTableRow(82, 84, 'Sir'),
        new RangeTableRow(85, 86, 'Tall(a)'),
        new RangeTableRow(87, 88, 'Ter'),
        new RangeTableRow(89, 90, 'Tor'),
        new RangeTableRow(91, 92, 'Ullia(l)'),
        new RangeTableRow(93, 94, 'Urdi(th)'),
        new RangeTableRow(95, 96, 'Val'),
        new RangeTableRow(97, 98, 'Vir'),
        new RangeTableRow(99, 100, 'Yav(a)'),
      ]),
      suffix: new RangeTable([
        new RangeTableRow(1, 3, 'alion'),
        new RangeTableRow(4, 5, 'andar(a)'),
        new RangeTableRow(6, 8, 'andil(e)'),
        new RangeTableRow(9, 10, 'andilas'),
        new RangeTableRow(11, 12, 'andiril'),
        new RangeTableRow(13, 14, 'ane'),
        new RangeTableRow(15, 16, 'anel'),
        new RangeTableRow(17, 18, 'arel'),
        new RangeTableRow(19, 20, 'err'),
        new RangeTableRow(21, 22, 'avandrel'),
        new RangeTableRow(23, 24, 'core(l)'),
        new RangeTableRow(25, 26, 'coran(na)'),
        new RangeTableRow(27, 29, 'dil'),
        new RangeTableRow(30, 31, 'drigar'),
        new RangeTableRow(32, 33, 'elliion'),
        new RangeTableRow(34, 36, 'endil'),
        new RangeTableRow(37, 38, 'fan(a)'),
        new RangeTableRow(39, 40, 'far'),
        new RangeTableRow(41, 43, 'galiel'),
        new RangeTableRow(44, 45, 'gran(a)'),
        new RangeTableRow(46, 47, 'hal(i)'),
        new RangeTableRow(48, 49, 'hil(e)'),
        new RangeTableRow(50, 51, 'holen'),
        new RangeTableRow(52, 53, 'huir'),
        new RangeTableRow(54, 55, 'ia(n)'),
        new RangeTableRow(56, 57, 'ina(l)'),
        new RangeTableRow(58, 60, 'inde(l)'),
        new RangeTableRow(61, 63, 'irllan'),
        new RangeTableRow(64, 66, 'lad'),
        new RangeTableRow(67, 68, 'liana(n)'),
        new RangeTableRow(69, 70, 'lor'),
        new RangeTableRow(71, 72, 'mal'),
        new RangeTableRow(73, 74, 'maris'),
        new RangeTableRow(75, 77, 'mir'),
        new RangeTableRow(78, 79, 'mor'),
        new RangeTableRow(80, 81, 'nor'),
        new RangeTableRow(82, 84, 'oth'),
        new RangeTableRow(85, 86, 'ras'),
        new RangeTableRow(87, 88, 'riel'),
        new RangeTableRow(89, 90, 'rond'),
        new RangeTableRow(91, 92, 'thin'),
        new RangeTableRow(93, 94, 'thol'),
        new RangeTableRow(95, 96, 'uviel'),
        new RangeTableRow(97, 98, 'wen'),
        new RangeTableRow(99, 100, 'wine'),
      ]),
    }
  },
  settlements: {
    human: {
      insideEmpire: new RangeTable([
        new RangeTableRow(1, 25, 'Altdorf', 'Urban'),
        new RangeTableRow(26, 50, 'Altdorf', 'Rural', new RangeTable([
          new RangeTableRow(1, 6, 'Teufelfeuer'),
          new RangeTableRow(7, 11, 'Rechtlich'),
          new RangeTableRow(12, 17, 'Heiligen'),
          new RangeTableRow(18, 23, 'Gluckshalt'),
          new RangeTableRow(24, 29, 'Hartsklein'),
          new RangeTableRow(30, 35, 'Schlafebild'),
          new RangeTableRow(36, 41, 'Hochloff'),
          new RangeTableRow(42, 47, 'Rottefach'),
          new RangeTableRow(48, 53, 'Walfen'),
          new RangeTableRow(54, 59, 'Furtild'),
          new RangeTableRow(60, 65, 'Grossbad'),
          new RangeTableRow(66, 71, 'Bundesmarkt'),
          new RangeTableRow(72, 77, 'Brauenwurt'),
          new RangeTableRow(78, 83, 'Dorchen'),
          new RangeTableRow(84, 89, 'Geldrecht'),
          new RangeTableRow(90, 95, 'Kaldach'),
          new RangeTableRow(96, 100, 'Autler'),
        ])),
        new RangeTableRow(51, 54, 'Grunburg', '', new RangeTable([
          new RangeTableRow(1, 50, 'Grunburg'),
          new RangeTableRow(51, 62, 'Aussen'),
          new RangeTableRow(63, 70, 'Silberwurt'),
          new RangeTableRow(71, 85, 'Kleindorf'),
          new RangeTableRow(86, 100, 'Hornlach'),
        ])),
        new RangeTableRow(55, 59, 'Auerswald', '', new RangeTable([
          new RangeTableRow(1, 50, 'Auerswald'),
          new RangeTableRow(51, 60, 'Dresschler'),
          new RangeTableRow(61, 70, 'Gladisch'),
          new RangeTableRow(71, 80, 'Koch'),
          new RangeTableRow(81, 90, 'Sprinthof'),
          new RangeTableRow(91, 100, 'Steche'),
        ])),
        new RangeTableRow(60, 63, 'Delberz', '', new RangeTable([
          new RangeTableRow(1, 55, 'Delberz'),
          new RangeTableRow(56, 70, 'Mittelmund'),
          new RangeTableRow(71, 85, 'Schwarzmarkt'),
          new RangeTableRow(86, 100, 'Turmgever'),
        ])),
        new RangeTableRow(64, 67, 'Dunkelburg', '', new RangeTable([
          new RangeTableRow(11, 58, 'Dunkelburg'),
          new RangeTableRow(59, 65, 'Barfsheim'),
          new RangeTableRow(66, 72, 'Gemusenbad'),
          new RangeTableRow(73, 78, 'Harke'),
          new RangeTableRow(79, 85, 'Ruhfurt'),
          new RangeTableRow(86, 92, 'Schattental'),
          new RangeTableRow(93, 100, 'Steindorf'),
        ])),
        new RangeTableRow(68, 71, 'Carroburg', '', new RangeTable([
          new RangeTableRow(1, 50, 'Carroburg'),
          new RangeTableRow(51, 60, 'Anseldorf'),
          new RangeTableRow(61, 70, 'Dunkelbild'),
          new RangeTableRow(71, 80, 'Punzen'),
          new RangeTableRow(81, 90, 'Schattenlas'),
          new RangeTableRow(91, 100, 'Weidemarkt'),
        ])),
        new RangeTableRow(72, 74, 'Schoppendorf', '', new RangeTable([
          new RangeTableRow(1, 50, 'Schoppendorf'),
          new RangeTableRow(51, 60, 'Brasthof'),
          new RangeTableRow(61, 70, 'Esselfurt'),
          new RangeTableRow(71, 80, 'Priestlicheim'),
          new RangeTableRow(81, 90, 'Ripdorf'),
          new RangeTableRow(91, 100, 'Zeder'),
        ])),
        new RangeTableRow(75, 77, 'Stimmigen', '', new RangeTable([
          new RangeTableRow(1, 60, 'Stimmigen'),
          new RangeTableRow(61, 70, 'Merretheim'),
          new RangeTableRow(71, 80, 'Misthausen'),
          new RangeTableRow(81, 90, 'Naffdorf'),
          new RangeTableRow(91, 100, 'Pfeiffer'),
        ])),
        new RangeTableRow(78, 78, 'Blutroch'),
        new RangeTableRow(79, 79, 'Weissbruck'),
        new RangeTableRow(80, 80, 'Bogenhafen', '', new RangeTable([
          new RangeTableRow(1, 50, 'Bogenhafen'),
          new RangeTableRow(51, 62, 'Finsterbad'),
          new RangeTableRow(63, 75, 'Ardlich'),
          new RangeTableRow(76, 88, 'Herzhald'),
          new RangeTableRow(89, 100, 'Grubevon'),
        ])),
        new RangeTableRow(81, 83, 'Kemperbad', '', new RangeTable([
          new RangeTableRow(1, 50, 'Kemperbad'),
          new RangeTableRow(51, 60, 'Berghof'),
          new RangeTableRow(61, 70, 'Brandenburg'),
          new RangeTableRow(71, 80, 'Jungbach'),
          new RangeTableRow(81, 90, 'Ostwald'),
          new RangeTableRow(91, 100, 'Stockhausen'),
        ])),
        new RangeTableRow(84, 86, 'Ubersreik', '', new RangeTable([
          new RangeTableRow(1, 50, 'Ubersreik'),
          new RangeTableRow(51, 57, 'Buchedorf'),
          new RangeTableRow(58, 64, 'Flussberg'),
          new RangeTableRow(65, 71, 'Geissbach'),
          new RangeTableRow(72, 88, 'Halheim'),
          new RangeTableRow(89, 95, 'Messingen'),
          new RangeTableRow(96, 100, 'Wurfel'),
        ])),
        new RangeTableRow(87, 88, 'Marienburg'),
        new RangeTableRow(89, 90, 'Nuln', '', new RangeTable([
          new RangeTableRow(1, 60, 'Nuln'),
          new RangeTableRow(61, 80, 'Wissenburg'),
          new RangeTableRow(81, 100, 'Pfeildorf'),
        ])),
        new RangeTableRow(91, 91, 'Averheim'),
        new RangeTableRow(92, 92, 'Streissen'),
        new RangeTableRow(93, 93, 'Wurtbad'),
        new RangeTableRow(94, 94, 'Talabheim'),
        new RangeTableRow(95, 95, 'Middenheim', '', new RangeTable([
          new RangeTableRow(1, 60, 'Middenheim'),
          new RangeTableRow(61, 80, 'Bergsburg'),
          new RangeTableRow(81, 100, 'Salzenmund')
        ])),
        new RangeTableRow(96, 100, 'Outside the Empire'),
      ]),
      outsideEmpire: new RangeTable([
        new RangeTableRow(1, 25, 'Bretonnia', '', new RangeTable([
          new RangeTableRow(1, 12, "L'Anguille"),
          new RangeTableRow(13, 24, 'Bordeleaux'),
          new RangeTableRow(25, 36, 'Brionne'),
          new RangeTableRow(37, 48, 'Couronne'),
          new RangeTableRow(49, 62, 'Gisoreux'),
          new RangeTableRow(63, 74, 'Mousillon'),
          new RangeTableRow(75, 88, 'Parravon'),
          new RangeTableRow(89, 100, 'Quenelles'),
        ])),
        new RangeTableRow(26, 45, 'Kislev', '', new RangeTable([
          new RangeTableRow(1, 25, 'Erengrad'),
          new RangeTableRow(26, 75, 'Kislev'),
          new RangeTableRow(76, 100, 'Praag'),
        ])),
        new RangeTableRow(46, 70, 'Estalia', '', new RangeTable([
          new RangeTableRow(1, 50, 'Bilbali'),
          new RangeTableRow(51, 100, 'Magritta'),
        ])),
        new RangeTableRow(71, 90, 'Tilea', '', new RangeTable([
          new RangeTableRow(1, 20, 'Luccini'),
          new RangeTableRow(21, 40, 'Miragliano'),
          new RangeTableRow(41, 60, 'Remas'),
          new RangeTableRow(61, 80, 'Sartosa'),
          new RangeTableRow(81, 100, 'Tobaro'),
        ])),
        new RangeTableRow(91, 98, 'Border Princes'),
        new RangeTableRow(99, 100, 'Outworlder', '', new RangeTable([
          new RangeTableRow(1, 20, 'Norsca'),
          new RangeTableRow(21, 45, 'Araby'),
          new RangeTableRow(46, 70, 'Albion'),
          new RangeTableRow(71, 85, 'Southlands'),
          new RangeTableRow(86, 100, 'E. Steppes'),
        ]))
      ])
    }
  }
}