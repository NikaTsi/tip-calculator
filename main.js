const billInput = document.querySelector(".billInput")
const customInput = document.querySelector(".customInput")
const peopleAmountInput = document.querySelector(".peopleAmountInput")
const reset = document.querySelector(".reset")
const tip = document.querySelector(".tip")
const total = document.querySelector(".total")

const txt = document.querySelector("h6")

const spn1 = document.querySelector(".span-1")
const spn2 = document.querySelector(".span-2")

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")

const btn = document.querySelectorAll("button")


billInput.addEventListener("keyup", () => {
    update()
})

customInput.addEventListener("keyup", () => {
    update()
    remover()
})

peopleAmountInput.addEventListener("keyup", () => {
    update()
})


function update() {
    let userbillInput = billInput.value
    let usercustomInput = customInput.value
    let userpeopleAmountInput = peopleAmountInput.value

    let money = parseFloat(userbillInput)
    let custTip = parseFloat(usercustomInput)
    let people = parseInt(userpeopleAmountInput)

    if (userbillInput !== "" || usercustomInput !== "" || userpeopleAmountInput !== "") {
        reset.classList.add("button-active")
        txt.classList.add("h6-active")
    } else {
        reset.classList.remove("button-active")
        txt.classList.remove("h6-active")
    }

    let tipAmount = custTip / people;
    tip.innerHTML = `$${Math.round(tipAmount * 100) / 100}`

    let totalAmount = money / people
    total.innerHTML = `$${Math.round(totalAmount * 100) / 100}`


    spn2.classList.remove("active")
    spn1.classList.remove("active")
    billInput.classList.remove("valid-box", "err-box")
    peopleAmountInput.classList.remove("valid-box", "err-box")

    if (userbillInput === "" && userpeopleAmountInput !== "") {
        peopleAmountInput.classList.add("valid-box")
        spn1.classList.add("active")
        billInput.classList.add("err-box")
        total.innerHTML = `$0.00`
        tip.innerHTML = `$0.00`
    } else if (userbillInput !== "" && userpeopleAmountInput === "") {
        billInput.classList.add("valid-box")
        spn2.classList.add("active")
        peopleAmountInput.classList.add("err-box")
        total.innerHTML = `$0.00`
        tip.innerHTML = `$0.00`
    } else if (userbillInput === "" && userpeopleAmountInput === "") {
        billInput.classList.remove("valid-box", "err-box")
        peopleAmountInput.classList.remove("valid-box", "err-box")
        total.innerHTML = `$0.00`
        tip.innerHTML = `$0.00`
    } else if (usercustomInput === "") {
        tip.innerHTML = `$0.00`
    }
}

function percentageCalculator(value) {
    remover()
    
    if (peopleAmountInput.value === "" || billInput.value === "") {
        tip.innerHTML = `$0.00`
    } else if (billInput.value !== "" || peopleAmountInput.value !== "") {
        let money = parseFloat(billInput.value)
        let people = parseInt(peopleAmountInput.value)

        let tipPerPerson = money * value / 100 / people
        tip.innerHTML = `$${Math.round(tipPerPerson * 100) / 100}`
        customInput.value = ""

        switch (value) {
            case 5:
                btn1.classList.add("click");
                break;
            case 10:
                btn2.classList.add("click");
                break;
            case 15:
                btn3.classList.add("click");
                break;
            case 25:
                btn4.classList.add("click");
                break;
            case 50:
                btn5.classList.add("click");
                break;
            default:
                break;
        }
    }
}

function remover() {
    [btn1, btn2, btn3, btn4, btn5].forEach(btn => btn.classList.remove("click"));
}


reset.addEventListener("click", () => {
    billInput.value = ""
    customInput.value = ""
    peopleAmountInput.value = ""
    total.innerHTML = `$0.00`
    tip.innerHTML = `$0.00`
    reset.classList.remove("button-active")
    txt.classList.remove("h6-active")
    spn2.classList.remove("active")
    spn1.classList.remove("active")
    billInput.classList.remove("valid-box", "err-box")
    peopleAmountInput.classList.remove("valid-box", "err-box")
    remover()
})