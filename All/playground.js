// helpers
const trigger = function (obj) {
    const hiddenProps = new Set();
    obj._hidden = new Set(); // Initialize outside the loop
    obj._hiddenValues = {};
  
    return function () {
      if (obj._hidden) {
        for (const prop of obj._hidden) {
          obj[prop] = obj._hiddenValues[prop];
          hiddenProps.delete(prop);
        }
        delete obj._hidden;
        delete obj._hiddenValues;
      } else {
        for (const prop in obj) {
          if (!prop.startsWith('$') && !hiddenProps.has(prop)) {
            hiddenProps.add(prop);
            obj._hidden.add(prop);
            obj._hiddenValues[prop] = obj[prop];
            delete obj[prop];
          }
        }
      }
    };
  };
  
  const getter = function (obj = {}, key) {
    if (obj.hasOwnProperty(key)) {
      return obj[key];
    } else if (obj._hidden && obj._hidden.has(key)) {
      return obj._hiddenValues[key];
    } else {
      return undefined;
    }
  };
  
  module.exports = { trigger, getter };
  
  // example
  
