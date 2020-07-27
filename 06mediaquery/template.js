var barBtn = document.getElementById('bar-icon');

var sideBar = document.getElementById('side-bar')

barBtn.addEventListener('click',function(){

    if (sideBar.className == 'side-bar-close'){
        sideBar.className = 'side-bar-open'
    }
    else{
        sideBar.className = 'side-bar-close'
    }
})