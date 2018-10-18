import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { DashboardComponent } from './dashboard.component';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { HttpClientJsonpModule } from '@angular/common/http/src/module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, CollapseModule.forRoot()],
      declarations: [ DashboardComponent, TopnavComponent, SidebarComponent ],
      providers: [SidebarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
