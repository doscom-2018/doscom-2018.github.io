function loadContentPost(urlRequest, pageRequest){
    var contentPath = "./posts/"+pageRequest+"/index.md";
    setElmtThumbnail("featuredPostImg", "./posts/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize(getTitleOnly(pageRequest)), "en-us");
    reqParseMarkdown("POST", contentPath);
}

function loadContentPages(urlRequest, pageRequest){
    var contentPath = "./pages/"+pageRequest+"/index.md";
    setElmtThumbnail("featuredPostImg", "./posts/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize(pageRequest), "en-us");
    reqParseMarkdown("PAGES", contentPath);
}