const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover); //вызывается когда элемент над местом куда можем поместить
	placeholder.addEventListener('dragenter', dragenter); //заходим на территорию места куда поместить
	placeholder.addEventListener('dragleave', dragleave); //когда перетащили но вышли с места
	placeholder.addEventListener('drop', dragdrop); //когда отпустили
}

function dragstart(e) {
	e.target.classList.add('hold');
	setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragend(e) {
	e.target.className = 'item';
}

function dragover(e) {
	e.preventDefault();
}
function dragenter(e) {
	e.target.classList.add('hovered');
}
function dragleave(e) {
	e.target.classList.remove('hovered');
}
function dragdrop(e) {
	e.target.append(item);
	e.target.classList.remove('hovered');
}
