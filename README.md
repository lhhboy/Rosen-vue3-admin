# rosen-vue3-admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Rosen-vue3-admin
这是一个vue3工程规化项目

### vue全家桶相关版本1.0
npm i vue@3.2.8 vue-router@4.0.11 vuex@4.0.2

### prettier 代码格式化
新增文件.prettierrc进行配置，避免和eslint冲突，添加   'space-before-function-paren': 0

### 代码提交规格
npm install -g commitizen@4.2.4
npm i cz-customizable@6.3.0 --save-dev  
新增.cz-config.js文件配置对应内容
使用：用git cz 代替git commit

### 使用husky进行强制git代码提交规范
npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
npm install husky@7.0.1 --save-dev
npx husky install
执行以上代码生成husky,新增文件commitlint.config.js配置
package.json的"scripts"添加： "prepare": "husky install"
npm run prepare
新增husky配置文件 并往里面写入
npx husky add .husky/commit-msg
在.husky的commit-msg添加以下代码代替undefined：
npx --no-install commitlint --edit

## 代码格式化
执行：
npx husky add .husky/pre-commit
在.husky的pre-commit添加以下代码代替undefined：
npx lint-staged
在package.json添加:
"lint-staged":{}

### svg封装和相关配置
npm i --save-dev svg-sprite-loader@6.0.9
然后配置vue.config.js配置


