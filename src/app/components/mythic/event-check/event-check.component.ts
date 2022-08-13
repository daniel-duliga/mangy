import { Component, OnInit } from '@angular/core';
import { DiceUtil } from 'src/app/features/dice/dice-util';
import { StorageService } from 'src/app/services/storage.service';
import { 
  EventFocusActionAdventure, 
  EventFocusEpic, 
  EventFocusHorror, 
  EventFocusMystery, 
  EventFocusPersonal, 
  EventFocusSocial,
  EventFocusStandard
} from './tables';

@Component({
  selector: 'app-event-check',
  templateUrl: './event-check.component.html',
  styleUrls: ['./event-check.component.scss']
})
export class EventCheckComponent implements OnInit {
  constructor(
    private dataService: StorageService
  ) { }

  ngOnInit(): void { }

  eventCheckStandard() {
    const result = EventFocusStandard.roll();
    this.addToLog(result.value, "Standard", result.notes);
  }
  eventCheckHorror() {
    const result = EventFocusHorror.roll();
    this.addToLog(result.value, "Horror", result.notes);
  }
  eventCheckActionAdventure() {
    const result = EventFocusActionAdventure.roll();
    this.addToLog(result.value, "Action Adventure", result.notes);
  }
  eventCheckMystery() {
    const result = EventFocusMystery.roll();
    this.addToLog(result.value, "Mystery", result.notes);
  }
  eventCheckSocial() {
    const result = EventFocusSocial.roll();
    this.addToLog(result.value, "Social", result.notes);
  }
  eventCheckPersonal() {
    const result = EventFocusPersonal.roll();
    this.addToLog(result.value, "Personal", result.notes);
  }
  eventCheckEpic() {
    const result = EventFocusEpic.roll();
    this.addToLog(result.value, "Epic", result.notes);
  }
  addToLog(value: string, check: string, notes: string) {
    this.dataService.data.log.add(value, `[Event Check: ${check}] ${notes}`);
  }
}