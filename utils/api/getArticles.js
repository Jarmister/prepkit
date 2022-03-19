
import axios from 'axios';

const { data } = await axios.get('http://localhost:1337/articles');

console.log(data);