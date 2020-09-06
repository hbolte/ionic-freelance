import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {SocialLinksComponent} from './social-links.component'

describe('SocialLinksComponent', () => {
  let component: SocialLinksComponent
  let fixture: ComponentFixture<SocialLinksComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialLinksComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinksComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
