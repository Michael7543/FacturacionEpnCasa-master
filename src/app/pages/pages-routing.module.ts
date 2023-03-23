import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoConceptoComponent } from './TipoConcepto/TipoConcepto.component';

const routes: Routes = [

  {path:'tipoconcepto', component: TipoConceptoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class PagesRoutingModule {}
