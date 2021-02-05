import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DaoService } from './dao.service';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractDaoService<T,ID> implements DaoService<T,ID> {

  constructor() { }
  save(t: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  update(id: ID, t: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  findOne(id: ID): Observable<T> {
    throw new Error('Method not implemented.');
  }
  findAll(): Observable<T[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: ID): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
