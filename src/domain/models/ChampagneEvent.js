import { PRESENT_EVENT_CONDITION, SALE_PRIZE, EMPTY_COUNT } from '../../constants/constant.js';

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

    return EMPTY_COUNT;
  }

  #calcPresentedPrice() {
    return this.#champagneCount * SALE_PRIZE.champagneSale;
  }

  getChampagne() {
    return this.#champagneCount;
  }

  getPresentedPrice() {
    return this.#presentedPrice;
  }
}

export default ChampagneEvent;
