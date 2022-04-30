function palindrome(str) {
 var reGex = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(reGex, '');
 var lengthStr = str.length;
 for (var i = 0; i < lengthStr/2; i++) {
   if (str[i] !== str[lengthStr - 1 - i]) {
       return false;
   }
 }
 return true;
}
