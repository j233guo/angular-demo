import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/home/productlist/productlist.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: 'setting',
                component: SettingComponent
            },
            {
                path: 'productlist',
                component: ProductlistComponent
            },
            {
                path: '**',
                redirectTo: 'welcome'
            },
        ]
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'todolist',
        component: TodolistComponent
    },
    {
        path: 'weather',
        component: WeatherComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
