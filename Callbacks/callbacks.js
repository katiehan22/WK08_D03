class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    if (this.hours === 23 && this.minutes === 59 && this.seconds === 59){
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }

    if(this.seconds === 59) {
      if(this.minutes === 59) {
        this.hours++;
        this.minutes = 0;
      }else {
        this.minutes++;
      }
      this.seconds = 0;
    }else {
      this.seconds++;
    }
    
    this.printTime();
  }
}