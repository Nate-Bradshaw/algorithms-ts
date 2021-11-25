import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {

    let result: number = -2;
    let low: number = 0;
    let high: number = items.length - 1;

    while(result == -2){
        let mid: number = Math.floor((low + high) / 2)

        if(item == items[mid]){
            result = mid; //found
        }
        else if(low == high){
            result = -1; //exit
        }
        else if(item < items[mid]){
            if (mid == 0){
                result = -1;
            }
            high = mid - 1
        }
        else if(item > items[mid]){
            if(mid == items.length - 1){
                result = -1;
            }
            low = mid + 1;
        }
    }
    if (result == -1){
        return NO_MATCH;
    }
    else{
        return result;
    }
}

export default binarySearch;


/*
def binarySearch(items: List[StrOrInt], itemToFind: StrOrInt) -> int:
    result: int = None

    # Calculate initial values of lowest/highest pointers to encapsulate whole list
    lowest_ptr: int = 0
    highest_ptr: int = len(items) - 1

    while result == None:
        # Calculate new middle and make the comparison
        middle_ptr: int = floor((lowest_ptr + highest_ptr) / 2)

        if itemToFind == items[middle_ptr]:
            # Item found, return its index
            result = middle_ptr

        elif lowest_ptr == highest_ptr:
            # This is the exit condition, we haven't found what we are looking for
            result = NO_MATCH

        elif itemToFind < items[middle_ptr]:
            # If the item is smaller than the middle, look in the lower half
            if middle_ptr == 0:
                result = NO_MATCH
            highest_ptr = middle_ptr - 1

        elif itemToFind > items[middle_ptr]:
            # The item is larger than the middle, look in the upper half
            if middle_ptr == len(items) - 1:
                result = NO_MATCH
            lowest_ptr = middle_ptr + 1

    return result

*/