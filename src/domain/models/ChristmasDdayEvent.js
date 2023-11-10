class ChristmasDdayEvent {
  #christmasDdaySalePrice;

  constructor(visitDate) {
    this.#christmasDdaySalePrice = this.#countDdaySale(visitDate);
  }

  #countDdaySale(visitDate) {
    const startDate = 1;
    const endDate = 25;
    const basePrice = 1000;
    const additionalPricePerDay = 100;

    if (visitDate <= endDate) {
      return basePrice + additionalPricePerDay * (visitDate - startDate);
    }

    return 0;
  }

  getChristmasDdaySalePrice() {
    return this.#christmasDdaySalePrice;
  }
}

export default ChristmasDdayEvent;
