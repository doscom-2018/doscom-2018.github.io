//set and get web identifier
var WebsiteName = "Dinus Opensource Community";
var disqusShortname = "doscom-test";
var copyrightOwner = "Dinus Opensource Community";
var disqusID; var disqusUrl;
var disqusTitle; var disqusLang;
var enableDisqus = true;

function setSiteIdentifier(pageIdentifier, pageUrl, pageTitle, pageLang){
	disqusID = pageIdentifier;
	disqusUrl = pageUrl;
	disqusTitle = pageTitle + " - " + WebsiteName;
	disqusLang = pageLang;
}

function getSiteIdentifier(){
	return [disqusID, disqusUrl, disqusTitle, disqusLang];
}

function getDisqusShortname(){
	return disqusShortname;
}

function enableComments(){
	return enableDisqus;
}

function getSiteCopyright(){
	return copyrightOwner;
}

function loadSiteMainTitle(){
	document.title = WebsiteName;
}

function loadSiteBranding(){
	document.getElementById('siteBranding').innerHTML = "Blog DOSCOM";
}

function loadSiteCopyright(){
	var currentYear = new Date().getFullYear();
	var copyrightOwner = getSiteCopyright();
	document.getElementById('siteCopyright').innerHTML = currentYear + " " + copyrightOwner;
}