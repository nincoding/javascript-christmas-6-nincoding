import throwValidationError from '../../utils/throwValidationError.js';
import { ERROR_MESSAGE } from '../../constants/errorMessage.js';

class VisitDateValidator {
  static validate(visitDate) {
    throwValidationError(!this.isNumeric(visitDate), ERROR_MESSAGE.invalidDate);
    throwValidationError(!this.isValidRange(visitDate), ERROR_MESSAGE.invalidDate);
    throwValidationError(!this.isValidInteger(visitDate), ERROR_MESSAGE.invalidDate);
  }

  static isNumeric(visitDate) {
    const numberRegExp = /^\d+$/;

    return numberRegExp.test(visitDate) && !Number.isNaN(Number(visitDate));
  }

  static isValidRange(visitDate) {
    return visitDate >= 1 && visitDate <= 31;
  }

  static isValidInteger(visitDate) {
    return Number.isInteger(Number(visitDate));
  }
}

export default VisitDateValidator;
