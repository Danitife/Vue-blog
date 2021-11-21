import https from './https'

export function register(data){
    return https.post('/signup', data)
}

export function log_in(datar){
    return https.post('/login', datar)
}

export function addPost(dataz){
    return https.post('/addpost', dataz)
}

export function deletePost(id){
    return https.post('/deletepost',id)   
}