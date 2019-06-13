telcomApp.factory("telcomHttpUtils", [
	function() {

		function getUrl(){
			var url = "http://localhost:9999";
			//var url=window.location.protocol+"//"+window.location.host;
			return url;
		}

		function getQueryString(params){
			var query="";
			angular.forEach(params,function(value,key){
				console.log(value+key);
				if(query==""){
					query = "?"+key+"="+value;
				}else{
					query=query+"&"+key+"="+value;
				}
			});
			return query;
		}

		var baseUrl = getUrl()+"/";

		var url = {
			
		};

		var utils = {
			baseUrl : baseUrl,
			url : url,
			getQueryString:getQueryString
		};
		return utils;

}]);
