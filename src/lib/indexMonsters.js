// 1. get books from mhw-db
// 2. index them in ES
// 3. ???
// 4. profit

// const algoliasearch = require('algoliasearch');
// const algoliasearch = require('algoliasearch/reactnative');
// const algoliasearch = require('algoliasearch/lite');
// import * as algoliasearch from 'algoliasearch'; // When using TypeScript

// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

const client = algoliasearch('MT2HPEHTBE', process.env.ALGOLIA_ADMIN_API_KEY);
const index = client.initIndex('your_index_name');