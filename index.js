module.exports = process.env.JSCOVER_COV ? require('./lib-cov/jscover') : require('./lib/jscover');