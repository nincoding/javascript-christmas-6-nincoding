const EMPTY_VALUE = Object.freeze('없음');
const EMPTY_COUNT = Object.freeze(0);

const USER_BADGE = Object.freeze({
  star: '별',
  tree: '트리',
  santa: '산타',
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
});

const EVENT_PLANNER = Object.freeze({
  specialDay: [3, 10, 17, 24, 25, 31],
});

export {
  EMPTY_VALUE,
  EMPTY_COUNT,
  USER_BADGE,
  BADGE_PRIZE,
  PRESENT_EVENT_CONDITION,
  SALE_PRIZE,
  EVENT_PLANNER,
};
