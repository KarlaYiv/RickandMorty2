module.exports = function (api) {
 api.cache(true);
 return {
   presets: ['@babel/preset-env',
   '@babel/preset-react',
   '@babel/preset-typescript',
   '@babel/preset-flow'
   ],
   plugins: [
     [
       'module:react-native-dotenv',
       {
         moduleName: '@env',
         path: '.env',
         blacklist: null,
         whitelist: null,
         safe: false,
         allowUndefined: true,
       },
     ],
     ['react-native-reanimated/plugin']
     
   ],
 };
};
