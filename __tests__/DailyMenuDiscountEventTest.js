import DailyMenuDiscountEvent from '../src/domain/models/DailyMenuDiscountEvent.js';
import { DAY } from '../src/constants/constant.js';

describe('DailyMenuDiscountEvent', () => {
  let dailyMenuDiscountEvent;
  let resultVisitDay;

  const createEvent = (visitDate, orderReceipt) => {
    dailyMenuDiscountEvent = new DailyMenuDiscountEvent(visitDate, orderReceipt);
    resultVisitDay = () => dailyMenuDiscountEvent.getVisitDay();
  };

  const weekdayTestCases = [
    [3, { menuName: 2 }, DAY.weekday],
    [25, { menuName: 1 }, DAY.weekday],
  ];

  const weekendTestCases = [
    [1, { menuName: 3 }, DAY.weekend],
    [30, { menuName: 2 }, DAY.weekend],
  ];

  test.each(weekdayTestCases)(
    '방문날짜가 평일인 경우 평일이 반환되는지 테스트한다.',
    (visitDate, orderReceipt, expectedDay) => {
      createEvent(visitDate, orderReceipt);

      expect(resultVisitDay()).toBe(expectedDay);
    }
  );

  test.each(weekendTestCases)(
    '방문날짜가 주말인 경우 주말이 반환되는지 테스트한다.',
    (visitDate, orderReceipt, expectedDay) => {
      createEvent(visitDate, orderReceipt);

      expect(resultVisitDay()).toBe(expectedDay);
    }
  );
});
