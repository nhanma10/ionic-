import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HokhoanPage } from './hokhoan.page';

describe('HokhoanPage', () => {
  let component: HokhoanPage;
  let fixture: ComponentFixture<HokhoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HokhoanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HokhoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
