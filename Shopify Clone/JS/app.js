
const inputs = document.querySelectorAll('.input');
const forms = document.querySelectorAll('.forms');
const faqBtns = document.querySelectorAll('.faq-btn');


window.addEventListener("DOMContentLoaded", () => {
    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
        })
    })
    inputs.forEach((input) => {

        input.addEventListener('click', (e)=> {
            e.target.style.outline = "2px solid rgb(46,119,90)";
        })
        input.addEventListener('blur', (e)=> {
            e.target.style.outline = "none";
        })
        input.addEventListener('input', (e) => {
            const thisInput = e.target
            const thisLabel = thisInput.nextElementSibling;
            thisLabel.style.top = "1em";
            thisInput.style.padding = "1.5em 1em .5em 1em"
            thisLabel.style.color = "rgb(45, 45, 46)"

            if (thisInput.value === "") {
                thisLabel.style.top = "1.5em"
                thisLabel.style.color = "transparent"
                thisInput.style.padding = "1em 1em 1em 1em"
            }
        })
    })
    faqBtns.forEach((btn) => {
        btn.addEventListener('click', (e)=> {
            let panel = e.target.nextElementSibling;
            let symbol = e.target.firstChild.nextElementSibling.firstChild;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                symbol.classList = "fa fa-plus"
                
            } else {
                panel.style.maxHeight = "100em";
                symbol.classList = "fa fa-minus"
            }
        })
    })
})
