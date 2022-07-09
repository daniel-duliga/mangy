import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiceUtil } from 'src/app/dice/dice-util';
import { DataService } from 'src/app/services/data.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title: string = '';
  @Input() items: string[] = [];

  @Output() onItemsChanged: EventEmitter<string[]> = new EventEmitter();

  selectedItemsIndexes: number[] = [];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void { }

  addItem() {
    const value = prompt('Value:');
    if (value) {
      this.items.push(value);
      this.onItemsChanged.emit(this.items);
    }
  }

  renameItems() {
    console.log(this.selectedItemsIndexes);
  }

  removeItems() {
    const placeholder = uuid();
    for (const index of this.selectedItemsIndexes) {
      this.items.splice(index, 1, placeholder);
    }
    this.items = this.items.filter(x => x !== placeholder);
    this.onItemsChanged.emit(this.items);
  }
  
  // removeFromList(listName: string) {
  //   const list = this.dataService.data.lists.filter(x => x.name === listName)[0];
    
  //   if (list.values.length === 0) {
  //     confirm('List is empty!');
  //     return;
  //   }
    
  //   let message = 'List content:\n\n';
  //   for (let index = 0; index < list.values.length; index++) {
  //     const value = list.values[index];
  //     message = message.concat(`${index + 1}. ${value}\n`);
  //   }
  //   message = message.concat('\nNumber of entry to delete:');
    
  //   const value = prompt(message);
  //   if (value && !isNaN(+value)) {
  //     this.dataService.data.removeFromList(listName, list.values[+value - 1]);
  //   }
  // }
  
  // rollOnList(listName: string) {
  //   const list = this.dataService.data.lists.filter(x => x.name === listName)[0];
  //   const dice = DiceUtil.rollDiceFormula(`1d${list.values.length}`);
  //   const result = list.values[dice.sum - 1];
  //   if (result) {
  //     this.dataService.data.log.add(result, `[List Roll: ${listName}] D: ${dice.sum}`);
  //   }
  // }
}
