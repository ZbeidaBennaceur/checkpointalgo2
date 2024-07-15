
/*
        function insertionSort(array)

    for index from 1 to length(array)

        key = array[index]

        j = index - 1

        while j >= 0 and array[j] > key

            array[j + 1] = array[j]

            j = j - 1

        array[j + 1] = key*/
        const insertionsort=(array)=> {
            
            for (let i=1; i<array.length; i++) {
                let key=array[i]
                let j=i-1
                while (j>=0 && array[j]>key) {
                    array[j+1]=array[j]
                    j=j-1
                    
                }
                array[j+1]=key
            }
            return array
        }
console.log(insertionsort([5,9,8,4,3]))
