/* FOCUSLY COMMON NAVIGATION */

function focuslyGo(page) {
    window.location.href = page;
}

function createFocuslyNav(activePage) {

    const nav = document.createElement("div");

    nav.className = "focusly-bottom-nav";

    nav.innerHTML = `
        <div class="focusly-nav-item ${activePage === "home" ? "active" : ""}"
             onclick="focuslyGo('index.html')">
            <span>🏠</span>
            <small>Home</small>
        </div>

        <div class="focusly-nav-item ${activePage === "schedule" ? "active" : ""}"
             onclick="focuslyGo('schedule.html')">
            <span>🗓️</span>
            <small>Schedule</small>
        </div>

        <div class="focusly-nav-item ${activePage === "tasks" ? "active" : ""}"
             onclick="focuslyGo('tasks.html')">
            <span>✅</span>
            <small>Tasks</small>
        </div>

        <div class="focusly-nav-item ${activePage === "study" ? "active" : ""}"
             onclick="focuslyGo('study.html')">
            <span>📚</span>
            <small>Study</small>
        </div>

        <div class="focusly-nav-item ${activePage === "profile" ? "active" : ""}"
             onclick="focuslyGo('profile.html')">
            <span>👤</span>
            <small>Profile</small>
        </div>
    `;

    document.body.appendChild(nav);
}


/* NAVIGATION STYLE */

const focuslyNavStyle = document.createElement("style");

focuslyNavStyle.innerHTML = `
.focusly-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -4px 18px rgba(0,0,0,.08);
    z-index: 9999;
}

.focusly-nav-item {
    min-width: 60px;
    text-align: center;
    color: #687386;
    cursor: pointer;
    font-size: 11px;
    transition: .2s;
}

.focusly-nav-item span {
    display: block;
    font-size: 21px;
    margin-bottom: 4px;
}

.focusly-nav-item small {
    font-size: 11px;
}

.focusly-nav-item.active {
    color: #172033;
    font-weight: bold;
}

.focusly-nav-item:active {
    transform: scale(.92);
}

body {
    padding-bottom: 90px !important;
}
`;

document.head.appendChild(focuslyNavStyle);