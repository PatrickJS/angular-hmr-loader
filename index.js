var bootstrapModule = /(\.bootstrapModule)\((.+)\)/gm;

function Angular2HMRLoader(source, sourcemap) {
  var self = this;
  // Not cacheable during unit tests;
  self.cacheable && self.cacheable();

  source = source.replace(bootstrapModule, function (match, boot, ngmodule, offset, src) {
    // return updated metadata
    return boot + '(' + ngmodule + ')' +
    '.then(function(MODULE_REF) {' +
      'if (module["hot"]) {\n'+
        'module["hot"]["accept"]();\n'+
        '\n'+
        'if (MODULE_REF.instance["hmrOnInit"]) {\n'+
          'MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);\n'+
        '}\n'+
        'if (MODULE_REF.instance["hmrOnStatus"]) {\n'+
          'module["hot"]["apply"](function(status) {\n'+
            'MODULE_REF.instance["hmrOnStatus"](status);\n'+
          '});\n'+
        '}\n'+
        'if (MODULE_REF.instance["hmrOnCheck"]) {\n'+
          'module["hot"]["check"](function(err, outdatedModules) {\n'+
            'MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);\n'+
          '});\n'+
        '}\n'+
        'if (MODULE_REF.instance["hmrOnDecline"]) {\n'+
          'module["hot"]["decline"](function(dependencies) {\n'+
            'MODULE_REF.instance["hmrOnDecline"](dependencies);\n'+
          '});\n'+
        '}\n'+
        'module["hot"]["dispose"](function(store) {\n'+
          'MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);\n'+
          'MODULE_REF.destroy();\n'+
          'MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);\n'+
       ' });\n'+
      '}\n'+
      'return MODULE_REF;\n'+
    '})'
  });

  // Support for tests
  if (self.callback) {
    self.callback(null, source, sourcemap)
  } else {
    return source;
  }
};
Angular2HMRLoader.default = Angular2HMRLoader;

module.exports = Angular2HMRLoader
