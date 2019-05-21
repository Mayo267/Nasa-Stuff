import axios from "axios";

export default {
    //? Might have to change the API Key set-up...
    getAPOD: function(){
        return axios.get("https://api.nasa.gov/planetary/apod?api_key=muj9KObDmDa0pNdJlRdLZnsPfNHLrh8uktE0tfr5");
    }
};