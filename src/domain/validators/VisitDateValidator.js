class VisitDateValidator {
  static validate(visitDate) {
    if (!this.isNumeric(visitDate)) {
      throw new Error(`[ERROR] 유효하지 않은 날짜입니다.`);
    }

    if (!this.isValidRange(visitDate)) {
      throw new Error(`[ERROR] 유효하지 않은 날짜입니다.`);
    }

    if (!this.isValidInteger(visitDate)) {
      throw new Error(`[ERROR] 유효하지 않은 날짜입니다.`);
    }
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
