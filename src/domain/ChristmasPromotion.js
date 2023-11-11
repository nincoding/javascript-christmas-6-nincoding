import * as EventModels from './models/index.js';
import { MENU_PRIZE, INITIAL_SALE_INFO } from '../constants/constant.js';

class ChristmasPromotion {
  #visitDate;
  #orderReceipt;
  #totalOrderAmount;
  #totalSaleInfo;
  #presentedChampagne;

  constructor(visitDate, orderReceipt) {
    this.#visitDate = visitDate;
    this.#orderReceipt = orderReceipt;
    this.#totalOrderAmount = this.#calcTotalOrderAmount();
    this.#totalSaleInfo = this.#calcTotalSaleInfo(this.#initEvent());
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

  calcTotalSaleAmount() {
    const saleAmounts = Object.values(this.#totalSaleInfo);

    return saleAmounts.reduce((total, amount) => total + amount, 0);
  }

  #calcTotalOrderAmount() {
    return Object.entries(this.#orderReceipt)
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
    const events = { christmasDday, dailyMenuDiscount, specialSale, champagne };

    return events;
  }

  #calcTotalSaleInfo(events) {
    const totalSaleInfo = { ...INITIAL_SALE_INFO };
    const visitDay = events.dailyMenuDiscount.getVisitDay();

    totalSaleInfo.christmasDday = events.christmasDday.getChristmasDdaySalePrice();
    totalSaleInfo[visitDay] = events.dailyMenuDiscount.getDailySalePrice();
    totalSaleInfo.special = events.specialSale.getSpecialSalePrice();
    totalSaleInfo.champagne = events.champagne.getPresentedPrice();

    return totalSaleInfo;
  }

  #setPresentedChampagne(events) {
    return (this.#presentedChampagne = events.champagne.getChampagne());
  }

  /*
  getEstimatedAmount() {
    return this.#estimatedAmount;
  }
  */
}

export default ChristmasPromotion;
