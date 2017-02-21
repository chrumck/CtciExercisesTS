// TODO: Read how to document TS code and addd the member docs.

export interface Comparable<T> {
   compareTo(other: Comparable<T>) : number;
}

export class ComparableNumber extends Number{
   compareTo(other: ComparableNumber) : number {
      if (this < other) {
         return -1;
      }
      if (this > other) {
         return 1;
      }
      return 0;
   }
}
