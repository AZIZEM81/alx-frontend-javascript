export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const evacuationMethod = Object.getOwnPropertyDescriptor(
        this.constructor.prototype,
        'evacuationWarningMessage'
      );
      if (!evacuationMethod || typeof evacuationMethod.value !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
