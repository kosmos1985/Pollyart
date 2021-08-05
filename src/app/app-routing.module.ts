import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustodyComponent } from './components/faq/asked/custody/custody.component';
import { DiaryComponent } from './components/faq/asked/diary/diary.component';
import { DivorceComponent } from './components/faq/asked/divorce/divorce.component';
import { DivorcesComponent } from './components/faq/asked/divorces/divorces.component';
import { IncorporateComponent } from './components/faq/asked/incorporate/incorporate.component';
import { NameComponent } from './components/faq/asked/name/name.component';

const routes: Routes = [
  { path: 'divorce', component: DivorceComponent},
  { path: 'custody', component: CustodyComponent  },
  { path: 'diary', component: DiaryComponent },
  { path: 'divorces', component: DivorcesComponent },
  { path: 'name', component: NameComponent },
  { path: 'incorporate', component: IncorporateComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'not-found', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
