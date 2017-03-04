import "mocha";
import { expect } from "chai";

import { addNumbers } from "../../interviewMs/addNumbers";

describe('addNumbers', () => {

   it('should return 88 x 56 = 4928 ', () => {
      // Act
      let result = addNumbers("88", "56");
      // Assert
      expect(result).to.equal("4928");
   });

   it('should return 99 x 99 = 9801 ', () => {
      // Act
      let result = addNumbers("99", "99");
      // Assert
      expect(result).to.equal("9801");
   });

   it('should return 1 x 1 = 1 ', () => {
      // Act
      let result = addNumbers("1", "1");
      // Assert
      expect(result).to.equal("1");
   });

   it('should return "" x 1 = "" ', () => {
      // Act
      let result = addNumbers("", "1");
      // Assert
      expect(result).to.equal("");
   });

   it('should return "abab" x 1 = "" ', () => {
      // Act
      let result = addNumbers("abab", "1");
      // Assert
      expect(result).to.equal("");
   });

   it('should return "5646" x "4564" = "25768344" ', () => {
      // Act
      let result = addNumbers("5646", "4564");
      // Assert
      expect(result).to.equal("25768344");
   });

});
