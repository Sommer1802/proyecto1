import { Routes } from '@angular/router';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

export const routes: Routes = [
    {
        path: 'listado',
        component: ListadoUsuarioComponent

    },
    {
        path: '',
        component: PrincipalComponent

    },
    {
        path: 'crear usuario',
        component: CrearUsuarioComponent
    }
];
