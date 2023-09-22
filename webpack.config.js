
module.exports = {
    // ... other webpack configurations ...
  
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
      },
    },
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },
  
    // ... other webpack configurations ...
  };