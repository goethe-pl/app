// Scroll to down
document.getElementById("messages").addEventListener("DOMNodeInserted", function (e) {
    this.scrollTop += 50;
}, false);

/**
 *
 * @param text
 * @constructor
 */
function AddMessage(text) {
    var message = new Message('#messages');
    message.add(text);
}
