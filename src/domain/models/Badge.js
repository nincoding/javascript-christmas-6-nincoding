import { EMPTY_VALUE, USER_BADGE } from '../../constants/constant.js';

class Badge {
  #Badge;

  constructor(number) {
    this.#Badge = this.calcBadge(number);
  }

  calcBadge(number) {
    if (number >= 20_000) return USER_BADGE.santa;
    if (number >= 10_000) return USER_BADGE.tree;
    if (number >= 5_000) return USER_BADGE.star;
    return EMPTY_VALUE;
  }

  getBadge() {
    return this.#Badge;
  }
}

export default Badge;
