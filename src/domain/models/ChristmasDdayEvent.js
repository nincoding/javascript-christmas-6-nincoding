import { SALE_PRIZE, EVENT_PLANNER, EMPTY_COUNT } from '../../constants/constant.js';

class ChristmasDdayEvent {
  #christmasDdaySalePrice;

  constructor(visitDate) {
    this.#christmasDdaySalePrice = this.#countDdaySale(visitDate);
  }

  #countDdaySale(visitDate) {
    if (visitDate <= EVENT_PLANNER.christmas) {
      return (
        SALE_PRIZE.startBasePrice +
        SALE_PRIZE.additionalPricePerDay * (visitDate - EVENT_PLANNER.startDate)
      );
    }

    return EMPTY_COUNT;
  }

  getChristmasDdaySalePrice() {
    return this.#christmasDdaySalePrice;
  }
}

export default ChristmasDdayEvent;
