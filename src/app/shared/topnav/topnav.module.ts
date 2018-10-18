import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    CollapseModule,
    //导入 ng-zorro-antd 模块
    NgZorroAntdModule
  ],
  declarations: [TopnavComponent],
  exports: [TopnavComponent]
})
export class TopnavModule { }
