import { Scheduler } from "./scheduler.js";

const svgSpiral = document.getElementById('svgContSpiral');
const audio = document.getElementById('um');


document.getElementById('um-logo').onclick = () => {

  audio.play();
  document.getElementById('um-logo').style.display = "none";

  svgSpiral.style.display = "block";
  const taskTimer = (fn, t) => setTimeout(() => { fn(); }, t);

  const tasks = Scheduler();

  tasks.add((finish) => {
    taskTimer(() => {
      document.querySelector('.text1').classList.add('text1Trans');
      document.querySelector('.text2').classList.add('text2Trans');
      document.querySelector('.text-container4').classList.add('text-container4Trans');
      document.querySelector('.text-container54').classList.add('text-container54Trans');
      document.querySelector('.text5').classList.add('text5Trans');
      document.querySelector('.text7').classList.add('text7Trans');
      document.querySelector('.text3').classList.add('text3Trans');
      document.querySelector('.textnr1').classList.add('textnr1Trans');
      console.log('uno')
      finish();
    }, 100)
  });
  tasks.add((finish) => {
    taskTimer(() => {
      document.querySelector('#movingCont').style.transform = "translate(25rem,28rem)";
      document.querySelector('#movingCont').style.width = "40rem";
      document.querySelector('#movingCont').style.transition = "1s";
      console.log('dos')
      finish();
    }, 1000)
  });
  tasks.add((finish) => {
    taskTimer(() => {
      document.querySelector('.bar').classList.add('barTrans');
      console.log('tres')
      finish();
    }, 1200)
  });


  [1, 5, 5].forEach(el => {
    tasks.add((finish) => {
      taskTimer(() => {
        document.querySelector('.bar').classList.remove('barTransRotate2');
        document.querySelector('.bar').classList.add('barTransRotate');
        console.log('cuatro', el)
        finish();
      }, 400*el)
    });
    tasks.add((finish) => {
      taskTimer(() => {
        document.querySelector('.svgContMoving').classList.add('svgContMovingTrans');
        document.querySelector('.container-svg').classList.add('container-svgTrans');
        console.log('cinco', el)
        finish();
      }, 500/el)
    });
    tasks.add((finish) => {
      taskTimer(() => {
        document.querySelector('.bar').classList.remove('barTransRotate');
        document.querySelector('.bar').classList.add('barTransRotate2');
        document.querySelector('.svgContMoving').classList.remove('svgContMovingTrans');
        document.querySelector('.container-svg').classList.remove('container-svgTrans');
        console.log('seis', el)
        finish();
      }, 3500)
    });
  })
}


document.getElementById('um-logo').onmouseover = () => {
  document.getElementById('um-logo').classList.add('imgTrans');
}
document.getElementById('um-logo').onmouseleave = () => {
  document.getElementById('um-logo').classList.remove('imgTrans');
}