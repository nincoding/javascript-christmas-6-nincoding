import ChristmasPromotion from './domain/ChristmasPromotion.js';
import ChristmasPromotionController from './controller/ChristmasPromotionController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new ChristmasPromotionController(ChristmasPromotion);
  }

  async run() {
    await this.#controller.startService();
  }
}

export default App;
