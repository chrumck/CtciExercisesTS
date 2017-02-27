import "mocha";
import { expect } from "chai";

import { sortedMerge } from "../../sorting/sortedMerge";
import { ComparableNumber } from "../../sorting/Comparable";


describe('sortedMerge', () => {

   it('should merge with single value in B', () => {
      // Arrange
      let A = [new ComparableNumber(1), new ComparableNumber(3)];
      let B = [new ComparableNumber(2)];
      // Act
      sortedMerge(A, B);
      // Assert
      expect(A).to.have.lengthOf(3);
      expect(A[0].value).to.equal(1);
      expect(A[1].value).to.equal(2);
      expect(A[2].value).to.equal(3);
   });

   it('should merge with two same values in B', () => {
      // Arrange
      let A = [new ComparableNumber(1), new ComparableNumber(3)];
      let B = [new ComparableNumber(2), new ComparableNumber(2)];
      // Act
      sortedMerge(A, B);
      // Assert
      expect(A).to.have.lengthOf(4);
      expect(A[0].value).to.equal(1);
      expect(A[1].value).to.equal(2);
      expect(A[2].value).to.equal(2);
      expect(A[3].value).to.equal(3);
   });

   it('should merge with B elements added to the end of A', () => {
      // Arrange
      let A = [new ComparableNumber(1), new ComparableNumber(3)];
      let B = [new ComparableNumber(2), new ComparableNumber(4), new ComparableNumber(5)];
      // Act
      sortedMerge(A, B);
      // Assert
      expect(A).to.have.lengthOf(5);
      expect(A[0].value).to.equal(1);
      expect(A[1].value).to.equal(2);
      expect(A[2].value).to.equal(3);
      expect(A[3].value).to.equal(4);
      expect(A[4].value).to.equal(5);
   });

});
