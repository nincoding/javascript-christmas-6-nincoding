class ChampagneEvent {
  #champagne;
  #presentedPrice;

  constructor(orderAmount) {
    this.#champagne = this.#countChampagne(orderAmount);
    this.#presentedPrice = this.#calcPresentedPrice();
  }

  #countChampagne(orderAmount) {
    if (orderAmount >= 120_000) {
      return Math.trunc(orderAmount / 120_000);
    }

    return 0;
  }

  #calcPresentedPrice() {
    return this.#champagne * 25_000;
  }

  getChampagne() {
    return this.#champagne;
  }

  getPresentedPrice() {
    return this.#presentedPrice;
  }
}

export default ChampagneEvent;
