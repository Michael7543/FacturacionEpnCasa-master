import { Component, OnInit } from '@angular/core';
import { TipoConcepto } from 'src/app/model/TipoConcepto';
import { TipoConceptoService } from 'src/app/service/TipoConcepto.service';

@Component({
  selector: 'app-TipoConcepto',
  templateUrl: './TipoConcepto.component.html',
  styleUrls: ['./TipoConcepto.component.css']
})
export class TipoConceptoComponent implements OnInit {



  concepto: TipoConcepto[] = [];
  

  constructor(private tipoconceptoService: TipoConceptoService) {}

  ngOnInit(): void {
   
    this.getTipoConcepto();
        
  }



   getTipoConcepto(){
    this.tipoconceptoService.getAll().subscribe(response=>{
      this.concepto = response;
      console.log(this.concepto)
    })
  } 

 

 
  

  

  getEventValue($event:any) :string {
    return $event.target.value;
  }

}
