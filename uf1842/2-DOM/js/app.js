/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

const message = document.querySelector("#message");
const btnSend = document.querySelector("#btn-send");
const lastMessage = document.querySelector("#last-message");

btnSend.addEventListener("click", () => {
    lastMessage.textContent = message.value;
    message.value = "";
})