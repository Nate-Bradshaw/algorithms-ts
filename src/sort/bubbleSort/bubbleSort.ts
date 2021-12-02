
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



/*
import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    //const arraySize: number = items.length;
    for (let i = 0; i < (items.length - 1); i++) {

        let swapMade: boolean = false;
        for (let j = 0; j < (items.length - i - 1); j++) {
            if (items[j] > items[j + 1]) {
                swapMade = true;
                swap(items, j, j + 1);

            }

        }

        if (!swapMade) {
            break;

        }

    }
    return items;

}

export default bubbleSort;
*/