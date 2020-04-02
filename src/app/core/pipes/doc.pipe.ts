import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";

@Pipe({
  name: 'doc'
})
export class DocPipe implements PipeTransform {

  constructor(private db: AngularFirestore) {}

  transform(idDoc: any): Observable<any> {
    return this.db.doc(String(idDoc)).valueChanges();
  }

}
