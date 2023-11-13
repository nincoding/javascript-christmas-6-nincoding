import { EVENT_PLANNER, DAY, MENU, EMPTY_COUNT, SALE_PRIZE } from '../../constants/constant.js';

class DailyMenuDiscountEvent {
  #visitDay;
  #dailySalePrice;

  constructor(visitDate, orderReceipt) {
    this.#visitDay = this.#distinguishVisitDay(visitDate);
    this.#dailySalePrice = this.#dailyMenuDiscount(orderReceipt);
  }

  getVisitDay() {
    return this.#visitDay;
  }

  getDailySalePrice() {
    return this.#dailySalePrice;
  }

  #distinguishVisitDay(visitDate) {
    const visitWeekEnd = EVENT_PLANNER.weekends.includes(visitDate);

    return visitWeekEnd ? DAY.weekend : DAY.weekday;
  }

  #dailyMenuDiscount(orderReceipt) {
    const menuCategory = this.#visitDay === DAY.weekend ? MENU.mainDish : MENU.dessert;

    return this.#calculateDiscount(orderReceipt, menuCategory);
  }

  #calculateDiscount(orderReceipt, menuCategory) {
    if (this.#isContainMenu(orderReceipt, menuCategory)) {
      const totalItemCount = this.#calculateTotalMenuCount(orderReceipt, menuCategory);

      return totalItemCount * SALE_PRIZE.dailySale;
    }

    return EMPTY_COUNT;
  }

  #isContainMenu(orderReceipt, menuCategory) {
    return orderReceipt.some((order) => {
      const menuName = Object.keys(order)[0];

      return menuCategory.has(menuName);
    });
  }

  #calculateTotalMenuCount(orderReceipt, menuCategory) {
    return orderReceipt.reduce((total, order) => {
      const menuName = Object.keys(order)[0];
      const orderCount = order[menuName];

      return menuCategory.has(menuName) ? total + orderCount : total;
    }, EMPTY_COUNT);
  }
}

export default DailyMenuDiscountEvent;
