import axios from 'axios'; //convention to follow the same name as package

/*
 * Reasons why we use axios over fetch.
 * Better error handling, no need for extra json format conversion, backward compatibility
 *
 * fetch(query) //old browsers doesn't recognize fetch, so we use axios
 */
async function getResults(query){
    try{
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '36daac7318c7ce421d5a078ff89b65b2';
        const url = 'https://www.food2fork.com/api/search';
        var axiosResponse = await axios(`${proxy}${url}?key=${key}&q=${query}`);
        return axiosResponse;
    }catch(error){
        console.log(error);
    }
}
getResults('biryani').then(result => {
    console.log(result);
});