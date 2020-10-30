import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { AdvancesService } from 'src/app/services/advances.service';

@Component({
  selector: 'app-advance-confirm',
  templateUrl: './advance-confirm.component.html',
  styleUrls: ['./advance-confirm.component.scss']
})
export class AdvanceConfirmComponent implements OnInit {

 
  @Input() option:string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;
  
  constructor(private service: AdvancesService) {  }

  ngOnInit(): void {
  }

  changeOption(option: string) {
    this.option = option;
    this.valueResponse.emit(this.option)
  }

  crearOperacion() {
    console.log('pasando por operacion')
    this.service.nuevaOperacion(this.operacion).subscribe(data => {
      console.log(data);
      alert("operacion creada")
    });
    console.log('saliendo operacion')

  }

}