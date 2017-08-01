/*
 * jQuery Convert v0.1
 */
 
$(document).ready(function(){
  $('#converter').submit(function(e) {
      e.preventDefault();
      
	  var input = $('#in').val();
	  //TODO insert mode selction
	  var result = viz(input);
	  
	  $('#out').val(result);
  });
});

function viz(str){
   var isComment = 0;
   var isHeader  = 0;
   var result = str;
   
   for (var i = 0, len = str.length; i < len; i++) {

     if ( isComment || isHeader )
     {
        if ( isComment && str[i]=='}' )  isComment = 0;
        if ( isHeader  && str[i]==']' )  isHeader  = 0;
     }
     else
     {
       switch ( str[i] ) {
         case '{' : isComment = 1;  break;
         case '[' : isHeader  = 1;  break;
         case 'D' : result = setCharAt(result,i,'Q');  break;
         case 'T' : result = setCharAt(result,i,'R');  break;
         case 'L' : result = setCharAt(result,i,'B');  break;
         case 'S' : result = setCharAt(result,i,'N');  break;
         default: break;
       }
     }
   } 	
   return result;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}