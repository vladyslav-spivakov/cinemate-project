import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CoreModule } from 'src/app/core/core.module';

import { ActorsBlockComponent } from './actors-block.component';

import {SimpleChanges, SimpleChange} from "@angular/core";
import { BackendService } from 'src/app/core/services/backend.service';
import { Actor } from 'src/app/core/models/actor';


describe('ActorsBlockComponent', () => {
  const cast : Actor[] = [
    {
      cast_id: 0,
      character: 'Char',
      name: 'Name',
      profile_path : 'path'
    },
    {
      cast_id: 1,
      character: 'Char',
      name: 'Name',
      profile_path : 'path'
    },
    {
      cast_id: 2,
      character: 'Char',
      name: 'Name',
      profile_path : 'path'
    }
  ]
  class MockBackendService {
    getCredits(id : any){ 
      
      return new Promise<any>((resolve,reject)=>{
        resolve({cast:cast});
      })
    }
  }
  
  let component: ActorsBlockComponent;
  let fixture: ComponentFixture<ActorsBlockComponent>;
  let be : MockBackendService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ ActorsBlockComponent ],
      providers:[
        {provide: BackendService, useClass:MockBackendService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsBlockComponent);
    component = fixture.componentInstance;
    be = new MockBackendService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change cast after id change', fakeAsync(()=> {
    const id = 10;
    const changes : SimpleChanges = {
      id : new SimpleChange(null, id, false)
    }
    component.id = id;
    component.ngOnChanges(changes);
    component.cast.subscribe((data)=>{
      expect(data).toBe(cast.splice(0,6));
    })
    tick(100);
    expect(component.loading).toBe(false);
  }));
  
});
