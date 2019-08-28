import axios from 'axios';

export default class Search{ //the model we want to contain here is data and search results
    constructor(query){
        this.query = query;
    }
    async getResults(){
        try{
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const key = '36daac7318c7ce421d5a078ff89b65b2';
            const url = 'https://www.food2fork.com/api/search';
            var axiosResponse = await axios(`${proxy}${url}?key=${key}&q=${this.query}`);
            this.result = axiosResponse.data.recipes;
            console.log(this.result);
        }catch(error){
            console.log(error);
        }
    }
}