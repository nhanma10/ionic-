import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TinhtoanSPTPage } from './tinhtoan-spt.page';

describe('TinhtoanSPTPage', () => {
  let component: TinhtoanSPTPage;
  let fixture: ComponentFixture<TinhtoanSPTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhtoanSPTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TinhtoanSPTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
