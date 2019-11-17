import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Project} from '../about/about.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsPage {

  private itemsCollection: AngularFirestoreCollection<Project>;
  public projects: Observable<Project[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Project>('projects');
    this.projects = this.itemsCollection.valueChanges();
  }

}
