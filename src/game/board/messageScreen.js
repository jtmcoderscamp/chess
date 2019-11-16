import "./messageScreen.css"

class MessageScreen {
    constructor(selector) {
      this.container = document.querySelector(selector);
      this.messageDialog = null;
    }
  
    open(message) {
      const messageDialog = document.createElement("div");
      messageDialog.innerHTML = `
        <div>
          <div class="message-dialog-backdrop"></div>
          <div class="message-dialog">
            <div class="message-dialog-content">${message}</div>
            <span class="message-dialog-close">x</span>
          </div>
        </div>
      `;
  
      messageDialog
        .querySelector(".message-dialog-close")
        .addEventListener("click", () => {
          this.close();
        });
  
      this.container.parentNode.appendChild(messageDialog);
      this.messageDialog = messageDialog;
    }
  
    close() {
      this.messageDialog.parentNode.removeChild(this.messageDialog);
      this.messageDialog = null;
    }
}

export default MessageScreen;

