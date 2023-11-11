import * as EventModels from './models';
import { MENU_PRIZE } from '../constants/constant.js';

class ChristmasPromotion {
  #totalOrderAmount;
  #promotionInfo;
  #totalSaleAmount;
  #estimatedAmount;

  constructor(orderReceipt) {
    this.#totalOrderAmount = this.#calctotalOrderAmount(orderReceipt);
  }

  getTotalOrderAmount() {
    return this.#totalOrderAmount;
  }

  getPromotionInfo() {
    return this.#promotionInfo;
  }

  getTotalSaleAmount() {
    return this.#totalSaleAmount;
  }

  getEstimatedAmount() {
    return this.#estimatedAmount;
  }

  #calctotalOrderAmount(orderReceipt) {
    return Object.entries(orderReceipt)
      .map(([menuName, orderCount]) => MENU_PRIZE[menuName] * orderCount)
      .reduce((total, amount) => total + amount, 0);
  }
}

export default ChristmasPromotion;
