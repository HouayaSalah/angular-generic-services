import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { AbstractDaoService } from './abstract-dao.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractDaoService<User,number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/bookmarks`);
  }
}
