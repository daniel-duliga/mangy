import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { MythicNpcModel } from 'src/app/models/data/mythic/mythic-npc-model';
import ListItem from 'src/app/models/list-item';
import { DataService } from 'src/app/services/data.service';
import MeaningTables from '../meaning-tables';

@Component({
  selector: 'app-npcs-list',
  templateUrl: './npcs-list.component.html',
  styleUrls: ['./npcs-list.component.scss']
})
export class NpcsListComponent implements OnInit {
  selectedItem: MythicNpcModel | null = null;
  disposition: number = 0;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void { }

  npcsChanged(items: ListItem[]) {
    let npcs = this.dataService.data.mythic.npcs;

    for (const item of items) {
      const index = npcs.findIndex(x => x.id === item.id);
      if (index === -1) {
        // add new items
        npcs.push(new MythicNpcModel(item.id, item.name));
      } else {
        // update existing items
        npcs[index].name = item.name;
      }
    }
    // remove deleted items
    npcs = npcs.filter(x => items.findIndex(y => y.id === x.id) !== -1);

    this.dataService.data.mythic.npcs = npcs;
  }

  selectedItemChanged(item: ListItem) {
    const index = this.dataService.data.mythic.npcs.findIndex(x => x.id === item.id);
    if (index !== -1) {
      this.selectedItem = this.dataService.data.mythic.npcs[index];
    }
  }

  selectedItemUpdated() {
    if (!this.selectedItem) { return; }

    const npcs = this.dataService.data.mythic.npcs;

    const index = this.dataService.data.mythic.npcs.findIndex(x => x.id === this.selectedItem?.id);
    if (index !== -1) {
      npcs[index] = this.selectedItem;
    }

    this.dataService.data.mythic.npcs = npcs;
  }

  rollIdentity() {
    if (this.selectedItem) {
      const descriptor1 = MeaningTables.Action1.roll(DiceUtil.rollDiceFormula('1d100').sum);
      const descriptor2 = MeaningTables.Action2.roll(DiceUtil.rollDiceFormula('1d100').sum);
      this.selectedItem.identity.value = `${descriptor1.value} ${descriptor2.value}`;
      this.persistSelectedItem();
    }
  }

  rollPersonality() {
    if (this.selectedItem) {
      const descriptor1 = MeaningTables.Descriptor1.roll(DiceUtil.rollDiceFormula('1d100').sum);
      const descriptor2 = MeaningTables.Descriptor2.roll(DiceUtil.rollDiceFormula('1d100').sum);
      this.selectedItem.personality.value = `${descriptor1.value} ${descriptor2.value}`;
      this.persistSelectedItem();
    }
  }

  rollActivity() {
    if (this.selectedItem) {
      const descriptor1 = MeaningTables.Action1.roll(DiceUtil.rollDiceFormula('1d100').sum);
      const descriptor2 = MeaningTables.Action2.roll(DiceUtil.rollDiceFormula('1d100').sum);
      this.selectedItem.activity.value = `${descriptor1.value} ${descriptor2.value}`;
      this.persistSelectedItem();
    }
  }

  rollDisposition() {
  }

  behaviorCheck() {
    this.disposition = DiceUtil.rollDiceFormula('1d10').sum + DiceUtil.rollDiceFormula('1d10').sum;
  }
  
  private persistSelectedItem() {
    if (this.selectedItem) {
      const npcs = this.dataService.data.mythic.npcs;
      const index = npcs.findIndex(x => x.id === this.selectedItem?.id);
      if (index !== -1) {
        npcs[index] = this.selectedItem;
      }
      this.dataService.data.mythic.npcs = npcs;
    }
  }
}
