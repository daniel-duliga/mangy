import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MythicComponent } from './components/mythic/mythic.component';
import { ConjectureComponent } from './components/conjecture/conjecture.component';
import { WfrpComponent } from './components/wfrp/wfrp.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "mythic",
    pathMatch: "full"
  },
  {
    path: "mythic",
    component: MythicComponent
  },
  {
    path: "conjecture",
    component: ConjectureComponent,
  },
  {
    path: "wfrp",
    component: WfrpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
