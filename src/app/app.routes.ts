import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Layout } from './pages/auth/layout/layout';
import { Clientlist } from './pages/clients/clientlist/clientlist';
import { Clientform } from './pages/clients/clientform/clientform';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
        
    },
    {
        path: 'admin',
        component:Layout,
        canActivate:[authGuard],
        children:[
            {
                path:'',
                component:Dashboard            },
            {
                path:'client-list',
                component:Clientlist
            },
            {
                path:'client-form',
                component:Clientform
            }
        ]
    }
];
