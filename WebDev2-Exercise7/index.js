const listElement = document.querySelector('.posts')
const fetchButton = document.querySelector('#available-posts button')
const postTemplate = document.querySelector('template')

const submitBtn = document.querySelector('button[type=submit]')

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
  const title = document.querySelector('input[type=text]')
  const titleVal = title.value
  const content = document.querySelector('textarea')
  const contentVal = content.value

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

  title.value = ''
  content.value = ''
  console.log(responseData)
}

// READ/GET
fetchButton.addEventListener('click', fetchPosts)

submitBtn.addEventListener('click', addPosts)
