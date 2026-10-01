/* =====================================
   ENTER WEBSITE
===================================== */

const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

enterBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    intro.style.transition = "opacity 0.7s ease";

    setTimeout(() => {

        intro.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 700);

});


/* =====================================
   REASONS CARDS
===================================== */

function showReason(card) {

    card.classList.toggle("open");

}


/* =====================================
   QUIZ
===================================== */

function checkAnswer(correct) {

    const result = document.getElementById("quizResult");

    if (correct) {

        result.innerHTML =
            "Okay fine. You actually know me. 🥺❤️";

    } else {

        result.innerHTML =
            "Wrong. Wow. I thought we knew each other. 😭 Try again.";

    }

}


/* =====================================
   SECRET MESSAGE
===================================== */

function openSecret() {

    const modal = document.getElementById("secretModal");

    modal.classList.add("active");

}


function closeSecret() {

    const modal = document.getElementById("secretModal");

    modal.classList.remove("active");

}


/* =====================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================== */

document.getElementById("secretModal").addEventListener("click", function(event) {

    if (event.target === this) {

        closeSecret();

    }

});


/* =====================================
   ESCAPE KEY CLOSE
===================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeSecret();

    }

});