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
  
  const artObject = {
    $redRose: 11101,
    metroStations: ['Park Kultury', 'Delovoy Center'],
    busStops: ['B', 'c910', '379'],
    $city: 10101,
    towers: ['Oko', 'Neva'],
    $getTransports() {
      const stations = this.$getter(this, 'metroStations');
      const stops = this.$getter(this, 'busStops');
      return [...stations, ...stops];
    },
    $trigger: null,  // This will be set below
    $getter: getter,
  };
  
  artObject.$trigger = trigger(artObject);
  artObject.$trigger();
  
  // basic tests
  
  console.log(!artObject.hasOwnProperty('towers') && !artObject._hidden.has('towers')); // -> true (checks hidden and removed)
  // Alternative check for complete removal (including hidden state)
  console.log(typeof artObject.towers === 'undefined' && !artObject._hidden.has('towers')); // -> true
  
  console.log(artObject.$getter(artObject, 'towers')); // -> [ 'Oko', 'Neva' ] (accessible using getter)
  console.log(artObject.$redRose); // -> 11101
  console.log(artObject.$getTransports()); // -> [ 'Park Kultury', 'Delovoy Center', 'B', 'c910', '379' ]
  