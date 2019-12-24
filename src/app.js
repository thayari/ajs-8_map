export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [101, 'Some error'],
      [102, 'Some other error'],
      [202, 'Really fatal error'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
