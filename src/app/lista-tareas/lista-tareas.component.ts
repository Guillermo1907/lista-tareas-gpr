import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../tarea.model';
import { ItemTareaComponent } from '../item-tarea/item-tarea.component';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
  standalone: true,
  imports: [CommonModule, ItemTareaComponent]
})
export class ListaTareasComponent {
  @Input() tareas: Tarea[] = [];
  @Output() eliminarTarea: EventEmitter<number> = new EventEmitter();
  @Output() alternarCompletado: EventEmitter<Tarea> = new EventEmitter();

  eliminar(id: number): void {
    this.eliminarTarea.emit(id);
  }

  alternar(tarea: Tarea): void {
    this.alternarCompletado.emit(tarea);
  }
}
