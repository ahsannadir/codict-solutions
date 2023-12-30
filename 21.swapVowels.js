/* Given a string, Modify the swapVowels function so it returns the same string but changing all the vowels by 
the number they correspond to in the vowel order.
Note:
- a:1
- e:2
- i:3
- o:4
- u:5
*/

function swapVowels(word) {
  let a = 1, e = 2, i = 3, o = 4, u = 5;
  let len = word.length;

  for (let j = 0; j < len; ++j) {
    word = word.replace('a', a);
    word = word.replace('e', e);
    word = word.replace('i', i);
    word = word.replace('o', o);
    word = word.replace('u', u);
  }
  return word
}