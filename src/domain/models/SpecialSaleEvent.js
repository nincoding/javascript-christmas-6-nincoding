import { EVENT_PLANNER, SALE_PRIZE, EMPTY_COUNT } from '../../constants/constant.js';

class SpecialSaleEvent {
  #specialSalePrice;

  constructor(visitDate) {
    this.#specialSalePrice = this.#checkIncludeEventDate(visitDate);
  }

  #checkIncludeEventDate(visitDate) {
    const specialDate = [...EVENT_PLANNER.specialDate];

    const isSpecialDate = specialDate.find((date) => date === visitDate);

    return isSpecialDate ? SALE_PRIZE.specialSale : EMPTY_COUNT;
  }

  getSpecialSalePrice() {
    return this.#specialSalePrice;
  }
}

export default SpecialSaleEvent;
