class GameWithRooms {
  constructor() {
    this.lampImage = {
      default: 'https://png.pngtree.com/png-vector/20190228/ourlarge/pngtree-lightbulb-icon-design-template-vector-illustration-png-image_710449.jpg',
      heat: 'https://thumbs.dreamstime.com/b/%D1%8D-%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%BC%D0%BF%D0%BE%D1%87%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-36333877.jpg',
      light: 'https://static9.depositphotos.com/1010146/1175/v/950/depositphotos_11759704-stock-illustration-shining-light-bulb-icon.jpg',
    };
    this.room1 = document.querySelector('.room1');
    this.room2 = document.querySelector('.room2');
    this.trigers = [...this.room1.querySelectorAll('button')];
    this.lamps = [...this.room2.querySelectorAll('div')];
    this.doors = [...document.querySelectorAll('.door')];
    this.resetBtn = document.querySelector('.reset');
    this.submitBtn = document.querySelector('.submit');
    this.inputs = [...document.querySelectorAll('.control>input')];
    this.winAlert = document.querySelector('.win');
    this.loseAlert = document.querySelector('.lose');
    this.lampsState = [];
    this.openCount = 0;

    this.lampBind();
    this.listeners();
    this.render();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  lampBind() {
    this.lamps.forEach((item, number) => {
      let index;
      do {
        index = this.getRandomInt(this.trigers.length);
      }
      while (this.lampsState[index]);

      this.lampsState[index] = {
        lamp: item,
        state: 'default',
        triger: number,
      };
    });
  }

  toggleLamp(event) {
    const target = event.target.closest('button');
    this.trigers.forEach((item, index) => {
      if (item === target) {
        if (this.lampsState[index].state === 'default' || this.lampsState[index].state === 'heat') {
          this.lampsState[index].state = 'light';
        } else {
          this.lampsState[index].state = 'heat';
        }
        item.classList.toggle('enebled');
      }
    });
    this.render();
  }

  render() {
    for (let item of this.lampsState) {
      item.lamp.querySelector('img').src = this.lampImage[item.state];
    }

  }

  showElements(event) {
    if (this.openCount < 2) {
      this.doors.forEach(item => item.style.display = 'block');
      this.lamps.forEach(item => item.style.display = 'none');
      this.trigers.forEach(item => item.style.display = 'none');
      const room = event.target.parentNode;
      const elements = [...room.childNodes].filter(item => item.tagName === 'BUTTON' || item.tagName === 'DIV');
      elements.forEach(item => item.style.display = 'flex');
      event.target.style.display = 'none';
      this.openCount++;
    }
  }

  reset() {
    this.lampsState = [];
    this.openCount = 0;
    this.lampBind();
    this.render();
    this.doors.forEach(item => item.style.display = 'block');
    this.lamps.forEach(item => item.style.display = 'none');
    this.trigers.forEach(item => item.style.display = 'none');
    this.inputs.forEach(item => item.value = '');
    this.room1.style.visibility = 'visible  ';
    this.room2.style.visibility = 'visible  ';
    this.winAlert.style.display = 'none';
    this.loseAlert.style.display = 'none';
    this.trigers.forEach(item => item.classList.remove('enebled'));
  }

  submit() {
    if (this.inputs.every((item, index) => +item.value - 1 === this.lampsState[index].triger)) {
      this.room1.style.visibility = 'hidden ';
      this.room2.style.visibility = 'hidden ';
      this.winAlert.style.display = 'block';
    } else {
      this.room1.style.visibility = 'hidden ';
      this.room2.style.visibility = 'hidden ';
      this.loseAlert.style.display = 'block';
    }
  }

  listeners() {
    this.trigers.forEach(item => item.addEventListener('click', this.toggleLamp.bind(this)));
    this.doors.forEach(item => item.addEventListener('click', this.showElements.bind(this)));
    this.resetBtn.addEventListener('click', this.reset.bind(this));
    this.submitBtn.addEventListener('click', this.submit.bind(this));
  }
}

const game = new GameWithRooms();

// console.log(game);