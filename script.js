const words = ["I am a web developer! ","Dog Lover","I like to draw sketch"];
let i = 0;
let counter;
function typeNow() {
   let word = words[i].split("");
   var loopTyping = function() {
      if (word.length > 0) {
         document.getElementById('text').innerHTML += word.shift();
      } else {
         deleteNow();
         return false;
      };
      counter = setTimeout(loopTyping, 200);
   };
   loopTyping();
};

function deleteNow() {
   let word = words[i].split("");
   var loopDeleting = function() {
      if (word.length > 0) {
         word.pop();
         document.getElementById('text').innerHTML = word.join("");
      } else {
         if (words.length > (i + 1)) {
            i++;
         }
         else {
            i = 0;
         };
         typeNow();
         return false;
      };
      counter = setTimeout(loopDeleting, 200);
   };
   loopDeleting();
};
typeNow();