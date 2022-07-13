import { Injectable } from '@angular/core';
import { AppModel } from '../models/app-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: AppModel = new AppModel();

  constructor() { }
}
