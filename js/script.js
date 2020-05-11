document.getElementById('burger').onclick = function(){
    addMenu();
};

function addMenu(){
    document.getElementById('header').classList.toggle('head-show');
    document.getElementById('content').classList.toggle('delete');
    document.getElementById('burger').classList.toggle('white-burger');
};


