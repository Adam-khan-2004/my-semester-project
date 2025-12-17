function openTab(tabId, btn) {
    let tabs = document.querySelectorAll('.tab-content');
    let buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

/* Pause other videos */
let videos = document.querySelectorAll("video");
videos.forEach(video => {
    video.addEventListener("play", () => {
        videos.forEach(v => {
            if (v !== video) v.pause();
        });
    });
});

/* Simple fade-in effect */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".tab-content").forEach(sec => {
        sec.style.opacity = "1";
    });
});
