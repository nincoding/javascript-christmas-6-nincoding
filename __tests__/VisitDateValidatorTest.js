import VisitDateValidator from '../src/domain/validators/visitDateValidator.js';

describe('VisitDateValidator', () => {
  const invalidErrorMessage = () => `[ERROR] 유효하지 않은 날짜입니다.`;

  const invalidTestData = [0, 32, '1a', 1.5, '', 'abc'];

  test.each(invalidTestData)(
    '방문 날짜가 유효하지 않으면 에러메세지를 출력하는지 테스트한다.',
    (visitDate) => {
      const validateVisitDate = () => VisitDateValidator.validate(visitDate);
      const expectedErrorMessage = invalidErrorMessage();

      expect(validateVisitDate).toThrowError(expectedErrorMessage);
    }
  );
});
