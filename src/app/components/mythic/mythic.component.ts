import { Component, OnInit } from '@angular/core';
import { MythicNpcModel } from 'src/app/models/data/mythic/mythic-npc-model';
import ListItem from 'src/app/models/list-item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mythic',
  templateUrl: './mythic.component.html',
  styleUrls: ['./mythic.component.scss']
})
export class MythicComponent implements OnInit {
  selectedNpc: MythicNpcModel  = new MythicNpcModel('', '');

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
}
