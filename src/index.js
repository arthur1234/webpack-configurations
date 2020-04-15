import * as $ from "jquery";
import Post from "./Post";
import './styles/styles.css';
import json from './assets/json';
import WebpackLogo from './assets/logo-webpack.png';
import xml from './assets/data.xml';
import csv from './assets/tree.csv';
import './styles/less.less';
import './styles/scss.scss';
import './babel';


const post = new Post('WebPack Post Title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

console.log('post to string', post.toString());

console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);
