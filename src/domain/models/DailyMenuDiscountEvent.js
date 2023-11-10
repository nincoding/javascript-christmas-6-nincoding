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
    return this.#visitDay === DAY.weekend
      ? this.#calculateDiscount(orderReceipt, MENU.mainDish)
      : this.#calculateDiscount(orderReceipt, MENU.dessert);
  }

  #calculateDiscount(orderReceipt, menuCategory) {
    if (this.#isContainMenu(orderReceipt, menuCategory)) {
      const totalItemCount = this.#calculateTotalMenuCount(orderReceipt, menuCategory);

      return totalItemCount * SALE_PRIZE.dailySale;
    }

    return EMPTY_COUNT;
  }

  #isContainMenu(orderReceipt, menuCategory) {
    const menuNames = Object.keys(orderReceipt);

    return menuNames.some((menuName) => menuCategory.has(menuName));
  }

  #calculateTotalMenuCount(orderReceipt, menuCategory) {
    const menuNames = Object.keys(orderReceipt);

    return menuNames.reduce(
      (total, menuName) => (menuCategory.has(menuName) ? total + orderReceipt[menuName] : total),
      EMPTY_COUNT
    );
  }
}

export default DailyMenuDiscountEvent;
