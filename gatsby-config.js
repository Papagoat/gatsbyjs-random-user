module.exports = {
  plugins: [{
    resolve: 'gatsby-source-apiserver',
    options: {
      // Type prefix of entities from server
      typePrefix: 'internal__',

      // The url, this should be the endpoint you are attempting to pull data from
      url: 'https://randomuser.me/api/',

      method: 'get',

      headers: {
        'Content-Type': 'application/json'
      },


      // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
      // using this name. i.e. posts.json
      name: `posts`,


      // Request parameters
      // Only available from version 2.1.0
      params: {
        results: 10
      },

      verboseOutput: true, // For debugging purposes


    }
  }],
}
