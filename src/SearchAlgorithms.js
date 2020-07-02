import { hashCoord } from './GridHelperFunctions';
import { Queue } from './DataStructures';
import { CELL_WIDTH } from './Cell';

export const breadthFirstSearch = (grid_map, start, end, speed) => {
    //grid_map is an object mapping xcoord, ycoord pairs (made using the hash
    //function in GridHelperFunctions.js) to Cell objects (a reference to the object)
    //start is a starting cell coordinate (x,y)
    //end is a ending cell coordinate (x,y)
    //updates colors of cells manually as it explores them
    console.log("running BFS")
    let q = new Queue();
    q.push(start)
    if(start === end) {
        console.log(start, "reached", end)
        return;
    }
    let explored = {}
    explored[hashCoord(start[0], start[1])] = true
    if(grid_map[hashCoord(start[0], start[1])] !== undefined){
        console.log(grid_map[hashCoord(start[0], start[1])])
        grid_map[hashCoord(start[0], start[1])].markExplored()
    }
    if(!q.isEmpty()) {
        const currentNode = q.pop()
        let x = currentNode[0]+CELL_WIDTH;
        let y = currentNode[1];
        
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                const newX = x
                const newY = y
                
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined && grid_map[hashCoord(newX, newY)].state.cellColor !== "black"){
                    grid_map[hashCoord(newX, newY)].markExplored()
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                }
                if(newX === end[0] && newY === end[1]){
                    console.log(start, "reached", end)
                    return;
                }
            }
        }

        x = currentNode[0]-CELL_WIDTH;
        y = currentNode[1];
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                const newX = x
                const newY = y
                
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined && grid_map[hashCoord(newX, newY)].state.cellColor !== "black"){
                    grid_map[hashCoord(newX, newY)].markExplored()
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                }
                if(newX === end[0] && newY === end[1]){
                    console.log(start, "reached", end)
                    return;
                }
            }
        }

        x = currentNode[0];
        y = currentNode[1]+CELL_WIDTH;
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                const newX = x
                const newY = y
                
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined && grid_map[hashCoord(newX, newY)].state.cellColor !== "black"){
                    grid_map[hashCoord(newX, newY)].markExplored()
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                }
                if(newX === end[0] && newY === end[1]){
                    console.log(start, "reached", end)
                    return;
                }
            }
        }

        x = currentNode[0];
        y = currentNode[1]-CELL_WIDTH;
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                const newX = x
                const newY = y
                
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined && grid_map[hashCoord(newX, newY)].state.cellColor !== "black"){
                    grid_map[hashCoord(newX, newY)].markExplored()
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                }
                if(newX === end[0] && newY === end[1]){
                    console.log(start, "reached", end)
                    return;
                }
            }
        }
        setTimeout(function(){ 
            breadthFirstSearchHelper(grid_map, q, end, explored, speed)
        }, speed);


    }else{
        console.log("queue became empty")
    }
}

const breadthFirstSearchHelper = (grid_map, q, end, explored, speed) => {
    if(!q.isEmpty()) {
        const currentNode = q.pop()
        let x = currentNode[0]+CELL_WIDTH;
        let y = currentNode[1];
        
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                const newX = x
                const newY = y
                
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined && grid_map[hashCoord(newX, newY)].state.cellColor !== "black"){
                    grid_map[hashCoord(newX, newY)].markExplored()
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                }
                if(newX === end[0] && newY === end[1]){
                    console.log("reached", end)
                    return;
                }
            }
        }

        x = currentNode[0]-CELL_WIDTH;
        y = currentNode[1];
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                const newX = x
                const newY = y
                
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined && grid_map[hashCoord(newX, newY)].state.cellColor !== "black"){
                    grid_map[hashCoord(newX, newY)].markExplored()
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                }
                if(newX === end[0] && newY === end[1]){
                    console.log("reached", end)
                    return;
                }
            }
        }

        x = currentNode[0];
        y = currentNode[1]+CELL_WIDTH;
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                const newX = x
                const newY = y
                
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined && grid_map[hashCoord(newX, newY)].state.cellColor !== "black"){
                    grid_map[hashCoord(newX, newY)].markExplored()
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                }
                if(newX === end[0] && newY === end[1]){
                    console.log("reached", end)
                    return;
                }
            }
        }

        x = currentNode[0];
        y = currentNode[1]-CELL_WIDTH;
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                const newX = x
                const newY = y
                
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined && grid_map[hashCoord(newX, newY)].state.cellColor !== "black"){
                    grid_map[hashCoord(newX, newY)].markExplored()
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                }
                if(newX === end[0] && newY === end[1]){
                    console.log("reached", end)
                    return;
                }
            }
        }
        setTimeout(function(){ 
            breadthFirstSearchHelper(grid_map, q, end, explored, speed)
        }, speed);


    }else{
        console.log("queue became empty")
    }
    
}

// To be completed. Should be the same as breadth first search
// except uses a stack instead of a queue. The stack does not have 
// a front() function - instead it uses peak.
export const depthFirstSearch = (grid_map, start, end, speed) => {


}