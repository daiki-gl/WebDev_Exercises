const listElement = document.querySelector('.posts')
const fetchButton = document.querySelector('#available-posts button')
const postTemplate = document.querySelector('template')

const submitBtn = document.querySelector('button[type=submit]')

// submitBtn.addEventListener('click', fetchData)

// async function fetchData(e) {
//   e.preventDefault()
//   const responseData = await sendHttpRequest(
//     'POST',
//     'https://jsonplaceholder.typicode.com/posts',
//     {
//       title: input.value,
//       content: textarea.value,
//     }
//   )

//   if (responseData.length > 0) {
//     for (const val of responseData) {
//       const postElClone = document.importNode(postTemplate.content, true)
//       postElClone.querySelector('h2').textContent = val.title
//       postElClone.querySelector('p').textContent = val.content
//       listElement.appendChild(postElClone)
//     }
//   }
// }

// async function sendHttpRequest(method, url, data) {
//   const values = await axios(url, { method }, data)
//   console.log(values)
//   return values
// }

async function sendHttpRequest(method, url, titleVal, contentVal) {
  //with axios
  const { data } = await axios(url, { method })
  // console.log(data)

  data.userId = 1
  data.title = titleVal
  data.body = contentVal
  return data
  // return axios.get(url)
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
  const titleVal = document.querySelector('input[type=text]').value
  const contentVal = document.querySelector('textarea').value

  const responseData = await sendHttpRequest(
    'POST',
    'https://jsonplaceholder.typicode.com/posts',
    titleVal,
    contentVal
  )

  if (!responseData.title == '' && !responseData.body == '') {
    const postElClone = document.importNode(postTemplate.content, true)
    postElClone.querySelector('h2').textContent = responseData.title
    postElClone.querySelector('p').textContent = responseData.body
    postElClone.querySelector('li').id = responseData.id
    listElement.appendChild(postElClone)
  }

  console.log(responseData)
}

// READ/GET
fetchButton.addEventListener('click', fetchPosts)

submitBtn.addEventListener('click', addPosts)
