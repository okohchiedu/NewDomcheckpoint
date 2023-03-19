let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click',function(event){
        if(event.terget.classlist.contains('add')){
        var itemNew = item.cloneNode(true);
        document.querySelector('.listCart').appendChild(itemNew)
        }
    })
})
