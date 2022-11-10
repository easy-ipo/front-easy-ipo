const modal = document.getElementById("modal-video");
const youtube = document.getElementById("youtube-video");
const close = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
    youtube.src = "https://www.youtube.com/embed/nhsu9ZbnwVY";
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
    youtube.src = "";
}