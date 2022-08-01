import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Descriptor } from 'src/app/models/data/mythic/mythic-npc-model';

@Component({
  selector: 'app-descriptor',
  templateUrl: './descriptor.component.html',
  styleUrls: ['./descriptor.component.scss']
})
export class DescriptorComponent implements OnInit {
  @Input() name!: string;
  @Input() descriptor!: Descriptor;
  
  @Output() onDescriptorUpdated: EventEmitter<Descriptor> = new EventEmitter();
  @Output() onDescriptorRolled: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  npcUpdated() {
    this.onDescriptorUpdated.emit(this.descriptor);
  }

  roll() {
    this.onDescriptorRolled.emit();
  }
}
