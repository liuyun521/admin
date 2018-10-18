import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

const appRoutes: Routes = [
     // 设置默认跳转路由， full表示与path为空的路由完全匹配
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        LoginModule,
        DashboardModule,
        RouterModule
    ]
})
export class AppRoutingModule { }
