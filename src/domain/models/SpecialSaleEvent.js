import { EVENT_PLANNER, SALE_PRIZE, EMPTY_COUNT } from '../../constants/constant.js';

class SpecialSaleEvent {
  #specialSalePrice;

  constructor(visitDate) {
    this.#specialSalePrice = this.#checkIncludeEventDate(visitDate);
  }

  #checkIncludeEventDate(visitDate) {
    const specialDay = [...EVENT_PLANNER.specialDay];

    const isSpecialDay = specialDay.find((day) => day === visitDate);

    return isSpecialDay ? SALE_PRIZE.specialSale : EMPTY_COUNT;
  }

  getSpecialSalePrice() {
    return this.#specialSalePrice;
  }
}

export default SpecialSaleEvent;
