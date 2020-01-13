import { AppHome } from './home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import {AppLogin } from './login/login.component';
const routes: Routes = [
    {
            path:'login',
            component: AppLogin
    },
    {
            path: '',
            component: AppHome
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}