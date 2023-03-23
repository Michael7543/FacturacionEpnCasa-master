import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TipoConceptoComponent } from './TipoConcepto/TipoConcepto.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TipoConceptoComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
   
  ]
})
export class PagesModule { }
