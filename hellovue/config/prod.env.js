let env = process.env.SERVER_ENV || "SIT";
console.log("-----------------");
console.log("当前环境：", env);
console.log("-----------------");

env = env.toUpperCase();

const configProduction = {
  // 集成测试环境配置
  SIT: {
    NODE_ENV: '"production"',
    API: '"http://192.168.1.20:4000"',
  },
  // 用户测试环境
  UAT: {
    NODE_ENV: '"production"',
    API: '"http://192.168.1.20:3000"',
  },
  // 预生产环境配置
  PROD: {
    NODE_ENV: '"production"',
    API: '"http://192.168.1.20:2000"',
  },
};

module.exports = configProduction[env];

