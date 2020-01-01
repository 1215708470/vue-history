# vuedemo02

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

# 项目打包后 router 空白方案 1

```bash
# 项目的入口文件 index.html 直接在服务器访问地址的根目录下，即项目独占一个端口
# vue 中配置保持不变
# nginx 中配置如下：


server {
    listen 8899;
    server_name localhost;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
# 第二种是 针对项目放在子级目录的情况。

# 打包配置 config-index.js 修改路径：

assetsPublicPath: './';

# 前端路由配置 router.js:

const router = new VueRouter({
mode: 'history',
base: '/hello',
routes
})

# 这里一定要一个加一个 base;与项目子级目录名同步

# nginx 配置：

server {
listen 8088;
server_name xxx.com; # localhost 修改为您证书绑定的域名。

    location /hello{
        try_files $uri $uri/ /hello/index.html;
    }

}

# 最终访问 xxxxx:8088/hello
```

```bash
# 一个 nginx 配置多个端口，多个子域名

    server {
          listen 8082;
          listen 8088;
          server_name localhost;  # localhost修改为您证书绑定的域名。

        location /hello {
            try_files $uri $uri/ /hello/index.html;
        }
         location /hello2 {
            try_files $uri $uri/ /hello2/index.html;
        }
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
