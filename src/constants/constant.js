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
};
