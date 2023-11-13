import throwValidationError from '../../utils/throwValidationError.js';
import { isNumeric, isInteger } from '../../utils/numericValidation.js';
import { ERROR_MESSAGE } from '../../constants/errorMessage.js';

class VisitDateValidator {
  static validate(visitDate) {
    throwValidationError(!this.isValidRange(visitDate), ERROR_MESSAGE.invalidDate);
    throwValidationError(!isNumeric(visitDate), ERROR_MESSAGE.invalidDate);
    throwValidationError(!isInteger(visitDate), ERROR_MESSAGE.invalidDate);
  }

  static isValidRange(visitDate) {
    return visitDate >= 1 && visitDate <= 31;
  }
}

export default VisitDateValidator;
