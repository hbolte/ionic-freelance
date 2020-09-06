import {async, ComponentFixture, TestBed} from '@angular/core/testing'
import {IonicModule} from '@ionic/angular'

import {ProjectsPage} from './projects.component'

describe('Tab2Page', () => {
  let component: ProjectsPage
  let fixture: ComponentFixture<ProjectsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(ProjectsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
