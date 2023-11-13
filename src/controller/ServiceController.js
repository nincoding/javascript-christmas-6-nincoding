import ChristmasPromotion from '../domain/ChristmasPromotion.js';
import OrderMenuValidator from '../domain/validators/OrderMenuValidator.js';
import VisitDateValidator from '../domain/validators/visitDateValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import errorHandler from '../utils/errorHandler.js';

class ServiceController {
  #service;
  #visitDate;
  #orderMenu;

  constructor() {
    OutputView.printStartService();
  }

  async startService() {
    const printError = (message) => OutputView.printErrorMessage(message);

    await errorHandler(async () => await this.#requireValidVisitDate(), printError);
    await errorHandler(async () => await this.#requireValidOrderMenu(), printError);

    this.#service = new ChristmasPromotion(this.#visitDate, this.#orderMenu);
    const promotionData = this.#initPromotionServiceData();

    this.#printPromotionService(promotionData);
  }

  async #requireValidVisitDate() {
    const inputVisitDate = await InputView.getVisitDate();
    VisitDateValidator.validate(inputVisitDate);

    this.#visitDate = inputVisitDate;
  }

  async #requireValidOrderMenu() {
    const inputOrderMenu = await InputView.getOrderMenu();
    OrderMenuValidator.validate(inputOrderMenu);

    this.#orderMenu = inputOrderMenu;
  }

  #initPromotionServiceData() {
    const totalOrderAmount = this.#service.getTotalOrderAmount();
    const presentedChampagne = this.#service.getPresentedChampagne();
    const totalSaleInfo = this.#service.getTotalSaleInfo();
    const totalSaleAmount = this.#service.getTotalSaleAmount();
    const estimatedAmount = this.#service.getEstimatedAmount();
    const badge = this.#service.getBadge();

    return {
      totalOrderAmount,
      presentedChampagne,
      totalSaleInfo,
      totalSaleAmount,
      estimatedAmount,
      badge,
    };
  }

  #printPromotionService(promotionData) {
    OutputView.printPreviewbenefits(this.#visitDate);
    OutputView.printOrderMenuInfo(this.#orderMenu);

    OutputView.printTotalOrderAmount(promotionData.totalOrderAmount);
    OutputView.printPresentedMenu(promotionData.presentedChampagne);
    OutputView.printTotalSaleInfo(promotionData.totalSaleInfo);
    OutputView.printTotalSaleAmount(promotionData.totalSaleAmount);
    OutputView.printEstimatedAmount(promotionData.estimatedAmount);
    OutputView.printBadge(promotionData.badge);
  }
}

export default ServiceController;
