let intersect = function (nums1, nums2) {
  let obj = {};
  let result = [];

  for (let i of nums1) {
    // make a hashmap of the first array of nums
    // {'1': 2, '2': 2}
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

