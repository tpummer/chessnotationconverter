/*
 * jQuery Convert v0.1
 */
 
$(document).ready(function(){
  $('#converter').submit(function(e) {
    e.preventDefault();
    
    var algo = $('.convert-mode option:selected').val();
    var input = $('#in').val();
    
    switch (algo){
      case 'pgng2e' : var result = pgng2e(input); break;
      case 'pgne2g' : var result = pgne2g(input); break;
      default: break;
    }
    
    $('#out').val(result);
  });
});

function pgng2e(str){
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

function pgne2g(str){
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
         case 'Q' : result = setCharAt(result,i,'D');  break;
         case 'R' : result = setCharAt(result,i,'T');  break;
         case 'B' : result = setCharAt(result,i,'L');  break;
         case 'N' : result = setCharAt(result,i,'S');  break;
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