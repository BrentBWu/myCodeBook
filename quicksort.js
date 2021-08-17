


function partition(items, l, r) {
    let pivot = items[Math.floor(l + (r - l) / 2)];
    while(l <= r) {
        while(items[l] < pivot) {
            l++;
        }
        while(items[r] > pivot) {
            r--;
        }
        if(l <= r) {
            swap(items, l ,r);
            l++;
            r--;
        }
    }
    return l;
}

function swap(arr, left, right) {
    let item = arr[left];
    arr[left] = arr[right];
    arr[right] = item;
}
function quickSort(items, l ,r) {
    let index;
    console.log(items);
    if(items.length > 1) {
        index = partition(items, l , r);
        if(l < index - 1) {
            quickSort(items, l, index - 1);
        }
        if(index < r) {
            quickSort(items, index, r);
        }
    }
    return items;
}
const arr = [11, 14,13,12,15]
console.log(quickSort(arr, 0, arr.length - 1), arr, quickSort());