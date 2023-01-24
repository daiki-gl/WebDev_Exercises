/* JavaScript DOM Exercises 01 */
const pEl = document.querySelector('p')
const h1El = document.querySelector('h1')
const texts = pEl.textContent
/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const textArr = texts.split(' ')
const highlightWord = textArr.filter((highlight) => {
  return highlight.length >= 8
})

const newArr = []
const highlightText = textArr.map((word) => {
  highlightWord.forEach((highlightWord) => {
    if (word === highlightWord) {
      word = `<span style="background-color: yellow" />${word}</span>`
    }
  })
  return word
})

pEl.innerHTML = highlightText.join('')

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const aEl = document.createElement('a')

pEl.after(aEl)
aEl.textContent = 'a element'
aEl.setAttribute('href', 'http://officeipsum.com/')

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

// const textSplit = texts.split('.')
// for (let i = 0; i > textSplit.length; i++) {
//   textSplit.push('<br>')
// }
// const textIndent = textSplit.join('.<br>')
// pEl.innerHTML = textIndent

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const countWord = texts.length
const countEl = document.createElement('p')
countEl.textContent = countWord
h1El.after(countEl)

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
// const replaceText = texts.replace('?', '🤔').replace('!', '😲')
// pEl.innerHTML = replaceText
