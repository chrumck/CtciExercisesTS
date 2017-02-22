
/**
 * Comparable interface.
 * @template T - The type of the instances which are compared.
 */
export interface Comparable<T> {
  compareTo(other: Comparable<T>): Number;
}

/**
 * Extends base Number type with compareTo method.
 * @extends {Number}
 */
export class ComparableNumber {
  /**
   * Default constructor.
   */
  constructor(public value: number) { }

  /**
  * Compares two numbers.
  * @param {ComparableNumber} other - The other number to compare to.
  * @returns {number} - The result of the comparison: -1, 0, or 1.
  */
  compareTo(other: ComparableNumber): Number {
    if (this.value < other.value) {
      return -1;
    }
    if (this.value > other.value) {
      return 1;
    }
    return 0;
  }
}

