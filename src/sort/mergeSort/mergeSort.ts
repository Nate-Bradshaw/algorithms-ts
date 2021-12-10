import { SortAlgorithm } from "../common";

const mergeSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    if(items.length == 0){
        return items;
    }

    //Merge(items, 0, items.length - 1);

    return Merge(items, 0, items.length - 1); //???
    //return items;
}

function Merge<T>(input_list: T[], left_pointer: number, right_pointer: number): T[]{
    if(left_pointer == right_pointer){
        return [input_list[left_pointer]];
    }

    let middle = Math.floor((left_pointer + right_pointer) / 2);

    let first_half: T[] = Merge(input_list, left_pointer, middle)
    let second_half: T[] = Merge(input_list, middle + 1, right_pointer);

    let output_list: T[] = [];
    while(first_half.length > 0 && second_half.length > 0){
        if(first_half[0] > second_half[0]){
            let item = second_half.shift();
            if (!!item) output_list.unshift(item)

            //output_list.push(second_half.pop());
        }
        else{
            let item = second_half.pop();
            if (!!item) output_list.push(item)
            //output_list.push(first_half.pop());
        }
    }

    // Push each item from the half
    first_half.forEach((x: T) => output_list.push(x))
    second_half.forEach((x: T) => output_list.push(x))
0
    //output_list.push(first_half)
    //output_list.push(second_half)

    return output_list;
}

export default mergeSort; 
