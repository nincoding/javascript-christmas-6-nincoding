import ChristmasPromotion from '../src/domain/ChristmasPromotion.js';

describe('ChristmasPromotion', () => {
  let christmasPromotion;
  let resultTotalOrderAmount;
  let resultTotalSaleInfo;

  const createPromotion = (visitDate, orderReceipt) => {
    christmasPromotion = new ChristmasPromotion(visitDate, orderReceipt);
    resultTotalOrderAmount = () => christmasPromotion.getTotalOrderAmount();
    resultTotalSaleInfo = () => christmasPromotion.getTotalSaleInfo();
  };

  const totalOrderCases = [
    [25, { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 }, 142_000],
    [3, { 타파스: 1, 제로콜라: 1 }, 8_500],
    [1, { 양송이수프: 1, 해산물파스타: 1 }, 41_000],
  ];

  const totalInfoCases = [
    [
      3,
      { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 },
      { christmasDday: 1_200, special: 1_000, champagne: 25_000, 평일: 4_046 },
    ],
    [26, { 타파스: 1, 제로콜라: 1 }, { christmasDday: 0, special: 0, champagne: 0, 평일: 0 }],
    [
      2,
      { 양송이수프: 1, 해산물파스타: 1 },
      { christmasDday: 1_100, special: 0, champagne: 0, 주말: 2_023 },
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
});
