import ChristmasPromotion from './domain/ChristmasPromotion.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import ServiceController from './controller/ServiceController.js';

class App {
  #serviceController;

  constructor() {
    this.#serviceController = new ServiceController();
  }

  async run() {
    await this.#serviceController.startService();
  }
}

export default App;
