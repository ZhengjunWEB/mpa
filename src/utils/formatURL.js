export default function formatURL(url) {
    let search = url.slice(1).split('&')
    let res = {}
    search.forEach((item) => {
        let e = item.split('=')
        res[e[0]] = e[1]
    })
    console.log(res);
    return res
}
