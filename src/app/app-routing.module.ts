import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AboutPage} from './pages/about/about.component';
import {ContactPage} from './pages/contact/contact.component';
import {ImprintPage} from './pages/imprint/imprint.page';
import {PrivacyPage} from './pages/privacy/privacy.page';
import {SkillsPage} from './pages/skills/skills.page';
import {ProjectsPage} from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: 'projects',
    component: ProjectsPage
  },
  {
    path: 'skills',
    component: SkillsPage
  },
  {
    path: 'contact',
    component: ContactPage
  },
  {
    path: 'imprint',
    component: ImprintPage
  },
  {
    path: 'privacy',
    component: PrivacyPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
