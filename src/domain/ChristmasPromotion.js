import * as PromotionModels from './models';

class ChristmasPromotion {
  #totalOrderAmount;
  #promotionInfo;
  #totalSaleAmount;
  #estimatedAmount;

  constructor() {}

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
}

export default ChristmasPromotion;
