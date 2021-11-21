import https from './https'


export function allPost(){
    return https.get('/allpost')
}

export function deletePost(id){
    return https.post('/deletepost',id)   
}

