
import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    let itemsOut = items; 

    for(let i = 0; i<items.length-1; i++){
        let swaped = false;

        for(let j = 0; j<items.length-i-1; j++){
            if(itemsOut[j] > itemsOut[j+1]){
                swaped = true;
                swap(itemsOut, j, j+1)
            }
        }

        if(!swaped){
            break;
        }
    }

    return itemsOut;
}

export default bubbleSort;

