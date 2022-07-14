import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { DataService } from 'src/app/services/data.service';
import { v4 as uuid } from 'uuid';
import ListItem from '../../../models/list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title: string = '';
  @Input() items: ListItem[] = [];

  @Output() onItemsChanged: EventEmitter<ListItem[]> = new EventEmitter();
  @Output() onSelectedItemChanged: EventEmitter<ListItem> = new EventEmitter();

  selectedItemIds: string[] = [];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void { }

  ngModelChange() {
    if (this.selectedItemIds.length > 0) {
      const index = this.items.findIndex(x => x.id === this.selectedItemIds[0]);
      if (index !== -1) {
        this.onSelectedItemChanged.emit(this.items[index]);
      }
    }
  }

  addItem() {
    const value = prompt('Name:');
    if (value) {
      this.items.push(new ListItem(uuid(), value));
      this.onItemsChanged.emit(this.items);
    }
  }

  removeItems() {
    this.items = this.items.filter(x => !this.selectedItemIds.includes(x.id));
    this.onItemsChanged.emit(this.items);
  }

  renameItems() {
    for (const id of this.selectedItemIds) {
      const index = this.items.findIndex(x => x.id === id);
      if (index !== -1) {
        const item = this.items[index];
        const value = prompt('New name:', item.name);
        if (value) {
          this.items[index].name = value;
        }
      }
    }
    this.onItemsChanged.emit(this.items);
  }

  roll() {
    const dice = DiceUtil.rollDiceFormula(`1d${this.items.length}`);
    const result = this.items[dice.sum - 1];
    if (result) {
      this.dataService.data.log.add(result.name, `[List Roll: ${this.title}] D: ${dice.sum}`);
    }
  }
}