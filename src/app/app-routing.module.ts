import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { TipoConceptoComponent } from './pages/TipoConcepto/TipoConcepto.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'concepto',loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: '**', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
