import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
  private counter = 0

  constructor() {
    super('preloader')
  }

  preload() {
    this.load.tilemapTiledJSON('tilemap', 'assets/map/map.json')

    this.load.spritesheet('tiles_wall', 'assets/map/FloorAndGround.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.spritesheet('chairs', 'assets/items/chair.png', {
      frameWidth: 32,
      frameHeight: 64,
    })

    this.load.spritesheet('computers', 'assets/items/computer.png', {
      frameWidth: 96,
      frameHeight: 64,
    })

    this.load.spritesheet('office', 'assets/items/Modern_Office_Black_Shadow.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.spritesheet('generic', 'assets/items/Generic.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.spritesheet('adam', 'assets/character/adam.png', {
      frameWidth: 32,
      frameHeight: 48,
    })

    this.load.spritesheet('ash', 'assets/character/ash.png', {
      frameWidth: 32,
      frameHeight: 48,
    })

    this.load.spritesheet('lucy', 'assets/character/lucy.png', {
      frameWidth: 32,
      frameHeight: 48,
    })

    this.load.spritesheet('nancy', 'assets/character/nancy.png', {
      frameWidth: 32,
      frameHeight: 48,
    })

    this.load.audio('highscore', ['assets/audio/SoundEffects/highscore.ogg', 'assets/audio/SoundEffects/highscore.mp3'])
    this.load.audio('luke_background','assets/audio/SoundEffects/luke_demo.mp3')
    this.load.audio('morning','assets/audio/SoundEffects/random_background/Morning-Routine.mp3')
    this.load.audio('happy','assets/audio/SoundEffects/random_background/Happy_African_Village.mp3')
  }

  create() {
    // create loading texts
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height
    const loadingText = this.add
      .text(screenCenterX, screenCenterY - 100, 'Loading...')
      .setOrigin(0.5)
      .setFontSize(30)
      .setColor('#000000')

    this.time.addEvent({
      delay: 750,
      callback: () => {
        switch (this.counter % 3) {
          case 0:
            loadingText.setText('loading.')
            break

          case 1:
            loadingText.setText('loading..')
            break

          case 2:
            loadingText.setText('loading...')
            break
        }
        this.counter += 1
      },
      loop: true,
    })

    this.scene.run('game')

    var value = Phaser.Math.Between(1,3);

    if(value === 1){
      const luke_background = this.sound.add('luke_background')
      luke_background.play()
    }
    if(value === 2){
      const happy = this.sound.add('happy')
      happy.play()
    }
    if(value ===3){
      const morning = this.sound.add('morning')
      morning.play()
    }
  }
}
