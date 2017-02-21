import 'mocha';
import 'chai';

import { insertionSort } from "../../sorting/insertionSort";
import { ComparableNumber } from "../../sorting/Comparable";

describe('insertionSort', () => {

   it('should not blow up on a single value', () => {
      
      let sampleData = [new ComparableNumber(123)];
      insertionSort(sampleData);
      
      throw Error("boom");

      // TODO: figure out how to use chai
   });
});
