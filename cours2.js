function getUrlVars() {
var vars = {};
console.log(vars);
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}


// possibilité d'utiliser URLSearchParam(document.location.search.substring(1))

var first = getUrlVars()["ID"];

console.log(first);
var contentDesc = document.getElementById("details"); 

var maliste = [];
maliste = Liste; 

maliste.forEach(function(item)
{

	if(item.ID == first)
	{

		for(key in item)
		{
			var contentLi = document.createElement('li');
			contentLi.innerHTML = key +":"+item[key];
			contentDesc.appendChild(contentLi);
		}

	}
	console.log(item.ID);

});