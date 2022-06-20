const path = require('path');

createPath = (page) => path.resolve(__dirname, '../views', `${page}.html`);

module.exports = createPath;