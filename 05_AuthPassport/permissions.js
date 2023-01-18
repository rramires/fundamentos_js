const ADMIN_PROFILE = '1';

// check admin
function isAdmin(profile) {
    return profile === ADMIN_PROFILE;
}


module.exports = (request) => {

    // get user, from passport
    const user = request.user;
    // skip
    if(!user){
        return false;
    } 
    // get profile
    const profile = String(user.profile);

    // get URL
    let originalUrl = request.originalUrl;
    //
    if (request.params.pagina)
    {
        originalUrl = originalUrl.replace("/" + request.params.pagina, "");
    }
    //
    // get method for other validations
    const method = String(request.method);//GET, POST, DELETE, etc
    //
    // check permission
    switch (originalUrl) {
        case '/': return true;
        case '/index': return true;
        case '/login': return true;
        case '/signup': return true;
        case '/reports': return isAdmin(profile);
        default: return false;
    }
}