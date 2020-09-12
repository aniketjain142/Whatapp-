import axios from 'axios';

const instance =axios.create({
    baseURL:'https://whatapp-mern.herokuapp.com/'
});

export default instance