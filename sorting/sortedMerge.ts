import { Comparable } from "./Comparable"

/**
 * Merges two arrays, where the first one's buffer is large enough to accommodate the other.
 * @param {Comparable<T>[]} A - The larger array.
 * @param {Comparable<T>[]} B - The smaller array.
 */
export function sortedMerge<T>(A: Comparable<T>[], B: Comparable<T>[]): void {

   var shiftA = function (start: number) {
      for (let k = A.length; k > start; k--) {
         A[k] = A[k - 1];
      }
   };

   let i = 1;

   for (let j = 0; j < B.length; j++) {
      while (i < A.length) {
         if (A[i].compareTo(B[j]) > 0) {
            shiftA(i);
            A[i] = B[j];
            break;
         }

         if (i === A.length - 1) {
            A[i + 1] = B[j];
            break;
         }

         i++;
      }
   }
}