// 1. concat -:
// The concat() method joins two or more strings. The concat() method does not change the existing strings. 
// The concat() method returns a new string. This method efficiently combines multiple strings into one, 
// ensuring the original strings remain unchanged. It does not change the original strings; instead, 
// it returns a new string with the concatenated values.

function func() {
    let newStr = 'Hello';
    let value = snewStr.concat(' welcome to', ' java script');
    console.log(value);
}
func();


// 2. includes -:
// The includes() method returns true if a string contains a specified string. Otherwise, it returns false. 
// The includes() method is case-sensitive and can accept an optional start position parameter, simplifying 
// substring searches within strings for various applications.

    let string = "Welcome to JS String method.";
    let check = string.includes("String");
    console.log(check);


// 3. indexOf -:
// The JavaScript String indexOf() method finds the index of the first occurrence of the argument string 
// in the given string. The value returned is 0-based. The indexOf() method is case-sensitive.

    let str0 = 'Hello World';
    let index0 = str0.indexOf('World');
    console.log(index0);


// 4. lastIndexOf -:
// The lastIndexOf() method in JavaScript is used to search for the last occurrence of a specified substring 
// within a string. It returns the index of the last occurrence of the specified substring, or -1 if the 
// substring is not found.

    let str1 = 'Welcome to string method';
    let index1 = str1.lastIndexOf('for');
    console.log(index1);


// 5. padEnd -:
// The padEnd() method of String values pads this string with a given string (repeated, if needed) so that 
// the resulting string reaches a given length. The padding is applied from the end of this string.

    function padStrings() {
        String1 = "Welcome to";
        String0 = "String";

        output = String1.padEnd(15, "#");
        output2 = String0.padEnd(15, "JS");

        console.log(output);
        console.log(output2);
    }
    padStrings()


// 6. padStart -:
// The padStart() method pads the current string with another string (repeated, if needed) so that the resulting 
// string reaches the given length. The padding is applied from the start (left) of the current string. Keep prepending 
 // a string to another string until the target length is met.
    
    function padStrings() {
        String6 = "Welcome to";
        String7 = "String";
    
        output = String6.padStart(15, "#");
        output2 = String7.padStart(15, "JS");
    
        console.log(output);
        console.log(output2);
    }
    padStrings()
    

// 7. repeat -:
// The repeat() method returns a new string that consists of the original string repeated count times. 
// If count is 0 or negative, an empty string is returned. If count is not an integer, it is truncated to an integer.
    
    let newStr = "Java Script";
    let repeatCount = newStr.repeat(3);
        console.log(repeatCount);
    

// 8. replace -:\
// The JavaScript string replace() method is used to replace a part of a given string with a new substring. 
// This method searches for specified regular expression in a given string and then replace it if the match occurs.
// We can use global search modifier with replace() method to replace all the match elements otherwise the method 
// replace only first match. JavaScript also provides ignore flag to make the method case-insensitive. 
    
    let originalString = "Using JS, we can change the color of a webpage's background, text, and elements.";
    let newString = originalString
        .replace("color", "colour")
        .replace("JS", "JavaScript");
    console.log(newString);


// 9. search -:
// The search() method in JavaScript is used to search for a specified substring within a string. It returns
// the index of the first occurrence of the substring within the string. If the substring is not found, it returns -1.

    let string2 = "Web Development";
    let searchString = "l";
    let Result = string2.search(searchString);
    console.log(Result);

    
// 10. slice -:
// The JavaScript string slice() method is used to fetch the part of the string and returns the new string. 
// It required to specify the index number as the start and end parameters to fetch the part of the string. 
// The index starts from 0. This method allows us to pass a negative number as an index. In such case, the 
// method starts fetching from the end of the string. It doesn't make any change in the original string.

    let string3 = 'JS String method';
    let newstring = string3.slice(0, 8);
    console.log(newstring); 


// 11. split -:
// JavaScript split() method proves invaluable for breaking down strings into arrays of substrings, utilizing 
// a designated separator as a reference point. This method breaks the original string into segments wherever 
// the separator occurs, generating an array where each element corresponds to a distinct substring. By using 
// split(), developers gain a powerful tool for parsing and organizing string data according to specific delimiters or patterns. 

function func() {
    let str = 'JS is a programming language for the web'
    let array = str.split("for");
    console.log(array);
}
func(); 


// 12. startsWith -:
// The startsWith () is a method of string that determines if the string starts with the specified characters 
// of a string. Then results either true or false, whichever is appropriate as an output. The method returns true 
// if it finds that the input string begins with the specified characters of a string else returns false as an output.
// Also, the startsWith () method is case-sensitive.

    let str2 = 'Hello world, welcome to JS.';
    let values = str2.startsWith('Hello');
    console.log(values);


// 13. substr -:
// The JavaScript string substr() method fetch the part of the given string and return the new string. The number 
// of characters to be fetched depends upon the length provided with the method. This method doesn't make any change 
// in the original string.

    let str3 = 'Hyper text markup language.';
    let sub_str = str3. substr(5, 12);
    console.log(sub_str);


// 14. substring -:]
// The substring() method in JavaScript extracts characters between two indices from a string, returning the substring 
// from the start to the end index (exclusive). It preserves the original string and is useful for extracting specific 
// portions efficiently.

    const str4 = "Hyper text markup language";
    const result = str4.substring(11);
    console.log(result);


// 15. toLowerCase -:]
// The toLowerCase() method is a string method that returns a new string that's completely lowercase. If the original 
// string has uppercase letters, in the new string these will be lowercase. Any lowercase letter, or any character that 
// is not a letter, is not affected.

    let language = 'JAVA SCRIPT, HTML, CSS';
    let string4 = language.toLowerCase();
    console.log(string4);


// 16. toUpperCase -:
// The toUpperCase() method is a string method that returns a new string that's completely toUpperCase. If the original 
// string has lowercase letters, in the new string these will be toUpperCase. Any toUpperCase letter, or any character that 
// is not a letter, is not affected.

    let language1 = 'java script, html, css';
    let string5 = language1.toUpperCase();
    console.log(string5);


// 17. trim -:
// The trim() method removes whitespace from both sides of a string. It doesn’t alter the original string, making it 
// ideal for sanitizing user input or trimming unnecessary spaces from strings, enhancing data cleanliness and 
// processing efficiency. This method does not modify the original string, it returns a new trimmed string.

    let str5 = "Welcome to string method               ";
    let st = str5.trim();
    console.log(st);


// 18. trimEnd (or trimRight) -:
// The trimEnd() method in JavaScript is used to remove white space from the end of a string. The value of the string 
// is not modified in any manner, including any white-space present before the string. The trimEnd and trimRight methods 
// of JavaScript string. Both methods are used to perform the same task and their implementation.
    str01 = " Welcome world  ";
    str02 = " Hello There! ";

    trimmed_out = str01.trimEnd();
    trimmed_out2 = str02.trimEnd();

    console.log('"' + trimmed_out + '"');
    console.log('"' + trimmed_out2 + '"');


// 19. trimStart (or trimLeft) -:
// The trimStart() method in JavaScript is used to remove whitespace from the beginning of a string. The value of the string 
// is not modified in any manner, including any whitespace present after the string. 

    str03 = " String method  ";
    str04 = " Array method! ";

    trimmed_out = str03.trimStart();
    trimmed_out2 = str04.trimStart();

    console.log('"' + trimmed_out + '"');
    console.log('"' + trimmed_out2 + '"');


// 20. charAt -:
// The JavaScript String charAt() method retrieves the character at a specified index in a string. The index is passed 
// as an argument to the method, and it returns the character at that position.

    let str6 = 'JavaScript is object oriented language';

    // Finding the character at given index
    let value0 = str6.charAt(5);
    let value01 = str6.charAt(12);
    console.log(value0);
    console.log(value01);


// 21. charCodeAt -:
// The JavaScript str.charCodeAt() method returns a Unicode character set code unit of the character present at the 
// index in the string specified as the argument. The index number ranges from 0 to n-1, where n is the string’s length.

    let str7 = 'bootstrap';
    let value2 = str7.charCodeAt(4);
    console.log(value2);
