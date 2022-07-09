import { Component, Input, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/dice/dice-util';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title: string = '';

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void { }

  // addList() {
  //   const listName = prompt('List name:');
  //   if (listName) {
  //     this.dataService.data.addList(listName);
  //   }
  // }
  // removeList(listName: string) {
  //   if (confirm(`Are you sure you want to remove List '${listName}'?`)) {
  //     this.dataService.data.removeList(listName);
  //   }
  // }
  // addToList(listName: string) {
  //   const value = prompt('Value:');
  //   if (value) {
  //     this.dataService.data.addToList(listName, value);
  //   }
  // }
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
  // rollList(listName: string) {
  //   const list = this.dataService.data.lists.filter(x => x.name === listName)[0];
  //   const dice = DiceUtil.rollDiceFormula(`1d${list.values.length}`);
  //   const result = list.values[dice.sum - 1];
  //   if (result) {
  //     this.dataService.data.log.add(result, `[List Roll: ${listName}] D: ${dice.sum}`);
  //   }
  // }
}
