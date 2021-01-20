module.exports = {
  "plugins": [
    ["@snowpack/plugin-babel", {"input": [".js"]}],
    ["@snowpack/plugin-run-script", { 
      "cmd": "eslint src --ext .js",
      "watch": "esw -w --clear src --ext .js"
    }],
    "@snowpack/plugin-postcss"
  ]
}