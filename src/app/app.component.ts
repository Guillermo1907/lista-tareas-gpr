import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TareaService } from './tarea.service';
import { Tarea } from './tarea.model';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule, ListaTareasComponent]
})
export class AppComponent implements OnInit {
  nuevaTarea: string = '';
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareaService.obtenerTareas().subscribe(tareas => this.tareas = tareas);
  }

  agregarTarea(): void {
    if (this.nuevaTarea.trim() !== '') {
      const nuevaTarea: Tarea = { id: Date.now(), titulo: this.nuevaTarea, completado: false };
      this.tareaService.agregarTarea(nuevaTarea).subscribe(tarea => {
        this.tareas.push(tarea);
        this.nuevaTarea = '';
      });
    }
  }

  eliminarTarea(id: number): void {
    this.tareaService.eliminarTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    });
  }

  alternarTarea(tarea: Tarea): void {
    this.tareaService.actualizarTarea(tarea).subscribe();
  }
}
