/**
 * Created by Daniel Schlaug on 2017-03-04.
 */

const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'forms.bundle.js'
    }
};