chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   if(request.topic==="heartbeat"){
     console.log("heartbeat!");
   //   display a visual animation of a heartbeat from this content_script.ts
  createHeartbeatAnimation()
   }
});
// Function to create and display the heartbeat animation
function createHeartbeatAnimation() {
  // Create a div element for the heartbeat animation
  const heartbeatDiv = document.createElement('div');
  heartbeatDiv.style.position = 'fixed';
  heartbeatDiv.style.top = '20px';
  heartbeatDiv.style.left = '20px';
  heartbeatDiv.style.width = '120px'; // Made it wider
  heartbeatDiv.style.height = '100px';
  heartbeatDiv.style.backgroundColor = 'red';
  heartbeatDiv.style.clipPath = 'path("M60 15 C25 -10, -10 40, 60 95 C130 40, 95 -10, 60 15 Z")'; // Wider heart shape
  heartbeatDiv.style.animation = 'heartbeat 1s ease-in-out forwards'; // Infinite heartbeat animation

  // Append the heartbeat div to the body
  document.body.appendChild(heartbeatDiv);

  // Add CSS for the heartbeat animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes heartbeat {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
        opacity: 0; // Fade out after the beat
      }
    }
  `;
  document.head.appendChild(style);

  // Remove the heartbeat div after the animation ends
  heartbeatDiv.addEventListener('animationend', () => {
    heartbeatDiv.remove();
  });
}
console.log("hehdfeakhujifdsahjklsfdhikjo")