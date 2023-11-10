import { EVENT_PLANNER, DAY, MENU } from '../../constants/constant.js';

class DailyMenuDiscountEvent {
  #visitDay;
  #dailySalePrice;

  constructor(visitDate, orderReceipt) {
    this.#visitDay = this.#distinguishVisitDay(visitDate);
    this.#dailySalePrice = this.#dailyMenuDiscount(orderReceipt);
  }

  #distinguishVisitDay(visitDate) {
    const visitWeekEnd = EVENT_PLANNER.weekends.find((day) => day === visitDate);

    return visitWeekEnd ? DAY.weekend : DAY.weekday;
  }

  #dailyMenuDiscount(orderReceipt) {
    return this.#visitDay === DAY.weekend
      ? this.#calculateWeekendDiscount(orderReceipt)
      : this.#calculateWeekdayDiscount(orderReceipt);
  }

  #calculateWeekendDiscount(orderReceipt) {
    if (this.#isContainMainDish(orderReceipt)) {
      const totalMainDishCount = this.#calculateTotalItemCount(orderReceipt, MENU.mainDish);

      return totalMainDishCount * 2_023;
    }

    return 0;
  }

  #calculateWeekdayDiscount(orderReceipt) {
    if (this.#isContainDessert(orderReceipt)) {
      const totalDessertCount = this.#calculateTotalItemCount(orderReceipt, MENU.dessert);

      return totalDessertCount * 2_023;
    }

    return 0;
  }

  #isContainMainDish(orderReceipt) {
    return this.#isContainItem(orderReceipt, [...MENU.mainDish]);
  }

  #isContainDessert(orderReceipt) {
    return this.#isContainItem(orderReceipt, [...MENU.dessert]);
  }

  #isContainItem(orderReceipt, menuCategory) {
    const menuNames = Object.keys(orderReceipt);

    return menuNames.some((menuName) => menuCategory.includes(menuName));
  }

  #calculateTotalItemCount(orderReceipt, menuCategory) {
    const menuNames = Object.keys(orderReceipt);

    return menuNames.reduce(
      (total, menuName) => (menuCategory.has(menuName) ? total + orderReceipt[menuName] : total),
      0
    );
  }

  getVisitDay() {
    return this.#visitDay;
  }

  getDailySalePrice() {
    return this.#dailySalePrice;
  }
}

export default DailyMenuDiscountEvent;
