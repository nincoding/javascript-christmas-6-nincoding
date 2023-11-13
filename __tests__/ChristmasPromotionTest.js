import ChristmasPromotion from '../src/domain/ChristmasPromotion.js';

describe('ChristmasPromotion', () => {
  let christmasPromotion;

  const createPromotion = (visitDate, orderReceipt) => {
    christmasPromotion = new ChristmasPromotion(visitDate, orderReceipt);
  };

  const totalTestCases = [
    [
      26,
      [{ 타파스: 1 }, { 제로콜라: 1 }],
      8_500,
      0,
      {
        '크리스마스 디데이 할인': 0,
        '특별 할인': 0,
        '증정 이벤트': 0,
      },
      0,
      8_500,
      '없음',
    ],
    [
      3,
      [{ 티본스테이크: 1 }, { 바비큐립: 1 }, { 초코케이크: 2 }, { 제로콜라: 1 }],
      142_000,
      1,
      {
        '크리스마스 디데이 할인': 1_200,
        '평일 할인': 4_046,
        '특별 할인': 1_000,
        '증정 이벤트': 25_000,
      },
      31_246,
      135_754,
      '산타',
    ],
  ];

  test.each(totalTestCases)(
    '총 주문 금액이 정확히 계산되는지 테스트한다.',
    (visitDate, orderReceipt, expected) => {
      createPromotion(visitDate, orderReceipt);

      expect(christmasPromotion.getTotalOrderAmount()).toBe(expected);
    }
  );

  test.each(totalTestCases)(
    '증정 샴페인 개수가 정확히 계산되는지 테스트한다.',
    (visitDate, orderReceipt, _, expected) => {
      createPromotion(visitDate, orderReceipt);

      expect(christmasPromotion.getPresentedChampagne()).toBe(expected);
    }
  );

  test.each(totalTestCases)(
    '혜택 내역 정보가 정확히 계산되는지 테스트한다.',
    (visitDate, orderReceipt, _, __, expected) => {
      createPromotion(visitDate, orderReceipt);

      expect(christmasPromotion.getTotalSaleInfo()).toStrictEqual(expected);
    }
  );

  test.each(totalTestCases)(
    '총 할인 금액이 정확히 계산되는지 테스트한다.',
    (visitDate, orderReceipt, _, __, ___, expected) => {
      createPromotion(visitDate, orderReceipt);

      expect(christmasPromotion.getTotalSaleAmount()).toBe(expected);
    }
  );

  test.each(totalTestCases)(
    '할인이 적용된 후 예상 결제 금액이 정확히 계산되는지 테스트한다.',
    (visitDate, orderReceipt, _, __, ___, _____, expectedAmount) => {
      createPromotion(visitDate, orderReceipt);

      expect(christmasPromotion.getEstimatedAmount()).toBe(expectedAmount);
    }
  );

  test.each(totalTestCases)(
    '총 할인 금액을 기준으로 알맞는 배지를 반환하는지 테스트한다.',
    (visitDate, orderReceipt, _, __, ___, ____, _____, expected) => {
      createPromotion(visitDate, orderReceipt);

      expect(christmasPromotion.getBadge()).toBe(expected);
    }
  );
});
