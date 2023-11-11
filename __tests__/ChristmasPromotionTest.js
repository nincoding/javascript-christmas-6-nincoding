import ChristmasPromotion from '../src/domain/ChristmasPromotion.js';

describe('ChristmasPromotion', () => {
  let christmasPromotion;
  let resultTotalOrderAmount;

  const createPromotion = (orderReceipt) => {
    christmasPromotion = new ChristmasPromotion(orderReceipt);
    resultTotalOrderAmount = () => christmasPromotion.getTotalOrderAmount();
  };

  const totalOrderCases = [
    [{ 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 }, 142_000],
    [{ 타파스: 1, 제로콜라: 1 }, 8_500],
    [{ 양송이수프: 1, 해산물파스타: 1 }, 41_000],
  ];

  test.each(totalOrderCases)(
    '주문내역 만큼 계산된 할인 전 총 주문 금액이 알맞는지 테스트한다.',
    (orderReceipt, expectedAmount) => {
      createPromotion(orderReceipt);

      expect(resultTotalOrderAmount()).toBe(expectedAmount);
    }
  );
});
