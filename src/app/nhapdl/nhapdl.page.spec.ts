import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhapdlPage } from './nhapdl.page';

describe('NhapdlPage', () => {
  let component: NhapdlPage;
  let fixture: ComponentFixture<NhapdlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapdlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhapdlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
