
window.onload = function(){

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }

    googleTranslateElementInit();
    googleTranslateElement = document.querySelector("#google_translate_element");

    document.querySelector('i.fa-language').addEventListener('click', function(){
        console.log(google_translate_element.style.display);
        googleTranslateElement.style.display = googleTranslateElement.style.display != 'block'? 'block' : 'none';
    })

}


