document.addEventListener("DOMContentLoaded", () => {

    // Screens

    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");
    const screen3 = document.getElementById("screen3");
    const screen4 = document.getElementById("screen4");
    const screen5 = document.getElementById("screen5");
    const screen6 = document.getElementById("screen6");
    const screen7 = document.getElementById("screen7");
    const screen8 = document.getElementById("screen8");
    const screen9 = document.getElementById("screen9");
    const screen10 = document.getElementById("screen10");


    // Buttons

    const startBtn = document.getElementById("startBtn");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    const yesBtn2 = document.getElementById("yesBtn2");
    const noBtn2 = document.getElementById("noBtn2");

    const yesBtn3 = document.getElementById("yesBtn3");
    const noBtn3 = document.getElementById("noBtn3");

    const yesBtn4 = document.getElementById("yesBtn4");
    const noBtn4 = document.getElementById("noBtn4");

    const giantYesBtn = document.getElementById("giantYesBtn");

    const continueBtn = document.getElementById("continueBtn");

    const dateChoices = document.querySelectorAll(".dateChoice");

    const timeChoices = document.querySelectorAll(".timeChoice");


    // -------------------------
    // SCREEN 1
    // -------------------------

    startBtn.addEventListener("click", () => {

        screen1.classList.add("hidden");

        screen2.classList.remove("hidden");

    });


    // -------------------------
    // SCREEN 2
    // -------------------------

    yesBtn.addEventListener("click", () => {

        showYesScreen();

    });


    noBtn.addEventListener("click", () => {

        screen2.classList.add("hidden");

        screen3.classList.remove("hidden");

    });


    // -------------------------
    // SCREEN 3
    // -------------------------

    yesBtn2.addEventListener("click", () => {

        showYesScreen();

    });


    noBtn2.addEventListener("click", () => {

        screen3.classList.add("hidden");

        screen4.classList.remove("hidden");

    });


    // -------------------------
    // SCREEN 4
    // -------------------------

    yesBtn3.addEventListener("click", () => {

        showYesScreen();

    });


    noBtn3.addEventListener("click", () => {

        screen4.classList.add("hidden");

        screen5.classList.remove("hidden");

    });


    // -------------------------
    // SCREEN 5
    // -------------------------

    yesBtn4.addEventListener("click", () => {

        showYesScreen();

    });


    noBtn4.addEventListener("click", () => {

        screen5.classList.add("hidden");

        screen6.classList.remove("hidden");

    });


    // -------------------------
    // SCREEN 6
    // -------------------------

    giantYesBtn.addEventListener("click", () => {

        showYesScreen();

    });


    // -------------------------
    // YES SCREEN
    // -------------------------

    function showYesScreen() {

        screen1.classList.add("hidden");
        screen2.classList.add("hidden");
        screen3.classList.add("hidden");
        screen4.classList.add("hidden");
        screen5.classList.add("hidden");
        screen6.classList.add("hidden");

        screen7.classList.remove("hidden");

    }


    // -------------------------
    // CONTINUE
    // -------------------------

    continueBtn.addEventListener("click", () => {

        screen7.classList.add("hidden");

        screen8.classList.remove("hidden");

    });


    // -------------------------
    // DATE VIBE
    // -------------------------

    dateChoices.forEach(choice => {

        choice.addEventListener("click", () => {

            const selectedDate = document.getElementById("selectedDate");

            selectedDate.textContent =
                `Okayyy... ${choice.textContent}. I can work with that. 👀`;

            screen8.classList.add("hidden");

            screen9.classList.remove("hidden");

        });

    });


    // -------------------------
    // TIME CHOICE
    // -------------------------

    timeChoices.forEach(choice => {

        choice.addEventListener("click", () => {

            screen9.classList.add("hidden");

            screen10.classList.remove("hidden");


            const finalTitle =
                document.getElementById("finalTitle");

            const finalText =
                document.getElementById("finalText");


            if (choice.textContent.includes("shy")) {

                finalTitle.textContent =
                    "AWWWW 😭💀";

                finalText.textContent =
                    "Look who suddenly developed shyness. 😭 You were bold enough to say yes tho 👀";

            } else if (choice.textContent.includes("Whenever")) {

                finalTitle.textContent =
                    "OH? 👀";

                finalText.textContent =
                    "Whenever I am? That's dangerously cute. Don't make me blush now. 😭";

            } else {

                finalTitle.textContent =
                    "PERFECT 😌❤️";

                finalText.textContent =
                    "This weekend it is. And remember... you said yes. I have screenshots for legal purposes. 💀";

            }

        });

    });

});