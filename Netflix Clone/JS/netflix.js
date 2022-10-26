// ================== Variables ================//

const Btns = document.querySelectorAll(".email-btn")

const inputs = document.querySelectorAll(".email-input");

const questionBtns = document.querySelectorAll(".faq-section__faq-container__question-container__button")

// Rotate the X and put this into DOM loaded



let priority = false;


// ================= Functions =====================//
const isRequired = (value) =>  {
    if (value < 5) {
        return false
    }
    else {
        return true
    }
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

    const mustBvalid = (mes) => {
        
        mes.textContent = "Insira um email válido.";
        mes.style.color = "rgb(242,160,14)";

    }

    const mustNempty = (mes) => {
        
        mes.textContent = "O email é obrigatório.";
        mes.style.color = "rgb(242,160,14)";
    }

    const EmailOk = (mes) => {

        mes.textContent = "placeholder text";
        mes.style.color = "transparent";
    }


    const errorCol = (input) => {
        input.style.border = '1px solid rgb(140,140,140)'
        input.style.borderBottom = '2px solid rgb(242,160,14)';
        input.style.paddingBottom = ".8em";
    }

    const validCol = (input) => {
        input.style.border = '1px solid rgb(95,165,63)';
        input.style.paddingBottom = ".85em";
    }
    
    const labelUp = (inputBox) => {
        const emailLabel = inputBox.parentElement.parentElement.previousElementSibling;
        emailLabel.style.top = "-11%"
        emailLabel.style.fontSize = "12.5px"
        emailLabel.style.fontWeight = "700"
        

    }

    const labelDown = (inputBox) => {
        const emailLabel = inputBox.parentElement.parentElement.previousElementSibling;
        emailLabel.style.top = "4%"
        emailLabel.style.fontSize = "15px"
        emailLabel.style.fontWeight = "400"
        
    }
    
    const checkEmail = (e) => {
        
        const inputEl = e;
        const span = e.nextElementSibling;
        const chars = e.value.trim();
        const inpLen = e.value.trim().length;
        

        if (isRequired(inpLen) === false) {
            mustNempty(span);
            errorCol(inputEl);
            
        }
        else if (!isEmailValid(chars)) {
            mustBvalid(span);
            errorCol(inputEl);
            
        }
        else {
            EmailOk(span);
            validCol(inputEl);
        }
    }
    
    

////// ================= DOM ================ //////

window.addEventListener('DOMContentLoaded', function () {

    // email inputs //
    inputs.forEach(input => {
        input.addEventListener('blur', function (e) {
            priority = true;
            const thisBlur = e.target
            checkEmail(thisBlur);
            labelDown(thisBlur);
        });
        input.addEventListener('input', function (e) {
            const thisInput = e.target;
            if (priority === true) {
            checkEmail(thisInput)}    
        });
        input.addEventListener('click', function (e) {
            const thisInput = e.target;
            labelUp(thisInput);
        });
        
    }),
    // email buttons
    Btns.forEach(function (btn) {
        btn.addEventListener('click', function(e){
            const thisBtnSibling = e.target.previousElementSibling.firstChild.nextElementSibling;
            priority  = true;
            checkEmail(thisBtnSibling);
            labelUp(thisBtnSibling);
        })
        btn.addEventListener('blur', function(e){
            const thisBtnBlur = e.target.previousElementSibling.firstChild.nextElementSibling;
            labelDown(thisBtnBlur)
            
            
        })
        })

    // FAQ buttons //
    questionBtns.forEach(function(btn){    
        btn.addEventListener('click', function (e) {
            // answer box 
            thisBtnAnswer = e.target.nextElementSibling;
            // X-symbol 
            const Xmark = e.target.firstChild.nextElementSibling.nextElementSibling;

            if (thisBtnAnswer.style.maxHeight) {
                thisBtnAnswer.style.maxHeight = null;
                Xmark.style.transform = 'rotateZ(45deg) scale(1.5)'
            }
            else {
                Xmark.style.transform = 'rotateZ(90deg) scale(1.5)'
                thisBtnAnswer.style.maxHeight = "100em";
                questionBtns.forEach((button)=>{
                    if(button !== e.target) {
                        button.nextElementSibling.style.maxHeight = null;
                        button.firstChild.nextElementSibling.nextElementSibling.style.transform = 'rotateZ(45deg) scale(1.5)'
                    }
                })
            }
        })
            
        })

});
