interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}
interface VideoPlayerProtocols {
  playTuggle(): void;
  stop(): void;
  iniciarEvento(): void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElement: VideoPlayerElements) {
    this.playButton = videoPlayerElement.playButton;
    this.stopButton = videoPlayerElement.stopButton;
    this.videoPlayer = videoPlayerElement.videoPlayer;
  }

  playTuggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }
  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }
  iniciarEvento(): void {
    this.playButton.addEventListener('click', () => {
      this.playTuggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.iniciarEvento();
