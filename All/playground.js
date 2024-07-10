// helpers
const trigger = function (obj) {
    const hiddenProps = new Set();
    obj._hidden = new Set(); // Initialize outside the loop
    obj._hiddenValues = {};
  
