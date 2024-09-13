const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmmy4i1816/",
            name: "ssmmy4i1816",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmmy4i1816/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SSM框架的老年群体安全用药管理系统"
        } 
    }
}
export default base
