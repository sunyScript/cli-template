# troila-meet-sdk

https://www.npmjs.com/package/troila-meet-sdk

#### 下载插件

```
yarn add trolia-meet-sdk
```


#### 启动服务

```
yarn serve
```

#### 打包配置文件

```
vue.config.js
```

#### ts转js命令

```
yarn tojs 或 tsc --p tsconfig.pro.json
```

#### 发包流程

```
1.上传前后需先执行src目录下ts文件转js命令

    #: (ts转js无法将除(.ts, .tsx, js)以外的文件拷贝至lib文件夹 (.vue, .json)及相关静态资源需手动拷贝至lib文件夹下)

2.修改package.json中版本号，版本管理，修改version版本号，基本原则如下：

    > 主版本号（Major）：当你做了不兼容的API修改

    > 次版本号（Minor）：当你做了向下兼容的功能性新增

    > 修订号（Patch）：当你做了向下兼容的问题修正

3.登录npm 执行npm login

    > 账号：troila-lobo

    > 密码：Troila@123

    > 邮箱：miniprogram@hilobo.com

4.发布npm 执行npm publish
```

#### 目录说明及开发注意事项:

```
examples                # 本地引用插件调试相关文件


public                  # 本地调试静态资源文件


src                     # 开发插件相关代码

                        # src目录下避免使用@/写法

                        # vue内需使用js写法，ts写法可写在.ts文件

                        # 除插件外引用资源需使用相对路径写法

                        # 插件的所有静态资源需放在该目录下assets文件夹内

                        # index.ts抛出所有组件

                        # init.ts设置初始加载方法及插件全局变量

                        # views内为页面级组件


ssl                     # https证书文件


lib                     # 上传至npm文件


.env.*                  # 环境变量配置
```
