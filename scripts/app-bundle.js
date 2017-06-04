define("app",["require","exports","aurelia-materialize-bridge"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.toast=e,this.message="Hello World!"}return e.prototype.showToast=function(){this.toast.show("You clicked me!",2e3)},e}();i.inject=[n.MdToastService],t.App=i}),define("environment",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!0,testing:!0}}),define("main",["require","exports","./environment"],function(e,t,n){"use strict";function i(e){e.use.standardConfiguration().feature("resources").plugin("aurelia-materialize-bridge",function(e){return e.useAll()}),n.default.debug&&e.use.developmentLogging(),n.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=i}),define("resources/index",["require","exports"],function(e,t){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=n}),define("text!app.html",["module"],function(e){e.exports='<template>\n  <h1>${message}</h1>\n\n   <h4>Materialize button demo</h4>\n  <div class="row">\n    <div class="col s4">\n      <button md-button="disabled.bind: disabled;" md-waves click.trigger="showToast()">Materialize Button</button>\n    </div>\n  </div>\n</template>\n'});
//# sourceMappingURL=app-bundle.js.map