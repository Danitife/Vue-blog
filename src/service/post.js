import http from "./http";

export function getLatestNews(movie){
    return http.get('/everything?q=${movie}&apiKey=24b4029b596643e7a81435852dcd5126')
}

export function getTargetNews(news){
    return http.get('/everything?q=${news}&apiKey=24b4029b596643e7a81435852dcd5126')
}

export function getCeleb(celebrity){
    return http.get('/everything?q=${celebrity}&apiKey=24b4029b596643e7a81435852dcd5126')
}

export function getFacebook(facebook){
    return http.get('/everything?q=${facebook}&apiKey=24b4029b596643e7a81435852dcd5126')
}

export function getManU(manU){
    return http.get('/everything?q=${manU}&apiKey=4e2cb5b3d4b94ec6a509b8ae46de10bc')
}

export function getCrypto(crypto){
    return http.get('/everything?q=${crypto}&apiKey=24b4029b596643e7a81435852dcd5126')
}

export function getTinubu(tinubu){
    return http.get('/everything?q=${tinubu}&apiKey=4e2cb5b3d4b94ec6a509b8ae46de10bc')
}

export function getPolitics(politics){
    return http.get('/everything?q=${politics}&apiKey=4e2cb5b3d4b94ec6a509b8ae46de10bc')
}

export function getPost(id){
    return http.post(`post?id=${id}`)
}

