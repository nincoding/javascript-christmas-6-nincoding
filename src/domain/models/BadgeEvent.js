import { EMPTY_VALUE, USER_BADGE, BADGE_PRIZE } from '../../constants/constant.js';

class BadgeEvent {
  #Badge;

  constructor(totalDiscountAmount) {
    this.#Badge = this.#calcBadge(totalDiscountAmount);
  }

  #calcBadge(totalDiscountAmount) {
    if (totalDiscountAmount >= BADGE_PRIZE.santa) return USER_BADGE.santa;
    if (totalDiscountAmount >= BADGE_PRIZE.tree) return USER_BADGE.tree;
    if (totalDiscountAmount >= BADGE_PRIZE.star) return USER_BADGE.star;

    return EMPTY_VALUE;
  }

  getBadge() {
    return this.#Badge;
  }
}

export default BadgeEvent;
