class SpecialSaleEvent {
  #specialSalePrice;

  constructor(visitDate) {
    this.#specialSalePrice = this.#checkIncludeEventDate(visitDate);
  }

  #checkIncludeEventDate(visitDate) {
    const specialDay = [3, 10, 17, 24, 25, 31];

    if (specialDay.includes(visitDate)) return 1_000;

    return 0;
  }

  getSpecialSalePrice() {
    return this.#specialSalePrice;
  }
}

export default SpecialSaleEvent;
