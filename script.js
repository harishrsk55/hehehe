function shareImage() {
    const message = "Hey! Here's something special I made for you. 💕 Check it out!";
    const url = window.location.href; // Current website URL
    if (navigator.share) {
        navigator.share({
            title: "A Gift for You 💝",
            text: message,
            url: url,
        }).then(() => {
            alert("Shared successfully!");
        }).catch((error) => {
            alert("Could not share. Please try again.");
        });
    } else {
        alert("Sharing is not supported on this browser. Copy the link and send it manually.");
    }
}
