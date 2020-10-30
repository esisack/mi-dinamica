import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { CashOutService } from 'src/app/services/cash-out.service';

@Component({
  selector: 'app-out-confirm',
  templateUrl: './out-confirm.component.html',
  styleUrls: ['./out-confirm.component.scss']
})
export class OutConfirmComponent implements OnInit {
  
  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;
  
  constructor(private service: CashOutService) {
    this.operacion = service.operacion;
    console.log(this.operacion)

   }

  ngOnInit(): void {
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

  crearOperacion() {
    this.service.nuevaOperacion(this.operacion).subscribe(data => {
      alert("operacion creada")
    });
  }

}
