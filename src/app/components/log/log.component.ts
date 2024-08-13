import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('logContent') logContent!: ElementRef;

  customLog = '';
  subscriptions: Subscription[] = [];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.dataService.data.log.onChanged.subscribe(_ => this.scrollToBottom()));
  }
  
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  rollDice(formula: string) {
    this.customLog = formula;
    this.log();
  }

  log() {
    if (this.customLog.startsWith('/roll')) {
      const formula = this.customLog.replace('/roll ', '');
      const dice = DiceUtil.rollDice(formula);
      this.dataService.data.log.add(dice.sum.toString(), dice.details);
    } else {
      this.dataService.data.log.add(this.customLog);
    }
    this.customLog = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.logContent.nativeElement.scrollTo(0, this.logContent.nativeElement.scrollHeight);
    }, 0);
  }
}
