import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaosFactorComponent } from './components/mythic/chaos-factor/chaos-factor.component';
import { MythicComponent } from './components/mythic/mythic.component';
import { MeaningTablesComponent } from './components/mythic/meaning-tables/meaning-tables.component';
import { FateCheckComponent } from './components/mythic/fate-check/fate-check.component';
import { DetailCheckComponent } from './components/mythic/detail-check/detail-check.component';
import { EventCheckComponent } from './components/mythic/event-check/event-check.component';
import { LogComponent } from './components/log/log.component';
import { ListComponent } from './components/mythic/list/list.component';
import { GeneralComponent } from './components/general/general.component';
import { BehaviorCheckComponent } from './components/mythic/behavior-check/behavior-check.component';
import { DescriptorComponent } from './components/mythic/behavior-check/descriptor/descriptor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ChaosFactorComponent,
    MythicComponent,
    MeaningTablesComponent,
    FateCheckComponent,
    DetailCheckComponent,
    EventCheckComponent,
    LogComponent,
    ListComponent,
    GeneralComponent,
    BehaviorCheckComponent,
    DescriptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
