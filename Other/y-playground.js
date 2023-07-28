/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let val1 = val
      return {  toBe(value) {
          if (value === val1)  return {"value": true}
          else return {'error': 'Not Equal'}
      
      },
  
        notToBe(value) {
          if (value !== val1)  return {"value": true}
          else return {'error': 'Not Equal'}
      }
      }
  };
  
  /**
   * expect(5).toBe(5); // true
   * expect(5).notToBe(5); // throws "Equal"
   */