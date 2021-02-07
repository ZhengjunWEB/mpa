module.exports = {
    pages: {
        index: {
            entry: "./src/pages/index/index.js", // 入口js文件
            template: "./src/pages/index/index.html", // 主页面
            filename: "index.html", // 打包后文件名
            title: "index页面" // 网页title名
        },
        home: {
            entry: "./src/pages/home/home.js",
            template: "./src/pages/home/home.html",
            filename: "home.html",
            title: "home页面"
        },
        person: {
            entry: "./src/pages/person/person.js",
            template: "./src/pages/person/person.html",
            filename: "person.html",
            title: "person页面"
        }
    }
}
