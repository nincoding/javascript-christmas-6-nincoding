import ChristmasPromotion from '../src/domain/ChristmasPromotion.js';

describe('ChristmasPromotion', () => {
  let christmasPromotion;
  let resultTotalOrderAmount;
  let resultTotalSaleInfo;
  let resultTotalSaleAmount;
  let resultEstimatedAmount;

  const createPromotion = (visitDate, orderReceipt) => {
    christmasPromotion = new ChristmasPromotion(visitDate, orderReceipt);
    resultTotalOrderAmount = () => christmasPromotion.getTotalOrderAmount();
    resultTotalSaleInfo = () => christmasPromotion.getTotalSaleInfo();
    resultTotalSaleAmount = () => christmasPromotion.calcTotalSaleAmount();
    resultEstimatedAmount = (totalSaleAmount) =>
      christmasPromotion.calcEstimatedAmount(totalSaleAmount);
  };

  const totalOrderCases = [
    [3, { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 }, 142_000, 31_246, 135_754],
    [3, { 타파스: 1, 제로콜라: 1 }, 8_500, 0, 8_500],
    [1, { 양송이수프: 1, 해산물파스타: 1 }, 41_000, 3_023, 37_977],
  ];

  const totalInfoCases = [
    [
      3,
      { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 },
      { christmasDday: 1_200, special: 1_000, champagne: 25_000, 평일: 4_046 },
      31_246,
    ],
    [26, { 타파스: 1, 제로콜라: 1 }, { christmasDday: 0, special: 0, champagne: 0, 평일: 0 }, 0],
    [
      2,
      { 양송이수프: 1, 해산물파스타: 1 },
      { christmasDday: 1_100, special: 0, champagne: 0, 주말: 2_023 },
      3_123,
    ],
  ];

  test.each(totalOrderCases)(
    '주문내역 만큼 계산된 할인 전 총 주문 금액이 알맞는지 테스트한다.',
    (_, orderReceipt, expectedAmount) => {
      createPromotion(_, orderReceipt);

      expect(resultTotalOrderAmount()).toBe(expectedAmount);
    }
  );

  test.each(totalInfoCases)(
    '적용된 이벤트 할인들의 총 혜택 금액이 알맞게 계산되는지 테스트한다.',
    (visitDate, orderReceipt, expectedInfo) => {
      createPromotion(visitDate, orderReceipt);

      expect(resultTotalSaleInfo()).toStrictEqual(expectedInfo);
    }
  );

  test.each(totalInfoCases)(
    '총 할인 금액이 알맞게 더해져 반환되는지 테스트한다.',
    (visitDate, orderReceipt, _, expectedAmount) => {
      createPromotion(visitDate, orderReceipt);

      expect(resultTotalSaleAmount()).toBe(expectedAmount);
    }
  );

  test.each(totalOrderCases)(
    '할인 후 예상 결제 금액이 알맞게 계산되어 반환되는지 테스트한다.',
    (visitDate, orderReceipt, _, totalSaleAmount, expectedAmount) => {
      createPromotion(visitDate, orderReceipt);

      expect(resultEstimatedAmount(totalSaleAmount)).toBe(expectedAmount);
    }
  );
});
