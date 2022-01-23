import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HereoComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Que cosas contienen este módulo? {Componentes pipes.}
    declarations: [
        HereoComponent,
        ListadoComponent
    ],
    //Que cosas quiero que sean visibles afuera de este módulo?
    exports: [
        ListadoComponent
    ],
    //Van módulos y solo módulos
    imports: [
        //CommonModule //Para la versión de ahora ya no es necesario importar
    ]
})
export class HeroesModule {

}