import Badge from '../src/domain/models/Badge.js';
import { EMPTY_VALUE, USER_BADGE } from '../src/constants/constant.js';

describe('Badge 클래스 테스트', () => {
  test('총 혜택 금액이 5천원 이상일때 별 배지를 반환하는지 테스트한다.', () => {
    const badge = new Badge(5_000);

    const resultBadge = () => badge.getBadge();

    expect(resultBadge).toBe(USER_BADGE.star);
  });

  test('총 혜택 금액이 1만원 이상일때 트리 배지를 반환하는지 테스트한다.', () => {
    const badge = new Badge(10_000);

    const resultBadge = () => badge.getBadge();

    expect(resultBadge).toBe(USER_BADGE.tree);
  });

  test('총 혜택 금액이 2만원 이상일때 산타 배지를 반환하는지 테스트한다.', () => {
    const badge = new Badge(20_000);

    const resultBadge = () => badge.getBadge();

    expect(resultBadge).toBe(USER_BADGE.santa);
  });

  test('총 혜택 금액이 5천원 미만일때 없음을 반환하는지 테스트한다.', () => {
    const badge = new Badge(4_000);

    const resultBadge = () => badge.getBadge();

    expect(resultBadge).toBe(EMPTY_VALUE);
  });
});
