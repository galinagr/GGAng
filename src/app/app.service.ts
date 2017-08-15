import { Injectable } from '@angular/core';
import { Model } from './app.model';

@Injectable()
export class AppService {

  constructor() { }

  getModel(): Model {
    return new Model(1, false, 'One');
  }

  getModels(): Array<Model> {
    return [
      new Model(2, true, 'Two'),
      new Model(3, false, 'Three'),
      new Model(4, false, 'Four')
    ];
  }

}

