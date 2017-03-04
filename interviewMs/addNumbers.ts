export function addNumbers(num1: string, num2: string): string {
   if (!num1 || !num2) { return ""; }

   let { succeeded: succeeded1, parsedDigits: digits1 } = parseDigits(num1.split(""));
   let { succeeded: succeeded2, parsedDigits: digits2 } = parseDigits(num2.split(""));
   if (!succeeded1 || !succeeded2) { return ""; }

   let reversed1 = digits1.reverse();
   let reversed2 = digits2.reverse();
   let reversedSums = [0];

   for (let i = 0; i < reversed1.length; i++) {
      for (let j = 0; j < reversed2.length; j++) {
         reversedSums[i + j] = reversedSums[i + j] || 0;
         let productSum = reversed1[i] * reversed2[j] + reversedSums[i + j];
         reversedSums[i + j] = productSum % 10;

         if (productSum > 9) {
            reversedSums[i + j + 1] = reversedSums[i + j + 1] || 0;
            reversedSums[i + j + 1] += Math.trunc(productSum / 10);
         }
      }
   }

   return reversedSums.reverse().join("");
}

function parseDigits(digits: string[]): { succeeded: boolean, parsedDigits: number[] } {
   let parsedDigits: number[] = [];
   for (let digit of digits) {
      let parsed = parseInt(digit, 10);
      if (Number.isNaN(parsed)) { return { succeeded: false, parsedDigits: undefined }; }
      parsedDigits.push(parsed);
   }

   return { succeeded: true, parsedDigits };
}