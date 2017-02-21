// TODO: add testing. Read how to document TS code and addd the member docs.

export interface Comparable<T> {
   compareTo(other: Comparable<T>);
}

export function InsertionSort<T>(data: Comparable<T>[]) {
   for (let i = 0; i < data.length; i++) {
      let j = i - 1;
      while (j >= 0 && data[j + 1].compareTo(data[j]) < 0) {
         [data[j], data[j + 1]] = [data[j + 1], data[j]];
         j--;
      }
   }
}

