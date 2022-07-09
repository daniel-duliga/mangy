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
import { ListsComponent } from './components/mythic/lists/lists.component';
import { GeneralComponent } from './components/general/general.component';

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
    ListsComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
