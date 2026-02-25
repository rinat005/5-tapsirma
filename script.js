const bubble = document.getElementById('bubble');
const xDisplay = document.getElementById('x-axis');
const yDisplay = document.getElementById('y-axis');
const startBtn = document.getElementById('start-btn');

function handleOrientation(event) {
    let y = event.beta;  
    let x = event.gamma; 
    if (x > 45) x = 45;
    if (x < -45) x = -45;
    if (y > 45) y = 45;
    if (y < -45) y = -45;

    xDisplay.textContent = Math.round(x);
    yDisplay.textContent = Math.round(y);

   const moveX = (x * 2.5); 
    const moveY = (y * 2.5);

    bubble.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
}

startBtn.addEventListener('click', () => {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleOrientation);
                }
            })
            .catch(console.error);
    } else {
   window.addEventListener('deviceorientation', handleOrientation);
    }
    startBtn.style.display = 'none'; 
});

