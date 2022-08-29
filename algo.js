/**
 * Classifies the point in space based on k-nearest neighbors algorithm.
 *
 * @param {number[][]} dataSet - array of data points, i.e. [[0, 1], [3, 4], [5, 7]]
 * @param {number[]} labels - array of classes (labels), i.e. [1, 1, 2]
 * @param {number[]} toClassify - the point in space that needs to be classified, i.e. [5, 4]
 * @param {number} k - number of nearest neighbors which will be taken into account (preferably odd)
 * @return {number} - the class of the point
 */

 import euclideanDistance from '../../math/euclidean-distance/euclideanDistance';

 export default function kNN(
   dataSet,
   labels,
   toClassify,
   k = 3,
 ) {
   if (!dataSet || !labels || !toClassify) {
     throw new Error('Either dataSet or labels or toClassify were not set');
   }
 
   // Calculate distance from toClassify to each point for all dimensions in dataSet.
   // Store distance and point's label into distances list.
   const distances = [];
   for (let i = 0; i < dataSet.length; i += 1) {
     distances.push({
       dist: euclideanDistance([dataSet[i]], [toClassify]),
       label: labels[i],
     });
   }
 
 