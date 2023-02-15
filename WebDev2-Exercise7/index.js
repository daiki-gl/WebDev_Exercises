const listElement = document.querySelector('.posts')
const fetchButton = document.querySelector('#available-posts button')
const postTemplate = document.querySelector('template')

const submitBtn = document.querySelector('button[type=submit]')

// async function sendHttpRequest(method, url, titleVal, contentVal) {
async function sendHttpRequest(method, url, values) {
  //with axios
  const { data } = await axios(url, { method })
  console.log(axios(url))

  // if (values.title === undefined && values.body === undefined) {
  //   const a = document.querySelector('#new-post')
  //   const errEl = document.createElement('span')
  //   a.appendChild(errEl)
  //   errEl.innerText = '*You cannot empty'
  //   errEl.style.color = 'red'

  //   throw new Error('No value')
  // }

  data.userId = 1
  data.title = values.title
  data.body = values.body
  return data
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  )

  // console.log(responseData)
  if (responseData.length > 0) {
    for (const post of responseData) {
      const postElClone = document.importNode(postTemplate.content, true)
      postElClone.querySelector('h2').textContent = post.title
      postElClone.querySelector('p').textContent = post.body
      postElClone.querySelector('li').id = post.id
      listElement.appendChild(postElClone)
    }
  }
}

async function addPosts(e) {
  e.preventDefault()
  // const title = document.querySelector('input[type=text]')
  const content = document.querySelector('textarea')
  const titleVal = title.value
  const contentVal = content.value

  const responseData = await sendHttpRequest(
    'POST',
    'https://jsonplaceholder.typicode.com/posts',
    titleVal && contentVal && { title: titleVal, body: contentVal }
  )

  if (responseData) {
    const postElClone = document.importNode(postTemplate.content, true)
    postElClone.querySelector('h2').textContent = responseData.title
    postElClone.querySelector('p').textContent = responseData.body
    postElClone.querySelector('li').id = responseData.id
    listElement.appendChild(postElClone)
  }

  title.value = ''
  content.value = ''
  console.log(responseData)
}

// READ/GET
fetchButton.addEventListener('click', fetchPosts)
submitBtn.addEventListener('click', addPosts)

let string1 = ''
let object1 = { a: 1, b: 2, c: 3 }

for (const property1 in object1) {
  string1 += object1[property1]
}

console.log(string1)
