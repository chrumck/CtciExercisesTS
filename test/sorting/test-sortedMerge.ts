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
      sortedMerge(A, B)
      // Assert
      expect(A).to.have.lengthOf(3);
      expect(A[0].value).to.equal(1)
      expect(A[1].value).to.equal(2)
      expect(A[2].value).to.equal(3)
   });

});
