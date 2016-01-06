exports.config = {

    capabilities: [{
        browserName: 'chrome'
    }],
 
    logLevel: 'silent',
  
    coloredLogs: true,
  
    screenshotPath: 'shots',
   
    baseUrl: 'http://the-internet.herokuapp.com',
  
    waitforTimeout: 20000,

    framework: 'jasmine',
   
    reporter: 'xunit',
    reporterOptions: {
    outputDir: './'
},
 
    jasmineNodeOpts: {
        //
        // Jasmine default timeout
        defaultTimeoutInterval: 20000,
        //
        // Make use of jasmine specific grep functionality
        // grep: null,
        // invertGrep: null
    }
};
