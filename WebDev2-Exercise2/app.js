//Adding a note
const addBtn = document.getElementById('add-btn')
const input = document.getElementById('add-input')

const addNote = (e) => {
  let inputVal = input.value
  e.preventDefault()
  const list = document.getElementById('list')
  const li = document.createElement('li')
  li.innerHTML = `<p>${inputVal}</p>
                  <p>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i><i class="fa fa-times" aria-hidden="true"></i
                    </p>
                    <input type="text" class="edit-note">`
  list.appendChild(li)
  input.value = ''
}
addBtn.addEventListener('click', addNote)

// ===================================
// delete
// ===================================
window.addEventListener('load', resetItems)
addBtn.addEventListener('click', resetItems)

function resetItems() {
  const deleteBtns = document.querySelectorAll('.fa-times')
  deleteBtns.forEach((item) =>
    item.addEventListener('click', (e) =>
      e.target.parentNode.parentNode.remove()
    )
  )
}
