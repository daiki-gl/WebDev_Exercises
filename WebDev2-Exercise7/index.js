const listElement = document.querySelector('.posts')
const postTemplate = document.querySelector('template')

const submitBtn = document.querySelector('button[type=submit]')
const input = document.querySelector('input[type=text]')
const textarea = document.querySelector('textarea')

submitBtn.addEventListener('click', fetchData)

async function fetchData(e) {
  e.preventDefault()
  const responseData = await sendHttpRequest(
    'POST',
    'http://127.0.0.1:5500/WebDev2-Exercise7/index.html',
    {
      title: input.value,
      content: textarea.value,
    }
  )

  if (responseData.length > 0) {
    for (const val of responseData) {
      const postElClone = document.importNode(postTemplate.content, true)
      postElClone.querySelector('h2').textContent = val.title
      postElClone.querySelector('p').textContent = val.content
      listElement.appendChild(postElClone)
    }
  }
}

async function sendHttpRequest(method, url, data) {
  const values = await [data]
  console.log(values)
  return values
}
