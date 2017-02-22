import { Comparable } from "./Comparable";

/**
 * Sorts the given data with insertion sort algorithm.
 * @param {Comparable<T>[]} data - The data to sort.
 */
export function insertionSort<T>(data: Comparable<T>[]) {
   for (let i = 0; i < data.length; i++) {
      for (let j = i; j > 0; j--) {
         if (data[j].compareTo(data[j - 1]) < 0) { [data[j], data[j - 1]] = [data[j - 1], data[j]]; }
         else { break; }
      }
   }
}

