let audioDing = document.querySelector('audio');
let pauseButton = document.querySelector('.pausebutton');
let playButton = document.querySelector('.playbutton'); 
    
    // Event listener voor de pauseknop click
    pauseButton.addEventListener('click', function () {
        // Verberg de pauseknop en toon de playknop
        pauseButton.hidden = true; // Verberg de pauseknop
        playButton.hidden = false; // Toon de playknop

        // Zet audio en video op pauze
        audioDing.pause();
        videoDing.pause();
    });

    // Event listener voor de playknop click
    playButton.addEventListener('click', function () {
        // Verberg de playknop en toon de pauseknop
        playButton.hidden = true; // Verberg de playknop
        pauseButton.hidden = false; // Toon de pauseknop

        // Start audio en video
        audioDing.play();
        videoDing.play();
    });