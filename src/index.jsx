// import * as $ from "jquery";
import Post from "./models/Post";

import json from './assets/json';
import WebpackLogo from './assets/logo-webpack.png';
import xml from './assets/data.xml';
import csv from './assets/tree.csv';

import React from 'react';
import {render} from 'react-dom';

import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';


const post = new Post('WebPack Post Title', WebpackLogo);

 // jquery stoped after react was added
 // $('pre').addClass('code').html(post.toString());

const App = () => (
    <div className="container">
        <h1>
            Webpack
        </h1>
        <hr/>

        <div className="logo"></div>
        <hr/>
        <pre></pre>

        <hr/>
        <div className="box">
            <h2>Less</h2>
        </div>
        <hr/>
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('app'));

console.log('post to string', post.toString());

console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);
