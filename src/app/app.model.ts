export class Model {
  constructor(public id: number,
              public action: boolean,
              public priority: string) {
    this.id = 0;
    this.action = true;
    this.priority = 'First';
  }
}
