import { Comparable } from "./Comparable";

// TODO: add testing. Read how to document TS code and addd the member docs.
export function insertionSort<T>(data: Comparable<T>[]) {
   for (let i = 0; i < data.length; i++) {
      for (let j = i; j > 0; j--) {
         if (data[j].compareTo(data[j - 1]) < 0) { [data[j], data[j - 1]] = [data[j - 1], data[j]]; }
         else { break; }
      }
   }
}

