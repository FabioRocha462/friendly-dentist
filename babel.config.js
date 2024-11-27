module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@routes": "./src/routes",
            "@utils": "./src/utils",
            "@routes": "./src/routes",
            "@theme": "./src/theme",
            "@contexts": "./src/contexts",
            "@hooks": "./src/hooks",
            "@assets": "./src/assets",
            "@storage": "./src/storage",
          },
        },
        "react-native-reanimated/plugin",
      ],
    ],
  };
};
