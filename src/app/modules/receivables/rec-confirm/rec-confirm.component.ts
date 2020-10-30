import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { ReceivablesService } from 'src/app/services/receivables.service';
import { OperacionService } from "src/app/services/model/operacion.service";

@Component({
  selector: 'app-rec-confirm',
  templateUrl: './rec-confirm.component.html',
  styleUrls: ['./rec-confirm.component.scss']
})
export class RecConfirmComponent implements OnInit {
 
  @Input() option:string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  id: number = parseInt(sessionStorage.getItem('userId'));
  operacion: Operacion;
  
  constructor(
    public service: ReceivablesService,
    private operacionService: OperacionService) {

   }

  ngOnInit(): void {
  }

  changeOption(option: string) {
    this.option = option;
    this.valueResponse.emit(this.option)
  }

  crearOperacion() {
    console.log('pasando por operacion')
    this.operacionService.create(this.service.operacion).subscribe(data => {
      console.log(data);
      alert("operacion creada")
    });
    console.log('saliendo operacion')
  }
}
