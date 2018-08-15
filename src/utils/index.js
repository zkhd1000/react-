export function getRedirectPath(type,header) {
    let path=''
    path+= type ==='dashen'?'/laoban':'dashen'
    if(!header){
        path+='info'
    }
    return path
}