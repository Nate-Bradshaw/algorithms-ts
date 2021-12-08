import { SortAlgorithm } from "../common";
import swap from "../swap";

const insertionSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    let outList = items;
    for(let i = 0; i < items.length; i++){
        let itemToPlace = outList[i];
        let itemPlace = i;

        while(itemPlace>0){
            let low = itemPlace - 1;
            let high = itemPlace;

            if(outList[low] > itemToPlace){
                swap(outList, low, high);
            }
            else{
                itemPlace = high;
                break;
            }
            itemPlace -= 1;
        }
    }

    return outList;
}

export default insertionSort; 