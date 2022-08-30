import Graph from '../../../data-structures/graph/Graph';
import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

/**
 * @param {Graph} graph
 * @return {Graph}
 */
export default function prim(graph) {
  // It should fire error if graph is directed since the algorithm works only
  // for undirected graphs.
  if (graph.isDirected) {
    throw new Error('Prim\'s algorithms works only for undirected graphs');
  }

  // Init new graph that will contain minimum spanning tree of original graph.
  const minimumSpanningTree = new Graph();

  // This priority queue will contain all the edges that are starting from
  // visited nodes and they will be ranked by edge weight - so that on each step
  // we would always pick the edge with minimal edge weight.
  const edgesQueue = new PriorityQueue();

  // Set of vertices that has been already visited.
  const visitedVertices = {};

  // Vertex from which we will start graph traversal.
  const startVertex = graph.getAllVertices()[0];
