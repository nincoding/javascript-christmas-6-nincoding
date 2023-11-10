import { PRESENT_EVENT_CONDITION, CHAMPAGNE_PRIZE } from '../../constants/constant';

class ChampagneEvent {
  #champagneCount;
  #presentedPrice;

  constructor(orderAmount) {
    this.#champagneCount = this.#countChampagne(orderAmount);
    this.#presentedPrice = this.#calcPresentedPrice();
  }

  #countChampagne(orderAmount) {
    if (orderAmount >= PRESENT_EVENT_CONDITION) {
      return Math.trunc(orderAmount / PRESENT_EVENT_CONDITION);
    }

    return 0;
  }

  #calcPresentedPrice() {
    return this.#champagneCount * CHAMPAGNE_PRIZE;
  }

  getChampagne() {
    return this.#champagneCount;
  }

  getPresentedPrice() {
    return this.#presentedPrice;
  }
}

export default ChampagneEvent;
