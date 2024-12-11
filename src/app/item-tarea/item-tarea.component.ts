import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ItemTareaComponent {
  @Input() tarea!: Tarea;
  @Output() eliminarTarea: EventEmitter<number> = new EventEmitter();
  @Output() alternarCompletado: EventEmitter<Tarea> = new EventEmitter();

  eliminar() {
    this.eliminarTarea.emit(this.tarea.id);
  }

  alternar() {
    this.tarea.completado = !this.tarea.completado;
    this.alternarCompletado.emit(this.tarea);
  }
}
