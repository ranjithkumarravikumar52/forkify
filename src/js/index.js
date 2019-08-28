import string from './models/Search'; //we don't mention the file extension, omit .js
console.log(`importing string : ${string}`);

//importing multiple functions and variable
import {add, multiply, ID} from "./views/searchView";
console.log(`Using imported functions add : ${add(3, 4)}, multiply : ${multiply(3, 4)} and ID : ${ID}`);

