function getNeighbors(row, col, graph) {

  // Check top
  let answer = [];
  if((row-1) >= 0){
  if(graph[row-1][col] == 1){
    answer.push([row-1,col])
  }
}
if((row+1) < graph.length){
  if(graph[row+1][col] == 1){
    answer.push([row+1,col])
  }
}
if((col-1) >= 0){
  if(graph[row][col-1] == 1){
    answer.push([row,col-1])
  }
}
if((col+1) < graph[row].length){
  if(graph[row][col+1] == 1){
    answer.push([row,col+1])
  }
}
  return answer;
  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
}


function islandSize(row, col, graph) {
  let visited = new Set();
  let queue = [];
  let coord = [row,col];
  let size = 0;
  queue.push(coord);
  visited.add(coord.toString());
  while(queue.length !== 0){
    let currentCoord = queue.shift();
    size++;
    let currentVal = graph[currentCoord[0]][currentCoord[1]];

    let neighbours = getNeighbors(currentCoord[0],currentCoord[1],graph);
    neighbours.forEach((el) =>{
      if(visited.has(el.toString()) == false){
        visited.add(el.toString());
        queue.push(el);
        }
    })
  }
  return size;
  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];