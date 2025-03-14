
function sendMessage() {
    let messageBox = document.getElementById("messageBox");
    let messageText = messageBox.value.trim();

    if (messageText !== "") {
        let messageContainer = document.createElement("div");
        messageContainer.classList.add("message");

        let avatar = document.createElement("div");
        avatar.classList.add("avatar");
        avatar.innerHTML = '<img src="images/avatar1.png" alt="User 1">';

        let messageContent = document.createElement("div");
        messageContent.classList.add("message-content");
        messageContent.innerHTML = `<strong>User 1</strong><p>${messageText}</p>`;

        messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageContent);

        document.querySelector(".messages").appendChild(messageContainer);
        messageBox.value = ""; // Clear the message box
        messageBox.focus(); // Focus back on the message input
    }
}
