import { Component, OnInit } from '@angular/core';
import MythicNpcModel from 'src/app/models/mythic/mythic-npc-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-npcs-list',
  templateUrl: './npcs-list.component.html',
  styleUrls: ['./npcs-list.component.scss']
})
export class NpcsListComponent implements OnInit {
  public npcNames: string[] = [];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.npcNames = this.dataService.data.mythic.npcs.map(x => x.name);
  }

  npcNamesChanged(newNpcNames: string[]) {
    // delete missing entries
    const npcs: MythicNpcModel[] = this.dataService.data.mythic.npcs.filter(x => newNpcNames.includes(x.name));
    // add new entries
    for (const npcName of newNpcNames) {
      if (npcs.findIndex(x => x.name === npcName) === -1) {
        npcs.push(new MythicNpcModel(npcName));
      }
    }
    // set npcs
    this.dataService.data.mythic.npcs = npcs;
  }
}
