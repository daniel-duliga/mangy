import { Injectable } from '@angular/core';
import { PersistentData } from '../features/persistent-data/persistent-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: PersistentData = new PersistentData();

  constructor() { }
}
