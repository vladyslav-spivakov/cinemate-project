import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Actor } from 'src/app/core/models/actor';
import { MovieAPI } from 'src/app/core/services/tmdb-api3.service';

import { ActorComponent } from './actor.component';

describe('ActorComponent', () => {
  let component: ActorComponent;
  let fixture: ComponentFixture<ActorComponent>;
  let de : DebugElement;

  class MockMovieApi {
    img400(path : string) {
      return `img400/${path}`
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorComponent ],
      providers: [{provide: MovieAPI, useClass: MockMovieApi}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set actor data', ()=> {
    const actor : Actor = {
      cast_id: 100,
      character: 'CharacterName',
      name: 'ActorName',
      profile_path: 'some_path/',
    };
    component.actor = actor;
    fixture.detectChanges();
    const actorNameElement = de.query(By.css('.actor-name')).nativeElement;
    expect(actorNameElement.innerHTML).toContain(actor.name);
    const characterNameElement = de.query(By.css('.character-name')).nativeElement;
    expect(characterNameElement.innerHTML).toContain(actor.character);
    const actorProfileElement = de.query(By.css('.actor-profile')).nativeElement;
    const api : MockMovieApi = new MockMovieApi();
    expect(actorProfileElement.getAttribute('src')).toBe(api.img400(actor.profile_path));
  })
});
