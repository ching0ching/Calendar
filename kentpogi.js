// Philippine holidays for 2025
const holidays = [
    { date: "2025-06-13", title: "First Faculty Meeting" },
    { date: "2025-06-16", title: "First Day of School" },
    { date: "2025-06-16", title: "Student's General Orientation" },
    { date: "2025-06-17", title: "Student's General Orientation" },
    { date: "2025-06-16", title: "Psychosocial Support Activities" },
    { date: "2025-06-17", title: "Psychosocial Support Activities" },
    { date: "2025-06-18", title: "Psychosocial Support Activities" },
    { date: "2025-06-19", title: "Psychosocial Support Activities" },
    { date: "2025-06-19", title: "Parents' General Orientation (PM)" },
    { date: "2025-06-20", title: "Teachers' Seminar/Training/ Workshops" },
    { date: "2025-07-16", title: "1st Day Intramurals" },
    { date: "2025-07-17", title: "2nd Day Intramurals" },
    { date: "2025-08-01", title: "3rd Day Intramurals" },
    { date: "2025-07-30", title: "First Professional Learing Community (PLC)" },
    { date: "2025-08-04", title: "Preliminary Examination for the 1st Semester" },
    { date: "2025-08-06", title: "Preliminary Examination for the 1st Semester" },
    { date: "2025-08-27", title: "Second Professional Learning Community (PLC)" },
    { date: "2025-08-28", title: "Midterm Examination for the 1st Semester" },
    { date: "2025-08-29", title: "Midterm Examination for the 1st Semester" },
    { date: "2025-09-19", title: "Mental Health Awareness Seminar (Phase 1) (PM)" },
    { date: "2025-09-24", title: "Third Professional Learning Community (PLC)" },
    { date: "2025-09-25", title: "Semi-Final Exemination for the 1st Semester" },
    { date: "2025-09-26", title: "Semi-Final Exemination for the 1st Semester" },
    { date: "2025-10-03", title: "World Teachers' Day Celebration (AM)" },
    { date: "2025-10-13", title: "Completion of Academic Clearance for Second Semester " },
    { date: "2025-10-14", title: "Completion of Academic Clearance for Second Semester " },
    { date: "2025-10-15", title: "Completion of Academic Clearance for Second Semester " },
    { date: "2025-10-16", title: "Completion of Academic Clearance for Second Semester " },
    { date: "2025-10-17", title: "Completion of Academic Clearance for Second Semester " },
    { date: "2025-10-22", title: "Fourth Professional Learning Community (PLC)" },
    { date: "2025-10-23", title: "Final Examination for the 1st Semester" },
    { date: "2025-10-24", title: "Final Examination for the 1st Semester" },
    { date: "2025-10-27", title: "Mid-School Year Wellness Break of Learners and Teachers" },
    { date: "2025-10-28", title: "Mid-School Year Wellness Break of Learners and Teachers" },
    { date: "2025-10-29", title: "Mid-School Year Wellness Break of Learners and Teachers" },
    { date: "2025-10-30", title: "Mid-School Year Wellness Break of Learners and Teachers" },
    { date: "2025-10-31", title: "Mid-School Year Wellness Break of Learners and Teachers" },
    { date: "2025-10-27", title: "Enrollment for Second Semester" },
    { date: "2025-10-28", title: "Enrollment for Second Semester" },
    { date: "2025-10-29", title: "Enrollment for Second Semester" },
    { date: "2025-10-30", title: "Enrollment for Second Semester" },
    { date: "2025-10-31", title: "Enrollment for Second Semester" },
    { date: "2025-11-11", title: "Career Guidance Activity For Grade 11 (AM)" },
    { date: "2025-11-13", title: "Semestral Convocation Day (AM)/ Parents' Meeting (PM) " },
    { date: "2025-11-21", title: "Educational Trip 2025 (Tentative)" },
    { date: "2025-11-25", title: "Preliminary Examination for the 2nd Semester" },
    { date: "2025-11-26", title: "Preliminary Examination for the 2nd Semester" },
    { date: "2025-12-11", title: "Career Guidance Activity for Grade 12 (AM)" },
    { date: "2025-12-17", title: "Year End party" },
    { date: "2025-12-18", title: "Start of Christmas Break" },
    { date: "2026-01-05", title: "Resumption of Classes" },
    { date: "2026-01-09", title: "Fifth Professional Learning Community (PLC)" },
    { date: "2026-01-12", title: "Midterm Examination for the 2nd Semester" },
    { date: "2026-01-13", title: "Midterm Examination for the 2nd Semester" },
    { date: "2026-01-19", title: "98th Foundation Day" },
    { date: "2026-01-20", title: "98th Foundation Day" },
    { date: "2026-01-21", title: "98th Foundation Day" },
    { date: "2026-01-22", title: "98th Foundation Day" },
    { date: "2026-01-23", title: "98th Foundation Day" },
    { date: "2026-01-31", title: "Early Registration for the Incoming Grade 11" },
    { date: "2026-02-05", title: "Candelaria Town Fiesta" },
    { date: "2026-02-13", title: "Valentines Day Celebration" },
    { date: "2026-02-20", title: "Mental Health Awareness Seminar (Phase 2) (PM)" },
    { date: "2026-02-26", title: "Final Examination of Grade 12 for the 2nd Semester" },
    { date: "2026-02-27", title: "Final Examination of Grade 12 for the 2nd Semester" },
    { date: "2026-03-04", title: "Sixth Professional Learning Community (PLC)" },
    { date: "2026-03-05", title: "Final Examination of Grades 11 for the 2nd Semester" },
    { date: "2026-03-06", title: "Final Examination of Grades 11 for the 2nd Semester" },
    { date: "2026-03-12", title: "Deliberation of Honors (Grade 12)(PM)" },
    { date: "2026-03-20", title: "Graduation Ball" },
    { date: "2026-03-25", title: "Recognition Day (AM)" },
    { date: "2026-03-27", title: "88th Commencement Exercise" },
    { date: "2026-04-03", title: "Distribution of Card (Tentative)" }
];
const birthdays = [
    { date: "2025-01-01", title: "New Year's Day" },
    { date: "2025-02-25", title: "EDSA People Power Revolution" },
    { date: "2025-03-20", title: "Maundy Thursday" },
    { date: "2025-03-21", title: "Good Friday" },
    { date: "2025-04-09", title: "Araw ng Kagitingan" },
    { date: "2025-05-01", title: "Labor Day" },
    { date: "2025-06-12", title: "Independence Day" },
    { date: "2025-08-21", title: "Ninoy Aquino Day" },
    { date: "2025-08-25", title: "National Heroes Day" },
    { date: "2025-11-01", title: "All Saints' Day" },
    { date: "2025-11-30", title: "Bonifacio Day" },
    { date: "2025-12-08", title: "Immaculate Conception" },
    { date: "2025-12-24", title: "Christmas Eve" },
    { date: "2025-12-25", title: "Christmas Day" },
    { date: "2025-12-30", title: "Rizal Day" },
    { date: "2025-02-14", title: "Valentines Day" },
    { date: "2026-01-01", title: "New Year's Day" },
    { date: "2026-02-25", title: "EDSA People Power Revolution" },
    { date: "2026-03-19", title: "Maundy Thursday" },
    { date: "2026-03-20", title: "Good Friday" },
    { date: "2026-04-09", title: "Araw ng Kagitingan" },
    { date: "2026-05-01", title: "Labor Day" },
    { date: "2026-06-12", title: "Independence Day" },
    { date: "2026-08-21", title: "Ninoy Aquino Day" },
    { date: "2026-08-25", title: "National Heroes Day" },
    { date: "2026-11-01", title: "All Saints' Day" },
    { date: "2026-11-30", title: "Bonifacio Day" },
    { date: "2026-12-08", title: "Immaculate Conception" },
    { date: "2026-12-24", title: "Christmas Eve" },
    { date: "2026-12-25", title: "Christmas Day" },
    { date: "2026-12-30", title: "Rizal Day" },
    { date: "2026-02-14", title: "Valentines Day" }
];

const kaarawans = [
    { date: "2025-11-08", title: "Admin 1 Birthday" },
    { date: "2025-06-25", title: "Admin 2 Birthday" },
    { date: "2025-11-05", title: "Admin 3 Birthday" },
    { date: "2025-04-10", title: "Sir Vicente Porto's Birthday" },
    { date: "2025-02-27", title: "Sir James De Guzman's Birthday" },
    { date: "2025-03-31", title: "Ma'am Jennifer Bas's Birthday" },
    { date: "2025-04-12", title: "Sir Ronn Ramos's Birthday" },
    { date: "2025-09-15", title: "Sir Eugene Saguirer's Birthday" },
    { date: "2025-04-21", title: "Ma'am Maryjane De Cillo's Birthday" },
    { date: "2025-02-05", title: "Ma'am Lady Lyn Ramos's Birthday" },
    { date: "2025-02-02", title: "Ma'am Karen Fajardo's Birthday" },
    { date: "2025-07-23", title: "Sir Ken Deseo's Birthday" },
    { date: "2025-09-22", title: "Ma'am Maura Zeta's Birthday" },
    { date: "2025-12-22", title: "Sir John Carlo Balbuena's Birthday" },
    { date: "2025-05-02", title: "Ma'am Angelica Aguila's Birthday" },
    { date: "2025-10-11", title: "Ma'am Teresa Marquez's Birthday" },
    { date: "2025-08-20", title: "Sir Cris De Silva's Birthday" },
    { date: "2025-08-30", title: "Sir Rammir Palacio's Birthday" },
    { date: "2025-12-31", title: "Sir Carrie Estrellado's Birthday" },
    { date: "2025-02-08", title: "Ma'am Geneveive Jamias's Birthday" },
    { date: "2025-11-05", title: "Sir Marlito Gollena's Birthday" },
    { date: "2025-02-23", title: "Sir Ken Deseo's Birthday" },
    { date: "2025-07-08", title: "Sir Arnel Mendoza's Birthday" },
    { date: "2025-02-01", title: "Sir Ronald Yazon's Birthday" },
    { date: "2025-04-05", title: "Sir Louie Cezar Leocadio's Birthday " },
    { date: "2025-10-20", title: "Ma'am Irene Manongsong's Birthday" },
    { date: "2025-01-06", title: "Sir Joseph Umandap's Birthday" },
    { date: "2025-00-00", title: "Ma'am Zildjanne Palacio's Birthday" },
    //
    { date: "2025-00-00", title: "Ma'am Glady Copo's Birthday" }
];

const ADMIN_PASSWORD = "admin123";

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let isAdmin = false;

function $(id) { return document.getElementById(id); }
function getEvents() { return JSON.parse(localStorage.getItem("events") || "[]"); }
function saveEvents(events) { localStorage.setItem("events", JSON.stringify(events)); }
function getEventsForDate(dateStr) {
    const ev = getEvents().filter(ev => ev.date === dateStr);
    const hol = holidays.filter(h => h.date === dateStr).map(h => ({title: h.title, system: true, holiday: true}));
    const bdays = birthdays.filter(b => b.date === dateStr).map(b => ({title: b.title, system: true, birthday: true}));
    const krw = kaarawans.filter(b => b.date === dateStr).map(b => ({title: b.title, system: true, kaarawan: true}));
    return [...ev, ...hol, ...bdays, ...krw];
}
function isHoliday(dateStr) { return holidays.some(h => h.date === dateStr); }
function isBirthday(dateStr) { return birthdays.some(b => b.date === dateStr); }
function isKaarawan(dateStr) { return kaarawans.some(h => h.date === dateStr); }
function formatDate(date) { return date.toISOString().slice(0, 10); }
function showNotification(msg) {
    const n = $("notification");
    n.textContent = msg;
    n.classList.add("show");
    setTimeout(() => n.classList.remove("show"), 4000);
}

function renderCalendar(month, year) {
    $("calendar").innerHTML = "";
    $("month-year").textContent = new Date(year, month).toLocaleString("en-US", {
        month: "long", year: "numeric"
    });
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let grid = `<div class="calendar-grid">`;
    days.forEach(d => grid += `<div class="day-header">${d}</div>`);
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month+1, 0).getDate();
    for (let i = 0; i < firstDay; i++) grid += `<div class="day-cell disabled"></div>`;
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
        let classes = "day-cell";
        let todayStr = formatDate(new Date());
        if (dateStr === todayStr) classes += " today";
        if (isHoliday(dateStr)) classes += " holiday";
        if (isBirthday(dateStr)) classes += " birthday";
        if (isKaarawan(dateStr)) classes += " kaarawan";
        let userEvents = getEvents().filter(ev => ev.date === dateStr);
        let allEvents = getEventsForDate(dateStr);
        if (allEvents.length) classes += " has-event";
        if (userEvents.length) classes += " userevent";
        grid += `<div class="${classes}" data-date="${dateStr}">${day}</div>`;
    }
    let totalCells = daysInMonth + firstDay;
    for (let i = totalCells; i < 42; i++) grid += `<div class="day-cell disabled"></div>`;
    grid += `</div>`;
    $("calendar").innerHTML = grid;
    document.querySelectorAll(".day-cell:not(.disabled)").forEach(cell => {
        cell.onclick = () => openEventModal(cell.dataset.date);
    });
}

function openEventModal(dateStr) {
    $("event-modal").classList.remove("hidden");
    $("modal-date").textContent = new Date(dateStr).toLocaleDateString("en-US", {month:"long", day:"numeric", year:"numeric"});
    let evs = getEventsForDate(dateStr);
    $("event-list").innerHTML = "";
    if (evs.length) {
        evs.forEach(ev => {
            let icons = "";
    if (ev.kaarawan) icons += "🎂";
    if (ev.holiday) icons += "📌"; 
    if (ev.birthday) icons += "🏖️"; 
    let li = document.createElement("li");
    li.textContent = `${icons} ${ev.title}`;
            if (isAdmin && !ev.system) {
                let delBtn = document.createElement("button");
                delBtn.textContent = "🗑️";
                delBtn.style.marginLeft = "8px";
                delBtn.onclick = () => {
                    let events = getEvents();
                    let newEvents = events.filter(e => !(e.date === dateStr && e.title === ev.title));
                    saveEvents(newEvents);
                    openEventModal(dateStr);
                    renderCalendar(currentMonth, currentYear); // update grid
                };
                li.appendChild(delBtn);
            }
            $("event-list").appendChild(li);
        });
    } else {
        $("event-list").innerHTML = `<li>No events</li>`;
    }
    // Only show Add Event if admin
    if (isAdmin) {
        $("add-event-btn").classList.remove("hidden");
    } else {
        $("add-event-btn").classList.add("hidden");
    }
    $("event-form").classList.add("hidden");
    $("add-event-btn").onclick = () => {
        $("event-form").classList.remove("hidden");
        $("add-event-btn").classList.add("hidden");
        $("event-title").value = "";
        $("event-title").focus();
    };
    $("event-form").onsubmit = e => {
        e.preventDefault();
        if (!isAdmin) return; // Prevent non-admin from adding
        let title = $("event-title").value.trim();
        if (title) {
            let events = getEvents();
            events.push({date: dateStr, title});
            saveEvents(events);
            openEventModal(dateStr);
            renderCalendar(currentMonth, currentYear); // update grid!
        }
        $("event-form").classList.add("hidden");
        $("add-event-btn").classList.remove("hidden");
    };
}

function closeModals() {
    document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden"));
}
function openAdminModal() {
    $("admin-modal").classList.remove("hidden");
    $("admin-password").value = "";
    $("admin-password").focus();
}
function adminLogin(pw) {
    if (pw === ADMIN_PASSWORD) {
        isAdmin = true;
        document.body.classList.add("admin-logged");
        showNotification("Admin mode enabled!");
        $("admin-login-btn").classList.add("hidden");
        $("admin-logout-btn").classList.remove("hidden");
    } else {
        showNotification("Wrong password.");
    }
    closeModals();
}
function adminLogout() {
    isAdmin = false;
    document.body.classList.remove("admin-logged");
    $("admin-login-btn").classList.remove("hidden");
    $("admin-logout-btn").classList.add("hidden");
    showNotification("Admin logged out.");
    // Hide add event button if modal is open
    $("add-event-btn").classList.add("hidden");
    $("event-form").classList.add("hidden");
}
function loadTheme() {
    const t = localStorage.getItem("theme") || "light";
    document.body.classList.toggle("dark", t === "dark");
    $("toggle-theme").textContent = t === "dark" ? "☀️" : "🌙";
}
function toggleTheme() {
    let curr = document.body.classList.contains("dark") ? "dark" : "light";
    let next = curr === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    loadTheme();
}
function showTodayNotif() {
    let today = formatDate(new Date());
    let events = getEventsForDate(today);
    if (events.length) {
        showNotification(`Today: ${events.map(e=>e.title).join(", ")}`);
    }
}

window.onload = function() {
    loadTheme();
    // Always show welcome screen on each load:
    $("welcome-screen").classList.remove("hidden");
    $("calendar-app").classList.add("hidden");
    document.body.classList.remove("admin-logged");
    isAdmin = false;
    $("admin-login-btn").classList.remove("hidden");
    $("admin-logout-btn").classList.add("hidden");

    // Welcome screen logic
    $("enter-calendar").onclick = () => {
        $("welcome-screen").classList.add("hidden");
        $("calendar-app").classList.remove("hidden");
        renderCalendar(currentMonth, currentYear);
        showTodayNotif();
    };

    // Calendar controls
    $("prev-month").onclick = () => {
        if (currentMonth === 0) {
            currentMonth = 11; currentYear--;
        } else currentMonth--;
        renderCalendar(currentMonth, currentYear);
    };
    $("next-month").onclick = () => {
        if (currentMonth === 11) {
            currentMonth = 0; currentYear++;
        } else currentMonth++;
        renderCalendar(currentMonth, currentYear);
    };

    // Admin buttons
    $("admin-login-btn").onclick = openAdminModal;
    $("admin-logout-btn").onclick = adminLogout;
    $("admin-form").onsubmit = e => {
        e.preventDefault();
        adminLogin($("admin-password").value);
    };
    document.querySelectorAll(".modal .close").forEach(btn => {
        btn.onclick = closeModals;
    });
    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) closeModals();
    };
    $("toggle-theme").onclick = toggleTheme;
};