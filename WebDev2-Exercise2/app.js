//Adding a note
const addBtn = document.getElementById('add-btn')

const addNote = (e) => {
  let inputVal = document.getElementById('add-input').value
  e.preventDefault()
  const list = document.getElementById('list')
  const li = document.createElement('li')
  li.innerHTML = `<p>${inputVal}</p>
                  <p>
                    <i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i
                    </p>
                    <input type="text" class="edit-note">`
  list.appendChild(li)
  inputVal = ''
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
