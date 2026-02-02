function moveButton() {
    const noBtn = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function celebrate() {
    // Change the text
    document.getElementById('question').innerHTML = "You a real one 🎉💖";
    
    // Hide the buttons
    document.querySelector('.buttons').style.display = 'none';
    
    // Create and add the cat GIF
    const img = document.createElement('img');
    img.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZham85Nm1saWhvbDZqcG1tbmF3dzNjcTVsaDhsMjY2d2Rqcmk0eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SBAToc4g0h89W/giphy.gif";
    img.style.width = "300px";
    img.style.marginTop = "20px";
    img.style.borderRadius = "15px";
    img.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    
    document.querySelector('.container').appendChild(img);
    
    // Make the background a soft gold for a "win" feel
    document.body.style.backgroundColor = "#fff9c4";
}
