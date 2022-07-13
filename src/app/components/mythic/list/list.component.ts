import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
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
    const value = prompt('Name:');
    if (value) {
      this.items.push(value);
      this.onItemsChanged.emit(this.items);
    }
  }

  removeItems() {
    const placeholder = uuid();
    for (const index of this.selectedItemsIndexes) {
      this.items.splice(index, 1, placeholder);
    }
    this.items = this.items.filter(x => x !== placeholder);
    this.onItemsChanged.emit(this.items);
  }
  
  renameItems() {
    for (const index of this.selectedItemsIndexes) {
      const value = prompt('New name:', this.items[index]);
      if (value) {
        this.items.splice(index, 1, value);
      }
    }
    this.onItemsChanged.emit(this.items);
  }

  roll() {
    const dice = DiceUtil.rollDiceFormula(`1d${this.items.length}`);
    const result = this.items[dice.sum - 1];
    if (result) {
      this.dataService.data.log.add(result, `[List Roll: ${this.title}] D: ${dice.sum}`);
    }
  }
}