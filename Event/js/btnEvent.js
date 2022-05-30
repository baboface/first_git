(function(){
const conEl = document.querySelector('.con');
const addColor = document.querySelector('.add_color');
const removeColor = document.querySelector('.remove_color');

// *addColor 버튼을 클릭했을때 con에 클래스를 추가하기        
const handleAdd =() => {
    conEl.classList.add('on');
}
// removeColor버튼을 클릭했을때 con에 클래스를 제거하기
const handleRemove = () => {
    conEl.classList.remove('on');
}

addColor.addEventListener('click', handleAdd);
removeColor.addEventListener('click', handleRemove);
})();