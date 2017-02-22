import "mocha";
import { expect } from "chai";

import { insertionSort } from "../../sorting/insertionSort";
import { ComparableNumber } from "../../sorting/Comparable";


describe('insertionSort', () => {

   it('should not blow up on a single value', () => {
      // Arrange
      let sampleData = [new ComparableNumber(123)];
      // Act
      insertionSort<Number>(sampleData);
      // Assert
      expect(sampleData).to.have.lengthOf(1);
   });

   it('should sort two items', () => {
      // Arrange
      let sampleData = [new ComparableNumber(2), new ComparableNumber(1)];
      // Act
      insertionSort(sampleData);
      // Assert
      expect(sampleData).to.have.lengthOf(2);
      expect(sampleData[0].value).to.equal(1);
      expect(sampleData[1].value).to.equal(2);
   });

   it('should sort three descending items', () => {
      // Arrange
      let sampleData = [new ComparableNumber(3), new ComparableNumber(2), new ComparableNumber(1)];
      // Act
      insertionSort(sampleData);
      // Assert
      expect(sampleData).to.have.lengthOf(3);
      expect(sampleData[0].value).to.equal(1);
      expect(sampleData[1].value).to.equal(2);
      expect(sampleData[2].value).to.equal(3);
   });

   it('should sort three items out of order', () => {
      // Arrange
      let sampleData = [new ComparableNumber(2), new ComparableNumber(3), new ComparableNumber(1)];
      // Act
      insertionSort(sampleData);
      // Assert
      expect(sampleData).to.have.lengthOf(3);
      expect(sampleData[0].value).to.equal(1);
      expect(sampleData[1].value).to.equal(2);
      expect(sampleData[2].value).to.equal(3);
   });

});
