import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';

import { CashInService } from 'src/app/services/cash-in.service';
import { OperacionService } from 'src/app/services/model/operacion.service';

@Component({
  selector: 'app-in-confirm',
  templateUrl: './in-confirm.component.html',
  styleUrls: ['./in-confirm.component.scss']
})
export class InConfirmComponent implements OnInit {
 
  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;
  

  constructor(
    private service: CashInService,
    private operacionService: OperacionService) { 
      this.operacion = this.service.operacion;

  }
  ngOnInit(): void {
  }

 
  crearOperacion() {
    this.service.nuevaOperacion(this.service.operacion).subscribe(data => {
      console.log(data);
      alert("operacion creadaexitosamente")
    });

  }

  changeOption(option: string) {
    if (option === 'approved') {
      this.crearOperacion()
    } else {
      this.service.operacion = new Operacion;
console.log(option)
    }

    this.valueResponse.emit(option)
  }

}
