let itemTag = document.querySelectorAll('.item__tag');
let itemSearch = document.querySelectorAll('.item__search');
let listingItem = document.querySelectorAll('.listing__item'); 

const searcher = document.querySelector('.searcher'),
    clear = document.querySelector('.clear');


itemTag.forEach(function(elem){
    elem.addEventListener('click', function(){
        searcher.style.display = "flex";
        if(elem.getAttribute('data-level')=== 'junior'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-level') === 'junior'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-level') !== 'junior'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-level')=== 'midweight'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-level') === 'midweight'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-level') !== 'midweight'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-level')=== 'senior'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-level') === 'senior'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-level') !== 'senior'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-role')=== 'frontend'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-role') === 'frontend'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-role') !== 'frontend'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-role')=== 'backend'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-role') === 'backend'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-role') !== 'backend'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-role')=== 'fullstack'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-role') === 'fullstack'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-role') !== 'fullstack'){
                    el.style.display = "none";
                }
            })
        }

        if(elem.getAttribute('data-languages')=== 'html'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages') === 'html'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages') !== 'html'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-languages')=== 'css'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages') === 'css'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages') !== 'css'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-languages')=== 'js'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages') === 'js'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages') !== 'js'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-languages')=== 'python'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages') === 'python'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages') !== 'python'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-languages')=== 'ruby'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-languages') === 'ruby'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-languages') !== 'ruby'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool')=== 'sass'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool') === 'sass'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool') !== 'sass'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool')=== 'react'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool') === 'react'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool') !== 'react'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool')=== 'vue'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool') === 'vue'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool') !== 'vue'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool')=== 'django'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool') === 'django'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool') !== 'django'){
                    el.style.display = "none";
                }
            })
        }
        if(elem.getAttribute('data-tool')=== 'ror'){
            itemSearch.forEach(function(e){
                if(e.getAttribute('data-tool') === 'ror'){
                    e.style.display = "inline";
                }
            })
            listingItem.forEach(function(el){
                if(el.getAttribute('data-tool') !== 'ror'){
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