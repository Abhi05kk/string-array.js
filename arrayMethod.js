// 1. concat -:
// The JavaScript Array.concat() method is used to join or concatenate two or more arrays. After joining, 
// this method will not change the existing arrays that we want to join; instead, it returns a new array 
// as a result containing the joined arrays. Internally, this method creates a new array, then it copies 
// all the elements of the first array into the new array. It then copies all the elements of the second 
// array into the new array, and so on for each additional array provided. The result will be a single array 
// containing all the elements from the original arrays in the order they were concatenated.

    let num1 = [11, 12, 13],
    num2 = [14, 15, 16],
    num3 = [17, 18, 19];
    console.log(num1.concat(num2, num3));


// 2. every -:
// The JavaScript Array every() method is an iteration method that tests whether every element in a collection 
// satisfies a given condition passed via a callback function. It is used to verify if all items in an array 
// fulfill some requirement, typically expressed in the form of a complex set of conditions. JavaScript every 
// traverses till the end of the array to test whether all elements satisfy the condition specified in the callback 
// function,callbackFn. It attempts to execute callbackFn once for each item in the array. If it finds one that 
// evaluates to a falsy value, it immediately returns with the Boolean false. Otherwise, it seeks to traverse to the 
// end of the array and returns true.

    function ispositive(element, index, array) {
        return element > 0;
}
    let arr = [11, 89, 23, 7, 98];
    let value = arr.every(ispositive);
    console.log(value);


// 3. fill -: 
// The fill() method in JavaScript is used to fill all the elements of an array from a start index to an end index with a 
// static value. It mutates the original array and returns the modified array. It defines the static value with which the 
// array elements are to be replaced.

    let number = [1, 2, 3, 4];
    console.log(number.fill(0, 2, 4));


// 4. find -:
// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned. If you need the index of the found element in the array, use 
// findIndex() .

    let num = [10, 20, 30, 40, 50];
    let total = num.find(function (element) {
        return element > 20;
    });
    console.log(total);


// 5. findIndx -:
// The findIndex method in JavaScript is used when you want to find the index of the first element in an array that satisfies  
// a given condition. It’s particularly useful when you have an array of objects or complex data structures and need to locate 
// a specific element  based on certain criteria. Instead of manually iterating through the array and checking each element, 
// findIndex provides a concise and efficient solution. It returns the index of the first matching element or -1 if no match is found.  
// This method can be utilized in various scenarios, such as filtering data, implementing search functionalities or performing conditional
//  operations on array elements.

    let array = [-10, -0.20, 0.30, -40, -50];
    let found = array.findIndex(function (element) {
        return element > 0;
    });
    console.log(found);


// 6. flat -:
// The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array. 
// It concatenates all the elements of the given multidimensional array, and flats upto the specified depth. We can specify 
// the depth limit to where we need to flatten the array. By default, the depth limit is 1.

    const numbers = [['2', '4' ,'6'], ['8', '10',
        ['12', ['14'], '16']]];

    const flatNumbers = numbers.flat(Infinity);
    console.log(flatNumbers);


// 7. includes -:
// The Array includes() method in JavaScript is a built-in function used to search for a specific element within an array. 
// Whether it's a number, string, or any other character, includes() performs a case-sensitive search to determine the presence 
// of the specified value in the array. Return type of array includes javascript is boolean, yielding true if the element is 
// found and false if not. In essence, includes() allows for efficient checking of array contents. When invoked, it returns true 
// if the specified value exists within the array, and false otherwise. This simplicity and effectiveness make it a valuable tool 
// for JavaScript developers when dealing with array operations.

    let A = [1, 2, 3, 4, 5];
    A = A.includes(2)
    console.log(A);


// 8. indexOf -:
// The indexOf() function in JavaScript is used to find the first occurrence of a specified value within an array or string. 
// It returns the index at which the value is found, or -1 if the value is not found.

    let fruit = ['mango', 'apple', 'grapes', 'orange'];
    b  = fruit.indexOf('pappaya')
    console.log(b)

// 9. join -:
// The JavaScript join() method works by traversing the elements of an array, converting them into strings, and then combining 
// them using a specified delimiter or separator. This separator is customizable, meaning you can choose any character or set 
// of characters to join the array elements. This powerful function provides seamless control over string concatenation and 
// array manipulation within JavaScript projects. 

    function func() {
    let a = [1, 2, 3, 4, 5, 6];
    console.log(a.join('_'));
    }
    func();


// 10. lastIndexOf -:
// The lastIndexOf() method returns the last index (position) of a specified value. The lastIndexOf() method returns -1 
// if the value is not found. The lastIndexOf() starts at a specified index and searches from right to left 
// (from the given postion to the beginning of the array).

    const animals = ['Lion', 'Tiger', 'Penguin', 'Lion'];
    console.log(animals.lastIndexOf('Lion'));


// 11. pop -:
// In JavaScript, the Array.pop() method is used to remove the last element from an array and returns that element. 
// It modifies the original array by decreasing its length by one. This method can only remove one element in a single attempt.
// By using this method, we can remove the element from the "end of an array". If the array is empty, it returns "undefined" 
// as the result.

    let name = ['manu', 'akhil', 'vishnu', 'raju'];
    console.log(name.pop());


// 12. push -:
// The push() method adds new items to the end of an array. The push() method changes the length of the array. 
// The push() method returns the new length.

    let arry = ['pappaya', 'banana', 'gua'];
    arry.push('watermelon');
    console.log(arry);


// 13. Reverse -:
// The JavaScript Array reverse() method reverses the order of the elements in an array in place. The first array 
// element becomes the last, and the last element becomes the first, and so on. It modifies the original array and 
// returns a reference to the reversed array.


    let num4 = [10, 30, 50, 70, 90];
    console.log(num4);
    let new_num4 = num4.reverse();
    console.log(new_num4);


// 14. unshift -:
// The unshift() method is a built-in function in JavaScript that allows you to add one or more elements to the 
// beginning of an array. This method can greatly simplify your code, making it more efficient and easier to read.

    let num5 = [15, 68, 29, 104];
    console.log(num5.unshift(28, 85));
    console.log(num5);


// 15. shift -:
// Javascript Shift is an inbuilt Array method that removes the first element from an array and returns the removed element. 
// By doing so, the element in the zeroth index is removed and the items in the consecutive indexes are moved forward.

    let array1 = ["101", "202", "303", "404"];
    let value1 = array1.shift();
    console.log(value1);
    console.log(array1);


// 16. slice -:
// The Array slice() method returns selected elements in an array as a new array. It selects from a given start, 
// up to a (not inclusive) given end. This method does not change the original array, enabling non-destructive 
// extraction of array segments.

    let arr1 = [100, 80, 60, 40, 20, 10];
    let new_arr1 = arr1.slice(2, 5);
    console.log(arr1);
    console.log(new_arr1);


// 17. some -:
// The Array.some() method tests if at least one element in an array passes the provided test function. 
// If at least one element satisfies the condition, it returns true; otherwise, it returns false.

    function checkAvailability(arr, val) {
        return arr.some(function (arrVal) {
            return val === arrVal;
        });
    }
    let arr2 = [18, 3, 29, 7, 9];
    console.log(checkAvailability(arr2, 3));
    console.log(checkAvailability(arr2, 87)); 


// 18. sort -:
// The sort() method of Array instances sorts the elements of an array in place and returns the reference 
// to the same array, now sorted. The default sort order is ascending, built upon converting the elements 
// into strings, then comparing their sequences of UTF-16 code units values.The time and space complexity 
// of the sort cannot be guaranteed as it depends on the implementation. 

    let arr3 = [3, 7, 9, 1, 6]
    console.log(arr3.sort());


// 19. splice -:
// JavaScript Array splice() Method is an inbuilt method in JavaScript that is used to change the contents of 
// an array by removing or replacing existing elements and/or adding new elements. It modifies the original 
// array and returns an array of the removed elements.

    let languages = ["HTML", "CSS", "JS", "Bootstrap"];
    console.log(languages);
    let removed = languages.splice(2, 1, 'PHP', 'React_Native')
    console.log(languages);
    console.log(removed);


// 20. toString -:
// The toString() method returns a string with array values separated by commas. The toString() method does not 
// change the original array. This method converts an array into a readable string format, often for display or logging purposes.

    let arr4 = [2, 4, 6, 8, 10];
    let str = arr4.toString();
    console.log(str);


// 21. Filter -:
// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does 
// not execute the function for empty elements. The filter() method does not change the original array.

    function canVote(age) {
        return age >= 18;
    }

    function func() {
        let filtered = [25, 43, 15, 30, 18, 65].filter(canVote);
        console.log(filtered);
    }
    func();

// 22. Reduce -:
// The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on 
// each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. 
// The returned single value is stored in the accumulator. Thus, array reduce JavaScript is a non-mutating method. This means that 
// instead of changing the actual value variable, it will hold the computed value in the accumulator without changing the original 
// value variable.

    let arr5 = [10, 20, 30, 40, 50, 60];
    function sumofArray(sum, num) {
        return sum + num;
    }
    function myValue(item) { 
        console.log(arr5.reduce(sumofArray));
    }
    myValue();

// 23. Map -:
// The map() method in JavaScript creates a new array by applying a function to each element of the original array. It skips empty 
// elements and does not alter the original array, making it ideal for transforming data.

    let arr6 = [2, 4, 6, 8, 10, 12];
    let newArr = arr6.map(function (val, index) {
        return { Num: index, value: val * val };
    })
    console.log(newArr)

// 24. forEach -:
// The forEach() method calls a function for each element in an array. It does not return a new array and does not modify the original array. 
// It’s commonly used for iteration and performing actions on each array element.

    const items = [1, 25, 67, 32, 43];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item * item);
    });
    console.log(copy);


