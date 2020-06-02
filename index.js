// super elegant solution for left rotate.
function rotLeft(a, d) {
     while (d) {
      a.push(a.shift());
      d--;
   }
return a;
}
