import { Component, OnInit } from "@angular/core";
import { DiceUtil } from "src/app/features/dice/dice-util";
import { DataService } from "src/app/services/data.service";
import { ListTable, ListTableRow } from "src/app/features/tables/list-table";
import { RangeTable, RangeTableRow } from "src/app/features/tables/range-table";
import { DetailCheck } from "./tables";

@Component({
  selector: "app-detail-check",
  templateUrl: "./detail-check.component.html",
  styleUrls: ["./detail-check.component.scss"]
})
export class DetailCheckComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void { }

  detailCheck() {
    const die1 = DiceUtil.rollDiceFormula("1d10");
    const die2 = DiceUtil.rollDiceFormula("1d10");
    let dieResult = die1.sum + die2.sum;

    let modifier = 0;
    if (this.dataService.data.mythic.chaosFactor === 3) {
      modifier = 2;
    } else if (this.dataService.data.mythic.chaosFactor === 6) {
      modifier = -2;
    }
    dieResult += modifier;
    const result = DetailCheck.roll(dieResult);
    this.dataService.data.log.add(
      result.value,
      `[Detail Check] D: ${die1.sum}, ${die2.sum}, MOD: ${modifier}\u000d\u000d${result.notes}`
    );
  }
}