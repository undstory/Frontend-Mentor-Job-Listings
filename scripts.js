let itemTag = document.querySelectorAll('.item__tag');
let itemSearch = document.querySelectorAll('.item__search');
let listingItem = document.querySelectorAll('.listing__item'); 
let close = document.querySelectorAll('.item__search--close');

const searcher = document.querySelector('.searcher'),
    clear = document.querySelector('.clear');


itemTag.forEach(function(elem){
    elem.addEventListener('click', function(){
        searcher.style.display = "flex";
        if(elem.getAttribute('data-level-j')=== 'junior'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-level-j') === 'junior'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-level-j') !== 'junior'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-level-m')=== 'midweight'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-level-m') === 'midweight'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-level-m') !== 'midweight'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-level-s')=== 'senior'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-level-s') === 'senior'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-level-s') !== 'senior'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-role-f')=== 'frontend'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-role-f') === 'frontend'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-role-f') !== 'frontend'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-role-b')=== 'backend'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-role-b') === 'backend'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-role-b') !== 'backend'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-role-fs')=== 'fullstack'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-role-fs') === 'fullstack'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-role-fs') !== 'fullstack'){
                    el.style.display = "none";
                }
            })
        }

        if(elem.getAttribute('data-languages-h')=== 'html'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages-h') === 'html'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages-h') !== 'html'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-languages-c')=== 'css'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages-c') === 'css'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages-c') !== 'css'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-languages-j')=== 'js'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages-j') === 'js'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages-j') !== 'js'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-languages-p')=== 'python'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages-p') === 'python'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages-p') !== 'python'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-languages-r')=== 'ruby'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages-r') === 'ruby'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages-r') !== 'ruby'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool-s')=== 'sass'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool-s') === 'sass'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool-s') !== 'sass'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool-r')=== 'react'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool-r') === 'react'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool-r') !== 'react'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool-v')=== 'vue'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool-v') === 'vue'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool-v') !== 'vue'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool-d')=== 'django'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool-d') === 'django'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool-d') !== 'django'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool-rr')=== 'ror'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool-rr') === 'ror'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool-rr') !== 'ror'){
                    el.style.display = "none";
                }
            })
        }
       

    })

  
})

clear.addEventListener('click', function(){
    searcher.style.display = "none";

    itemSearch.forEach(function(ele){
        if(ele.style.display === "inline"){
            ele.style.display = "none";
        }
    })

    listingItem.forEach(function(el){
        el.style.display = "flex";
    })
   
})

itemSearch.forEach(function(elem){
    elem.addEventListener('click', function(){
        
            elem.style.display = 'none'; 
            listingItem.forEach(function(el){
                el.style.display = "flex";
            })
        })

       
    })
