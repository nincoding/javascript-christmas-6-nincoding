const OUTPUT_MESSAGE = Object.freeze({
  startService: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  previewbenefits: (visitDate) =>
    `12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  orderMenu: '<주문 메뉴>',
  totalOrderAmount: '<할인 전 총주문 금액>',
  presentedMenu: '<증정 메뉴>',
  promotions: '<혜택 내역>',
  totalSaleAmount: '<총혜택 금액>',
  estimatedAmount: '<할인 후 예상 결제 금액>',
  eventBadge: '<12월 이벤트 배지>',
});

export default OUTPUT_MESSAGE;
