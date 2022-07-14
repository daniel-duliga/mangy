import { Component, OnInit } from '@angular/core';
import { MythicNpcModel } from 'src/app/models/data/mythic/mythic-npc-model';
import ListItem from 'src/app/models/list-item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-npcs-list',
  templateUrl: './npcs-list.component.html',
  styleUrls: ['./npcs-list.component.scss']
})
export class NpcsListComponent implements OnInit {
  selectedItem: MythicNpcModel | null = null;

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
}
