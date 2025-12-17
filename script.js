const message = document.getElementById("message");
const subtext = document.getElementById("subtext");
const leaveBtn = document.getElementById("leaveBtn");

let seconds = 0;

const timer = setInterval(() => {
  seconds++;
  updateJudgment(seconds);
}, 1000);

let moved = false;

document.addEventListener("mousemove", () => {
  moved = true;
});

function updateJudgment(time) {

  if (time === 10) {
    message.textContent = "Still here?";
    subtext.textContent = "There’s nothing else.";
  }

  if (time === 30) {
    message.textContent = "You’re waiting for something.";
    subtext.textContent = "Nothing is coming.";
  }

  if (time === 40 && !moved) {
    message.textContent = "You haven’t even moved.";
    subtext.textContent = "Are you frozen?";
    }

  if (time === 60) {
    message.textContent = "You could have left by now.";
    subtext.textContent = "But you didn’t.";
    darken();
  }

  if (time === 90) {
    message.textContent = "This is a choice.";
    subtext.textContent = "And you’re making it.";
    showLeaveButton();
  }

  if (time === 150) {
    message.textContent = "You’re avoiding something.";
    subtext.textContent = "Aren’t you?";
    addGlitch();
  }

  if (time === 180) {
    clearInterval(timer);
    message.textContent = "Final verdict.";
    subtext.innerHTML = `
        Time wasted: ${seconds} seconds<br/>
        Productivity: questionable<br/>
        Verdict: chronically online
    `;
    leaveBtn.textContent = "Okay. Leave.";
    leaveBtn.onclick = () => {
    window.location.href = "https://www.google.com";
    };

    }

}

function darken() {
  document.body.style.background = "#111";
  document.body.style.color = "#f7f7f7";
}

function showLeaveButton() {
  leaveBtn.classList.remove("hidden");
}

leaveBtn.addEventListener("click", () => {
  message.textContent = "You’re not done yet.";
  subtext.textContent = "Nice try.";
});

function addGlitch() {
  message.classList.add("glitch");
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) return;

  message.textContent = "Welcome back.";
  subtext.textContent = "You thought about it.";
});
