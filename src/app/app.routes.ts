import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: "", 
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "login",
        loadChildren: () => import("./pages/login/login.module").then(module => module.LoginModule)
    },
    {
        path: "player",
        loadChildren: () => import("./pages/player/player.module").then(module => module.PlayerModule)
    }
];
