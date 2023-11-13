import * as EventModels from './models/index.js';
import { MENU_PRIZE, INITIAL_SALE_INFO, PROMOTION_KEY } from '../constants/constant.js';

class ChristmasPromotion {
  #visitDate;
  #orderReceipt;
  #totalOrderAmount;
  #totalSaleInfo;
  #presentedChampagne;
  #totalSaleAmount;

  constructor(visitDate, orderReceipt) {
    this.#visitDate = visitDate;
    this.#orderReceipt = orderReceipt;
    this.#totalOrderAmount = this.#calcTotalOrderAmount();
    this.#totalSaleInfo = this.#calcTotalSaleInfo(this.#initEvent());
    this.#totalSaleAmount = this.calcTotalSaleAmount();
    this.#presentedChampagne = this.#setPresentedChampagne(this.#initEvent());
  }

  getTotalOrderAmount() {
    return this.#totalOrderAmount;
  }

  getPresentedChampagne() {
    return this.#presentedChampagne;
  }

  getTotalSaleInfo() {
    return this.#totalSaleInfo;
  }

  getBadge() {
    return this.#makeBadge(this.#initEvent());
  }

  calcTotalSaleAmount() {
    const saleAmounts = Object.values(this.#totalSaleInfo);

    return saleAmounts.reduce((total, amount) => total + amount, 0);
  }

  calcEstimatedAmount(totalSaleAmount) {
    return this.#totalOrderAmount - totalSaleAmount + this.#totalSaleInfo[PROMOTION_KEY.champagne];
  }

  #calcTotalOrderAmount() {
    return this.#orderReceipt
      .flatMap((order) => Object.entries(order))
      .map(([menuName, orderCount]) => MENU_PRIZE[menuName] * orderCount)
      .reduce((total, amount) => total + amount, 0);
  }

  #initEvent() {
    const christmasDday = new EventModels.ChristmasDdayEvent(this.#visitDate);
    const dailyMenuDiscount = new EventModels.DailyMenuDiscountEvent(
      this.#visitDate,
      this.#orderReceipt
    );
    const specialSale = new EventModels.SpecialSaleEvent(this.#visitDate);
    const champagne = new EventModels.ChampagneEvent(this.#totalOrderAmount);
    const badge = new EventModels.BadgeEvent(this.#totalSaleAmount);
    const events = { christmasDday, dailyMenuDiscount, specialSale, champagne, badge };

    return events;
  }

  #calcTotalSaleInfo(events) {
    const totalSaleInfo = { ...INITIAL_SALE_INFO };
    const visitDay = events.dailyMenuDiscount.getVisitDay();

    totalSaleInfo[PROMOTION_KEY.christmasDday] = events.christmasDday.getChristmasDdaySalePrice();
    totalSaleInfo[PROMOTION_KEY.visitDate(visitDay)] = events.dailyMenuDiscount.getDailySalePrice();
    totalSaleInfo[PROMOTION_KEY.special] = events.specialSale.getSpecialSalePrice();
    totalSaleInfo[PROMOTION_KEY.champagne] = events.champagne.getPresentedPrice();

    return totalSaleInfo;
  }

  #setPresentedChampagne(events) {
    return (this.#presentedChampagne = events.champagne.getChampagne());
  }

  #makeBadge(events) {
    return events.badge.getBadge();
  }
}

export default ChristmasPromotion;
