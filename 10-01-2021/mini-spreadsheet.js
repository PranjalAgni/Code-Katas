class Spreadsheet {
  constructor() {
    this.sheet = new Map();
  }

  read(name) {
    return this.sheet.get(name);
  }

  write(name, value) {
    this.sheet.set(name, value);
  }

  write(name, dependencies, formula) {
    dependencies.forEach((dep) => {
      const newValue = formula(this.sheet.get(dep));
      this.write(dep, newValue);
    });
  }
}
