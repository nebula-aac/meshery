module.exports = {
  async rewrites() {
    return [
      {
        source : '/api',
        destination : 'http://localhost:9081/api',
      },
      {
        source : '/user/login',
        destination : 'http://localhost:9081/user/login',
      },
      {
        source : '/user/logout',
        destination : 'http://localhost:9081/user/logout',
      },
      {
        source : '/provider',
        destination : 'http://localhost:9081/provider',
      },
    ]
  },
  exportPathMap : function () {
    return {
      '/404' : { page : '/404' },
      '/configuration/applications' : { page : '/configuration/applications' },
      '/configuration/filters' : { page : '/configuration/filters' },
      '/configuration/patterns' : { page : '/configuration/patterns' },
      '/extension/[...component]' : { page : '/extension/[...component]' },
      '/extensions' : { page : '/extensions' },
      '/' : { page : '/', query : { __nextDefaultLocale : 'en' } },
      '/management/[mesh]' : { page : '/management/[mesh]' },
      '/management' : { page : '/management' },
      '/performance' : { page : '/performance' },
      '/performance/profiles' : { page : '/performance/profiles' },
      '/performance/results' : { page : '/performance/results' },
      '/settings' : { page : '/settings' },
      '/smi_results' : { page : '/smi_results' },
      '/system/connections' : { page : '/system/connections' },
      '/user/preferences' : { page : '/user/preferences' }
    };
  },
  //  exportPathMap: function (pathMap) {
  //    console.log(pathMap)
  //    if (process.env.PLAYGROUND === "true") {
  //      return {
  //        '/': { page: '/' },
  //        '/extension/*': { page: "/extension/[component]" }
  //      }
  //    } else {
  //      return pathMap
  //    }
  //  },
  images : {
    unoptimized : true,
  },
  webpack : (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "remote-component.config.js" : __dirname + "/remote-component.config.js"
    };
    return config;
  }
}