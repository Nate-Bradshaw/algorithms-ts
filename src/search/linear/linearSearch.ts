import { NO_MATCH } from "../common";

const linearSearch = (items: any[], item: any): number => {
    for(let i = 0; i<items.length; i++){
        if (items[i] == item){
            return i;
        }
    }
    return NO_MATCH;
}

export default linearSearch;

/*
from typing import List
from math import floor
from src.search import NO_MATCH, StrOrInt


def linearSearch(items: List[StrOrInt], itemToFind: StrOrInt) -> int:
    """
    Searches through a list by comparing every item to the criteria.
    """
    for index, item in enumerate(items):
        if item == itemToFind:
            return index

    return NO_MATCH

*/