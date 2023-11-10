const EMPTY_VALUE = Object.freeze('없음');
const EMPTY_COUNT = Object.freeze(0);

const USER_BADGE = Object.freeze({
  star: '별',
  tree: '트리',
  santa: '산타',
});

const DAY = Object.freeze({
  weekend: '주말',
  weekday: '평일',
});

const MENU = Object.freeze({
  appetizer: new Set(['양송이수프', '타파스', '시저샐러드']),
  mainDish: new Set(['티본스테이크', '바비큐립', '해산물파스타', '크리스마스파스타']),
  dessert: new Set(['초코케이크', '아이스크림']),
  drink: new Set(['제로콜라', '레드와인', '샴페인']),
});

const BADGE_PRIZE = Object.freeze({
  star: 5_000,
  tree: 10_000,
  santa: 20_000,
});

const PRESENT_EVENT_CONDITION = Object.freeze(120_000);

const SALE_PRIZE = Object.freeze({
  champagneSale: 25_000,
  specialSale: 1_000,
  startBasePrice: 1_000,
  additionalPricePerDay: 1_00,
});

const EVENT_PLANNER = Object.freeze({
  startDate: 1,
  christmas: 25,
  specialDate: [3, 10, 17, 24, 25, 31],
  weekends: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
});

export {
  EMPTY_VALUE,
  EMPTY_COUNT,
  USER_BADGE,
  BADGE_PRIZE,
  PRESENT_EVENT_CONDITION,
  SALE_PRIZE,
  EVENT_PLANNER,
  DAY,
  MENU,
};
