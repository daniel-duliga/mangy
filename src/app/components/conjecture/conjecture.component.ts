import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { ListTable, ListTableRow } from 'src/app/features/tables/list-table';
import { RangeTable, RangeTableRow } from 'src/app/features/tables/range-table';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-conjecture',
  templateUrl: './conjecture.component.html',
  styleUrls: ['./conjecture.component.scss']
})
export class ConjectureComponent implements OnInit {
    constructor() {}

    ngOnInit(): void { }
}