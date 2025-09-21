import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Habilidades } from './habilidades/habilidades';
import { Hobbies } from './hobbies/hobbies';
import { Ui } from './ui/ui';

export const routes: Routes = [

    {
        path: '',
        component:Layout,
        children: [
            {
                path: '',
                component: Home,
                title: 'Inicio'
            },
            {
                path: 'about',
                component : About,
                title: 'Acerca de'
            },
            {
                path: 'habilidades',
                component : Habilidades,
                title: 'Habilidades'
            },
            {
                path: 'hobbies',
                component : Hobbies,
                title: 'Hobbies'
            },
            {
                path: 'ui',
                component : Ui,
                title: 'UI'
            }
        ]    
    }
];