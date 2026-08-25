document.addEventListener("DOMContentLoaded", () => {

    const painting = document.getElementById("painting");
    const table = document.getElementById("table");
    const box = document.getElementById("box");
    const door = document.getElementById("door");

    const message = document.getElementById("message");
    const inventoryItems = document.getElementById("inventoryItems");

    const codeBox = document.getElementById("codeBox");
    const codeInput = document.getElementById("codeInput");
    const unlockBtn = document.getElementById("unlockBtn");


    // Game state
    let hasKey = false;
    let hasClue = false;
    let boxOpened = false;


    // Painting
    painting.addEventListener("click", () => {

        if (!hasClue) {

            message.textContent =
                "You found a strange note behind the painting! 📝";

            hasClue = true;

            inventoryItems.textContent =
                "📝 Strange Note";

        } else {

            message.textContent =
                "There is nothing else behind the painting.";

        }

    });


    // Table
    table.addEventListener("click", () => {

        if (!hasKey) {

            message.textContent =
                "You searched the table and found a small key! 🔑";

            hasKey = true;

            inventoryItems.textContent =
                "📝 Strange Note | 🔑 Small Key";

        } else {

            message.textContent =
                "You already searched the table.";

        }

    });


    // Box
    box.addEventListener("click", () => {

        if (!hasKey) {

            message.textContent =
                "The box is locked. Maybe you need a key.";

            return;
        }


        if (!hasClue) {

            message.textContent =
                "The box needs a code. Look around for clues.";

            return;
        }


        if (!boxOpened) {

            codeBox.classList.remove("hidden");

            message.textContent =
                "Enter the 4-digit code from the note.";

        }

    });


    // Unlock box
    unlockBtn.addEventListener("click", () => {

        const code = codeInput.value;

        if (code === "1234") {

            boxOpened = true;

            message.textContent =
                "🎉 The box opened! You found the door key! 🔑";

            inventoryItems.textContent =
                "📝 Strange Note | 🔑 Small Key | 🗝️ Door Key";

            codeBox.classList.add("hidden");

        } else {

            message.textContent =
                "❌ Wrong code! Try again.";

        }

    });


    // Door
    door.addEventListener("click", () => {

        if (!boxOpened) {

            message.textContent =
                "🚪 The door is locked. You need the door key.";

        } else {

            message.textContent =
                "🎉 YOU ESCAPED THE ROOM! 🎉";

            document.querySelector(".room").style.background =
                "#183d1f";

        }

    });

});