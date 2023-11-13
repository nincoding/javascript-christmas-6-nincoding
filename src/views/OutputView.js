import { Console } from '@woowacourse/mission-utils';
import addCommaAmount from '../utils/addCommaAmount.js';
import OUTPUT_MESSAGE from '../constants/outputMessage.js';
import { EMPTY_VALUE } from '../constants/constant.js';

const OutputView = {
  printErrorMessage(message) {
    Console.print(message);
  },

  printAmountMessage(prefixMessage, amount) {
    const result = addCommaAmount(amount);

    return Console.print(`${prefixMessage}${result}원`);
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

    this.printAmountMessage(prefixMessage, totalOrderAmount);
  },

  // 증정 메뉴를 출력한다.
  printPresentedMenu(presentedChampagne) {
    Console.print(OUTPUT_MESSAGE.presentedMenu);

    if (presentedChampagne > 0) {
      return Console.print(`샴페인 ${presentedChampagne}개`);
    }

    Console.print(EMPTY_VALUE);
  },

  // 혜택 내역을 출력한다.
  printTotalSaleInfo(totalSaleInfo) {
    Console.print(OUTPUT_MESSAGE.promotions);

    if (Object.values(totalSaleInfo).every((amount) => amount === 0)) {
      return Console.print(EMPTY_VALUE);
    }

    return Object.entries(totalSaleInfo).forEach(([promotion, amount]) => {
      if (amount !== 0) Console.print(`${promotion}: -${addCommaAmount(amount)}원`);
    });
  },

  // 총혜택 금액을 출력한다.
  printTotalSaleAmount(totalSaleAmount) {
    const prefixMessage = `${OUTPUT_MESSAGE.totalSaleAmount}\n`;

    if (totalSaleAmount > 0) {
      return Console.print(`${prefixMessage}-${addCommaAmount(totalSaleAmount)}원`);
    }

    return this.printAmountMessage(prefixMessage, totalSaleAmount);
  },

  // 할인 후 예상 결제 금액을 출력한다.
  printEstimatedAmount(estimatedAmount) {
    const prefixMessage = `${OUTPUT_MESSAGE.estimatedAmount}\n`;

    this.printAmountMessage(prefixMessage, estimatedAmount);
  },

  // 12월 이벤트 배지를 출력한다.
  printBadge(badge) {
    const prefixMessage = `${OUTPUT_MESSAGE.eventBadge}\n`;

    Console.print(`${prefixMessage}${badge}`);
  },
};

export default OutputView;
