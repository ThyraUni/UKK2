const targetDate = new Date("December 31, 2025 23:59:59").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        alert("Countdown Finished!");
    }
}, 1000);

var modal = document.getElementById("rsvpModal");
var closeModal = document.getElementsByClassName("close")[0];

function showRSVPModal(id = '', nama = '', grup = '', whatsapp = '', kehadiran = '', ucapan = '') {
    document.getElementById("nama").value = nama;
    document.getElementById("grup").value = grup;
    document.getElementById("whatsapp").value = whatsapp;
    document.getElementById("kehadiran").value = kehadiran;
    document.getElementById("ucapan").value = ucapan;
    modal.style.display = "block";
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function salinKado() {
    const select = document.getElementById("kado");
    const notif = document.getElementById("salinNotif");
    const value = select.value;

    if (value) {
        navigator.clipboard.writeText(value)
            .then(() => {
                notif.classList.remove("hidden");

                setTimeout(() => {
                    notif.classList.add("hidden");
                }, 2000);
            })
            .catch(err => {
                alert("Gagal menyalin. Coba di browser yang mendukung clipboard API.");
                console.error(err);
            });
    } else {
        alert("Silakan pilih opsi terlebih dahulu.");
    }
}

lucide.createIcons();

const openBtn = document.getElementById('openBtn');
const opening = document.querySelector('.opening');
const content = document.querySelector('.content');
const audio = document.getElementById('audio');
const pemelai = document.getElementById('pemelai');
const playPauseBtn = document.getElementById('playPauseBtn');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');

openBtn.addEventListener('click', () => {
    // sembunyikan opening

    // tampilkan content
    content.classList.remove('hidden');

    // mainkan audio
    audio.play();

    // scroll smooth ke #pemelai
    pemelai.scrollIntoView({ behavior: 'smooth' });

    // update icon play/pause
    iconPlay.classList.add('hidden');
    iconPause.classList.remove('hidden');
});

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        iconPlay.classList.add('hidden');
        iconPause.classList.remove('hidden');
    } else {
        audio.pause();
        iconPlay.classList.remove('hidden');
        iconPause.classList.add('hidden');
    }
});



