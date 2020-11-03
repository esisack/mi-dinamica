import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { CashInService } from 'src/app/services/cash-in.service';

@Component({
  selector: 'app-in-show',
  templateUrl: './in-show.component.html',
  styleUrls: ['./in-show.component.scss']
})
export class InShowComponent implements OnInit {
 
  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;
  monto: number = 0;
  

  constructor(
    private service: CashInService) { 
      this.operacion = this.service.operacion;
      this.monto = this.operacion.monto

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
    this.valueResponse.emit(option)
  }
}
