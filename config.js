System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.classProperties"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.3.13",
    "babel-preset-react": "npm:babel-preset-react@6.3.13",
    "babel-preset-stage-0": "npm:babel-preset-stage-0@6.3.13",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "chai": "npm:chai@3.4.1",
    "chai-immutable": "npm:chai-immutable@1.5.3",
    "core-js": "npm:core-js@1.2.6",
    "immutable": "npm:immutable@3.7.6",
    "jquery": "npm:jquery@2.2.0",
    "jsx": "npm:jspm-loader-jsx@0.0.7",
    "mocha": "npm:mocha@2.3.4",
    "ramda": "npm:ramda@0.19.1",
    "react": "npm:react@0.14.6",
    "react-addons-pure-render-mixin": "npm:react-addons-pure-render-mixin@0.14.6",
    "react-addons-test-utils": "npm:react-addons-test-utils@0.14.6",
    "react-dom": "npm:react-dom@0.14.6",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.6.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "chalk": "npm:chalk@1.1.1",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@1.0.2",
      "line-numbers": "npm:line-numbers@0.2.0",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-core@6.4.5": {
      "babel-code-frame": "npm:babel-code-frame@6.3.13",
      "babel-generator": "npm:babel-generator@6.4.5",
      "babel-helpers": "npm:babel-helpers@6.4.5",
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-register": "npm:babel-register@6.4.3",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5",
      "babylon": "npm:babylon@6.4.5",
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "debug": "npm:debug@2.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json5": "npm:json5@0.4.0",
      "lodash": "npm:lodash@3.10.1",
      "minimatch": "npm:minimatch@2.0.10",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shebang-regex": "npm:shebang-regex@1.0.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-generator@6.4.5": {
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-indent": "npm:detect-indent@3.0.1",
      "is-integer": "npm:is-integer@1.0.6",
      "lodash": "npm:lodash@3.10.1",
      "repeating": "npm:repeating@1.1.3",
      "source-map": "npm:source-map@0.5.3",
      "trim-right": "npm:trim-right@1.0.1"
    },
    "npm:babel-helper-bindify-decorators@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.3.13": {
      "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-builder-react-jsx@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-helper-call-delegate@6.3.13": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-define-map@6.4.5": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.4.0",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-helper-explode-assignable-expression@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-explode-class@6.3.13": {
      "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-function-name@6.4.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-get-function-arity@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-hoist-variables@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-optimise-call-expression@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-regex@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-helper-remap-async-to-generator@6.4.6": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.4.0",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helper-replace-supers@6.3.13": {
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.3.13",
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-helpers@6.4.5": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13"
    },
    "npm:babel-messages@6.3.18": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-check-es2015-constants@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-async-functions@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-class-constructor-call@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-class-properties@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-decorators@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-do-expressions@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-exponentiation-operator@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-export-extensions@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-flow@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-function-bind@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-jsx@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-object-rest-spread@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-syntax-trailing-function-commas@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-async-to-generator@6.4.6": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.4.6",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-class-constructor-call@6.4.0": {
      "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13"
    },
    "npm:babel-plugin-transform-class-properties@6.4.0": {
      "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-decorators@6.4.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.4.5",
      "babel-helper-explode-class": "npm:babel-helper-explode-class@6.3.13",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-plugin-transform-do-expressions@6.3.13": {
      "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.4.0": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.4.0": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-plugin-transform-es2015-classes@6.4.5": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.4.5",
      "babel-helper-function-name": "npm:babel-helper-function-name@6.4.0",
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.3.13",
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.3.13",
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.4.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.4.5",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13"
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.4.0": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-for-of@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-function-name@6.4.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.4.0",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-plugin-transform-es2015-literals@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.4.5": {
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-types": "npm:babel-types@6.4.5",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-object-super@6.4.0": {
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-parameters@6.4.5": {
      "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.3.13",
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-plugin-transform-es2015-spread@6.4.0": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.3.13": {
      "babel-helper-regex": "npm:babel-helper-regex@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.4.3": {
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.4.3": {
      "babel-helper-regex": "npm:babel-helper-regex@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "regexpu-core": "npm:regexpu-core@1.0.0"
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.3.13": {
      "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.3.13",
      "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-export-extensions@6.4.0": {
      "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-flow-strip-types@6.4.0": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-function-bind@6.3.13": {
      "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-object-rest-spread@6.3.13": {
      "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-react-display-name@6.4.0": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-react-jsx-source@6.3.13": {
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-react-jsx@6.4.0": {
      "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.3.13",
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:babel-plugin-transform-regenerator@6.4.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "babel-core": "npm:babel-core@6.4.5",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.3.13",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.4.0",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5",
      "babylon": "npm:babylon@6.4.5",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-transform-strict-mode@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5"
    },
    "npm:babel-preset-es2015@6.3.13": {
      "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.3.13",
      "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.4.0",
      "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.3.13",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.4.0",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.4.5",
      "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.4.0",
      "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.4.0",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.3.13",
      "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.4.0",
      "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.3.13",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.4.5",
      "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.4.0",
      "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.4.5",
      "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.3.13",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.4.0",
      "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.3.13",
      "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.3.13",
      "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.4.3",
      "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.4.3",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.4.4"
    },
    "npm:babel-preset-react@6.3.13": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.3.13",
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.3.13",
      "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.4.0",
      "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.4.0",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.4.0",
      "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.3.13"
    },
    "npm:babel-preset-stage-0@6.3.13": {
      "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.3.13",
      "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.3.13",
      "babel-preset-stage-1": "npm:babel-preset-stage-1@6.3.13"
    },
    "npm:babel-preset-stage-1@6.3.13": {
      "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.4.0",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.4.0",
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.4.0",
      "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.4.0",
      "babel-preset-stage-2": "npm:babel-preset-stage-2@6.3.13"
    },
    "npm:babel-preset-stage-2@6.3.13": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.3.13",
      "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.3.13",
      "babel-preset-stage-3": "npm:babel-preset-stage-3@6.3.13"
    },
    "npm:babel-preset-stage-3@6.3.13": {
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.4.6",
      "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.3.13"
    },
    "npm:babel-register@6.4.3": {
      "babel-core": "npm:babel-core@6.4.5",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "core-js": "npm:core-js@1.2.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "home-or-tmp": "npm:home-or-tmp@1.0.0",
      "lodash": "npm:lodash@3.10.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map-support": "npm:source-map-support@0.2.10"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-template@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "babel-types": "npm:babel-types@6.4.5",
      "babylon": "npm:babylon@6.4.5",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-traverse@6.4.5": {
      "babel-code-frame": "npm:babel-code-frame@6.3.13",
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-types": "npm:babel-types@6.4.5",
      "babylon": "npm:babylon@6.4.5",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.18.0",
      "invariant": "npm:invariant@2.2.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-types@6.4.5": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "babel-traverse": "npm:babel-traverse@6.4.5",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@3.10.1",
      "to-fast-properties": "npm:to-fast-properties@1.0.1"
    },
    "npm:babylon@6.4.5": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:brace-expansion@1.1.2": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:camel-case@1.2.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:chai-immutable@1.5.3": {
      "chai": "npm:chai@3.4.1"
    },
    "npm:chai@3.4.1": {
      "assertion-error": "npm:assertion-error@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detect-indent@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:diffie-hellman@5.0.1": {
      "bn.js": "npm:bn.js@4.6.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.1.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:home-or-tmp@1.0.0": {
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-integer@1.0.6": {
      "is-finite": "npm:is-finite@1.0.1"
    },
    "npm:json5@0.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "pascal-case": "npm:pascal-case@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.13.3",
      "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:line-numbers@0.2.0": {
      "left-pad": "npm:left-pad@0.0.3"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mocha@2.3.4": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.3.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pascal-case@1.1.2": {
      "camel-case": "npm:camel-case@1.2.2",
      "upper-case-first": "npm:upper-case-first@1.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ramda@0.19.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-addons-pure-render-mixin@0.14.6": {
      "react": "npm:react@0.14.6"
    },
    "npm:react-addons-test-utils@0.14.6": {
      "react": "npm:react@0.14.6"
    },
    "npm:react-dom@0.14.6": {
      "react": "npm:react@0.14.6"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.6": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regexpu-core@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerate": "npm:regenerate@1.2.1",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sentence-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.3"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:upper-case-first@1.1.2": {
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
