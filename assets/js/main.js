

(function(){


    let closeNavButton = document.querySelector('#closeNavigation');
    if (closeNavButton !== null) {
        closeNavButton.addEventListener('click', function(){
            closeNavigation();
        });
    }

    function closeNavigation(){
        let navDiv = document.querySelector('#documentNavigationBlock');
        let parentDiv = navDiv.parentNode;
        parentDiv.removeChild(navDiv);
        let navMenuItem = document.querySelector('#showNavigation');
        navMenuItem.innerHTML = 'Показать навигацию';
    }

    let closeCommButton = document.querySelector('#closeComments');
    if (closeCommButton !== null) {
        closeCommButton.addEventListener('click', function(){
            closeComments();
        });
    }

    function closeComments(){
        let comDiv = document.querySelector('#commentsBlock');
        let parentDiv = comDiv.parentNode;
        parentDiv.removeChild(comDiv);
        let comMenuItem = document.querySelector('#showComments');
        comMenuItem.innerHTML = 'Показать примечания';
    }

    let closeTemplButton = document.querySelector('#closeTemplates');
    if (closeTemplButton !== null) {
        closeTemplButton.addEventListener('click', function(){
            closeTemplates();
        });
    }

    function closeTemplates(){
        let tmpDiv = document.querySelector('#templateBlock');
        let parentDiv = tmpDiv.parentNode;
        parentDiv.removeChild(tmpDiv);
        let tmpItem = document.querySelector('#showTemplates');
        tmpItem.innerHTML = 'Показать шаблоны';
    }

    document.querySelector('#showNavigation').addEventListener('click', function(){
        let navDiv = document.querySelector('#documentNavigationBlock');
        if (navDiv == null) {
            document.querySelector('#editSection .inner').insertAdjacentHTML('afterBegin',	'<div id="documentNavigationBlock"><h5>Структура документа <a href="#" id="closeNavigation" class="closeButton button altMenu" title="Закрыть структуру документа"><i class="fa fa-times"></i></a></h5><p></p><h3><a href="#">Блок 1</a></h3><h4><a href="#">Блок 1.1</a></h4><h5><a href="#">Блок 1.1.1</a></h5><h3><a href="#">Блок 2</a></h3><h3><a href="#">Блок 3</a></h3><h3><a href="#">Блок 4</a></h3><h3><a href="#">Блок 5</a></h3></div>');
        }
        document.querySelector('#closeNavigation').addEventListener('click', function(){
            closeNavigation();
        });
        let nav = document.querySelector('#showNavigation');
        nav.innerHTML = '<i class="fa fa-check"></i>Показать навигацию';
    });

    document.querySelector('#showComments').addEventListener('click', function(){
        let comDiv = document.querySelector('#commentsBlock');
        if (comDiv == null) {
            document.querySelector('#editSection .inner').insertAdjacentHTML('beforeend','<div id="commentsBlock"><h5>Примечания <a href="#" id="closeComments" class="closeButton button altMenu" title="Закрыть структуру документа"><i class="fa fa-times"></i></a></h5><p class="annotation">Примечание 1</p><br><br><br><p class="annotation">Примечание 2</p><br><br><p class="annotation">Примечание 3</p><p class="annotation">Примечание 4</p><br><br><p class="annotation">Примечание 5</p></div>');
        }
        document.querySelector('#closeComments').addEventListener('click', function(){
            closeComments();
        });
        let comItem = document.querySelector('#showComments');
        comItem.innerHTML = '<i class="fa fa-check"></i>Показать примечания';
    });
    document.querySelector('#showTemplates').addEventListener('click', function(){
        let tmpDiv = document.querySelector('#templateBlock');
        if (tmpDiv == null) {
            document.querySelector('#editSection .inner').insertAdjacentHTML('beforeEnd',	'<div id="templateBlock"><h5 id="templateTitle">Шаблоны <a href="#" id="closeTemplates" class="closeButton button altMenu" title="Закрыть список шаблонов"><i class="fa fa-times"></i></a></h5><p></p><h5><a href="#" class="button altMenu">Шаблон 1</a></h5><h5><a href="#" class="button altMenu">Шаблон 2</a></h5></div>');
        }
        document.querySelector('#closeTemplates').addEventListener('click', function(){
            closeTemplates();
        });
        let tmpItem = document.querySelector('#showTemplates');
        tmpItem.innerHTML = '<i class="fa fa-check"></i>Показать шаблоны';
    });

    let sizeList = document.querySelectorAll('.fontSize');
    for (var i = 0; i < sizeList.length; i++) {
        let elemSize = sizeList[i];
        let innerSize = elemSize.innerHTML + ' <i class="fa fa-caret-down"></i>';
        elemSize.addEventListener('click', function() {
            let size = document.querySelector('#fontSizeButton');
            size.innerHTML = innerSize;
        });
    }

    let familyList = document.querySelectorAll('.fontFamily');
    for (var i = 0; i < familyList.length; i++) {
        let elemFamily = familyList[i];
        let innerFamily = elemFamily.innerHTML + ' <i class="fa fa-caret-down"></i>';
        elemFamily.addEventListener('click', function() {
            let family = document.querySelector('#fontFamilyButton');
            family.innerHTML = innerFamily;
        });
    }    
})();


/*
						<div id="commentsBlock"><h5>Примечания <a href="#" id="closeComments" class="closeButton button altMenu" title="Закрыть структуру документа"><i class="fa fa-times"></i></a></h5><p class="annotation">Примечание 1</p><br><br><br><p class="annotation">Примечание 2</p><br><br><p class="annotation">Примечание 3</p><p class="annotation">Примечание 4</p><br><br><p class="annotation">Примечание 5</p></div>
*/

/*
						<div id="templateBlock"><h5 id="templateTitle">Шаблоны <a href="#" class="closeButton button altMenu" id="closeTemplates" title="Закрыть структуру документа"><i class="fa fa-times"></i></a></h5><p></p><h5><a href="#" class="button altMenu">Шаблон 1</a></h5><h5><a href="#" class="button altMenu">Шаблон 2</a></h5></div>
*/