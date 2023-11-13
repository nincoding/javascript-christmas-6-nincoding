import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constants/outputMessage.js';

const OutputView = {
  printErrorMessage(message) {
    Console.print(message);
  },

  printStartService() {
    Console.print(OUTPUT_MESSAGE.startService);
  },

  printPreviewbenefits(visitDate) {
    Console.print(OUTPUT_MESSAGE.previewbenefits(visitDate));
  },

  printOrderMenuInfo(orderMenu) {
    Console.print(OUTPUT_MESSAGE.orderMenu);

    orderMenu.forEach((menu) => {
      const menuName = Object.keys(menu)[0];
      const count = menu[menuName];

      Console.print(`${menuName} ${count}개`);
    });
  },
};

export default OutputView;
