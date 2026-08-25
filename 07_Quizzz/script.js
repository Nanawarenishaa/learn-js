document.addEventListener("DOMContentLoaded", () => {

     // Screens
    const screen1 = document.getElementById("screen1")

    const screen2 = document.getElementById("screen2")
    
    const screen3 = document.getElementById("screen3")

    const screen4 = document.getElementById("screen4")

    const screen5 = document.getElementById("screen5")

    const screen6 = document.getElementById("screen6")

    const screen7 = document.getElementById("screen7")

    const screen8 = document.getElementById("screen8")
    
    const screen9 = document.getElementById("screen9")
    
    const screen10 = document.getElementById("screen10")
    
    
    // Buttons

    const startBtn = document.getElementById("startBtn")

    const noBtn = document.getElementById("noBtn")

    const noBtn2 = document.getElementById("noBtn2")

    const noBtn3 = document.getElementById("noBtn3")

    const noBtn4 = document.getElementById("noBtn4")

   const giantYesBtn = document.getElementById("giantYesBtn");

   const continueBtn = document.getElementById("continueBtn")

    // Yes Buttons

     const yesBtn = document.getElementById("yesBtn");

       const yesBtn2 = document.getElementById("yesBtn2");

        const yesBtn3 = document.getElementById("yesBtn3");

         const yesBtn4 = document.getElementById("yesBtn4");

        const dateChoices = document.querySelectorAll(".dateChoice");

        const timeChoices = document.querySelectorAll(".timeChoice");


    
     startBtn.addEventListener("click", () => {
        console.log("clicked")
      screen1.classList.add("hidden")
      screen2.classList.remove("hidden")
    })

    noBtn.addEventListener("click", () => {
        screen2.classList.add("hidden")
        screen3.classList.remove("hidden")
    })

    noBtn2.addEventListener("click", () => {
        screen3.classList.add("hidden")
        screen4.classList.remove("hidden")
    })

     noBtn3.addEventListener("click", () => {
        screen4.classList.add("hidden")
        screen5.classList.remove("hidden")
    })

      noBtn4.addEventListener("click", () => {
        screen5.classList.add("hidden")
        screen6.classList.remove("hidden")
    })

    giantYesBtn.addEventListener("click", () => {
        screen6.classList.add("hidden")
        screen7.classList.remove("hidden")
    })

    continueBtn.addEventListener("click", () => {
         screen7.classList.add("hidden")
        screen8.classList.remove("hidden")
    })
    
    // yesBtns events

    yesBtn.addEventListener("click", () => {
        showYesScreen()
    })

     yesBtn2.addEventListener("click", () => {
        showYesScreen()
    })

     yesBtn3.addEventListener("click", () => {
        showYesScreen()
    })

     yesBtn4.addEventListener("click", () => {
        showYesScreen()
    })
    
   

    
    function showYesScreen() {

        screen1.classList.add("hidden");
        screen2.classList.add("hidden");
        screen3.classList.add("hidden");
        screen4.classList.add("hidden");
        screen5.classList.add("hidden");
        screen6.classList.add("hidden");

        screen7.classList.remove("hidden");

    }

     dateChoices.forEach(choice => {

        choice.addEventListener("click", () => {

            const selectedDate = document.getElementById("selectedDate");

            selectedDate.textContent =
                `Okayyy... ${choice.textContent}. I can work with that. 👀`;

            screen8.classList.add("hidden");

            screen9.classList.remove("hidden");

        });
    })

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


    

})