import string from './models/Search'; //we don't mention the file extension, omit .js
console.log(`importing string : ${string}`);

//importing multiple functions and variable
import {add as a, multiply as m, ID} from "./views/searchView";
console.log(`Using imported functions add : ${a(3, 4)}, multiply : ${m(3, 4)} and ID : ${ID}`);

