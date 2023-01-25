/* JavaScript DOM Exercises 01 */
const pEl = document.querySelector('p')
const h1El = document.querySelector('h1')
// const texts = pEl.innerText // innerText doesn't have escape characters
const texts = pEl.textContent // textContent has escape characters
/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
// const textArr = texts.split(' ')
// const highlightWord = textArr.filter((highlight) => {
//   return highlight.length >= 8
// })

// const highlightText = textArr.map((word) => {
//   highlightWord.forEach((highlightWord) => {
//     if (word === highlightWord) {
//       word = `<span style="background-color: yellow" />${word}</span>`
//     }
//   })
//   return word
// })

// pEl.innerHTML = highlightText.join('')

// ===================================
// Answer
// ===================================
const paragraph = document.querySelector('p')
paragraph.innerHTML = paragraph.textContent
  .split(' ')
  .map((word) => {
    if (word.length > 8) {
      return `<mark>${word}</mark>`
    }
    return word
  })
  .join(' ')

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
// const aEl = document.createElement('a')

// pEl.after(aEl)
// aEl.textContent = 'a element'
// aEl.setAttribute('href', 'http://officeipsum.com/')

// ===================================
// Answer
// ===================================
const link = document.createElement('a')
link.href = 'http://officeipsum.com/'
link.innerText = 'Link to office ipsum'
document.body.appendChild(link)

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

// const textSplit = texts.split('.')
// for (let i = 0; i > textSplit.length; i++) {
//   textSplit.push('</p>')
// }
// const textIndent = textSplit.join('.<p>')
// pEl.innerHTML = textIndent

// ===================================
// Answer
// ===================================

paragraph.innerHTML = paragraph.innerHTML.split('.').join('.</p><p>')

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
// const countWord = texts.split(' ').length
// const countEl = document.createElement('p')
// countEl.textContent = countWord
// h1El.after(countEl)

// ===================================
// Answer
// ===================================
const wordCount = paragraph.innerText.split(' ').length
const wordCountEl = document.createElement('div')
wordCountEl.innerText = `${wordCount} words`
document.body.insertBefore(wordCountEl, paragraph)

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
// const replaceText = texts.replace('?', '🤔').replace('!', '😲')
// pEl.innerHTML = replaceText

// ===================================
// Answer
// ===================================
paragraph.innerHTML = paragraph.innerHTML
  .replaceAll('?', '🤔')
  .replaceAll('!', '😲')
