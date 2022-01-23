import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Capitan América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando');
    //this.heroes.splice(2, 1);
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
