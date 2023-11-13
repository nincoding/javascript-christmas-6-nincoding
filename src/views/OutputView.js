import { Console } from '@woowacourse/mission-utils';
import addCommaAmount from '../utils/addCommaAmount.js';
import OUTPUT_MESSAGE from '../constants/outputMessage.js';

const OutputView = {
  printErrorMessage(message) {
    Console.print(message);
  },

  printStaticMessage(prefixMessage, message) {
    return Console.print(`${prefixMessage}${message}`);
  },

  // 서비스 시작 문구를 출력한다.
  printStartService() {
    Console.print(OUTPUT_MESSAGE.startService);
  },

  // 미리보기 메세지를 출력한다.
  printPreviewbenefits(visitDate) {
    Console.print(OUTPUT_MESSAGE.previewbenefits(visitDate));
  },

  // 주문 메뉴를 출력한다.
  printOrderMenuInfo(orderMenu) {
    Console.print(OUTPUT_MESSAGE.orderMenu);

    orderMenu.forEach((menu) => {
      const menuName = Object.keys(menu)[0];
      const count = menu[menuName];

      Console.print(`${menuName} ${count}개`);
    });
  },

  // 할인 전 총주문 금액을 출력한다.
  printTotalOrderAmount(totalOrderAmount) {
    const prefixMessage = `${OUTPUT_MESSAGE.totalOrderAmount}\n`;
    const message = addCommaAmount(totalOrderAmount);

    this.printStaticMessage(prefixMessage, message);
  },

  // 총혜택 금액을 출력한다.
  printTotalSaleAmount(totalSaleAmount) {
    const prefixMessage = `${OUTPUT_MESSAGE.totalSaleAmount}\n`;
    const message = addCommaAmount(totalSaleAmount);

    if (totalSaleAmount > 0) return Console.print(`${prefixMessage}-${message}원`);

    return Console.print(`${prefixMessage}${message}원`);
  },

  // 할인 후 예상 결제 금액을 출력한다.
  printEstimatedAmount(estimatedAmount) {
    const prefixMessage = `${OUTPUT_MESSAGE.estimatedAmount}\n`;
    const message = addCommaAmount(estimatedAmount);

    this.printStaticMessage(prefixMessage, message);
  },

  // 이벤트 배지를 출력한다.
  printBadge(badge) {
    const prefixMessage = `${OUTPUT_MESSAGE.eventBadge}\n`;

    this.printStaticMessage(prefixMessage, badge);
  },

  // todo: 증정 메뉴를 출력한다.

  // todo: 혜택 내역을 출력한다.
};

export default OutputView;
