//set and get web identifier
var bgIdnt;
var bgUrl;
var bgTitle;
var bgLang;
var tOp = "Dinus Opensource Community";
var disqus = "doscom-test";

function setBlogIdentifier(pIdnt, pUrl, pTitle, pLang){
	bgIdnt = pIdnt;
	bgUrl = pUrl;
	bgTitle = tOp + " - " + pTitle;
	bgLang = pLang;
}

function getBlogIdentifier(){
	return [bgIdnt, bgUrl, bgTitle, bgLang];
}

function getDisqusShortname(){
	return disqus;
}

function enableComments(){
	return true;
}