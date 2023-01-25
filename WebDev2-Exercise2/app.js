//Adding a note
const addInput = document.getElementById('add-input')
const addBtn = document.getElementById('add-btn')
let inputVal

addInput.addEventListener('keyup', (e) => {
  inputVal = e.target.value
})

addBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const list = document.getElementById('list')
  const li = document.createElement('li')
  li.innerHTML = `<p>${inputVal}</p>
  <p>
    <i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i
  </p>
  <input type="text" class="edit-note">`
  list.appendChild(li)
})
