let user_step = 1;

const pin_steps = document.getElementsByClassName("trail-pin");
const modal = document.getElementById("modal-finished");
const close = document.getElementsByClassName("close")[0];

function nextStep() {
    if (user_step < pin_steps.length) {
        user_step++;
        toggleUserPin();
    } else {
        openModal();
    }
}

function previousStep() {
    if (user_step > 1) {
        user_step--;
        toggleUserPin();
    }
}

function toggleUserPin() {

    const i_step = pin_steps.length - user_step;

    for (let i = 0; i < pin_steps.length; i++) {
        if (i_step === i) {
            pin_steps[i].classList.add("user-pin")
        } else {
            pin_steps[i].classList.remove("user-pin");
        }
    }
}

function openModal() {
    modal.style.display = "block";
}

close.onclick = function() {
    closeModal();
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal()
    }
}

function closeModal(){
    modal.style.display = "none";
}