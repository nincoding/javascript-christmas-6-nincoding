import * as EventModels from './models';
import { MENU_PRIZE } from '../constants/constant.js';

class ChristmasPromotion {
  #promotionInfo;
  #totalSaleAmount;
  #estimatedAmount;
  #orderReceipt;
  #visitDate;

  constructor(orderReceipt) {
    this.#orderReceipt = orderReceipt;
  }

  calctotalOrderAmount() {
    return Object.entries(this.#orderReceipt)
      .map(([menuName, orderCount]) => MENU_PRIZE[menuName] * orderCount)
      .reduce((total, amount) => total + amount, 0);
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
}

export default ChristmasPromotion;
