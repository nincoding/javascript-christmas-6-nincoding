import ChristmasPromotion from '../domain/ChristmasPromotion.js';
import OrderMenuValidator from '../domain/validators/OrderMenuValidator.js';
import VisitDateValidator from '../domain/validators/visitDateValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class ServiceController {
  #service;

  constructor() {
    OutputView.printStartService();
  }

  async startService() {
    const visitDate = await this.requireVisitDate();
    const orderMenu = await this.requireOrderMenu();
  }

  async requireVisitDate() {
    while (true) {
      try {
        const visitDate = await InputView.getVisitDate();
        VisitDateValidator.validate(visitDate);

        return visitDate;
      } catch ({ message }) {
        OutputView.printErrorMessage(message);
      }
    }
  }

  async requireOrderMenu() {
    while (true) {
      try {
        const orderMenu = await InputView.getOrderMenu();
        OrderMenuValidator.validate(orderMenu);

        return orderMenu;
      } catch ({ message }) {
        OutputView.printErrorMessage(message);
      }
    }
  }
}

export default ServiceController;
