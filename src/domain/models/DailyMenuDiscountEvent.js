import { EVENT_PLANNER, DAY } from '../../constants/constant.js';

class DailyMenuDiscountEvent {
  #visitDay;
  #dailySalePrice;

  constructor(visitDate, orderReceipt) {
    this.#visitDay = this.#distinguishVisitDay(visitDate);
    this.#dailySalePrice = this.#calcMenuDiscount(orderReceipt);
  }

  #distinguishVisitDay(visitDate) {
    const visitWeekEnd = EVENT_PLANNER.weekends.find((day) => day === visitDate);

    return visitWeekEnd ? DAY.weekend : DAY.weekday;
  }

  #calcMenuDiscount(orderReceipt) {}

  getVisitDay() {
    return this.#visitDay;
  }

  getDailySalePrice() {
    return this.#dailySalePrice;
  }
}

export default DailyMenuDiscountEvent;
