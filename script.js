document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
  let firstButton = document.querySelector("[data-js='t1-btn']")
  let element = document.querySelector("[data-js='t1-hex']")
  const min = 0
  const max = 256
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  firstButton.addEventListener('click', () =>{
    let color1 = getRandomInt(max).toString(16)
    let color2 = getRandomInt(max).toString(16)
    let color3 = getRandomInt(max).toString(16)
    firstButton.style.background = `#${color1}${color2}${color3}`
    element.textContent = `#${color1}${color2}${color3}`
  })

  let secondButton = document.querySelector("[data-js='t2-input']")
  let value = document.querySelector("[data-js='t2-count']")
  secondButton.addEventListener('input', () => {
    value.textContent = `${secondButton.value.length}`
  })

  let thirdButton = document.querySelector("[data-js='t3-add']")
  let textValue = document.querySelector("[data-js='t3-input']")
  let list = document.querySelector("[data-js='t3-list']")
  thirdButton.addEventListener('click', () =>{
    let li = document.createElement('li')
    li.textContent = textValue.value
    list.append(li)
  })

  let count = document.querySelector("[data-js='t4-out']")
  let plus = document.querySelector("[data-js='t4-plus']")
  let minus = document.querySelector("[data-js='t4-minus']")
  let reset = document.querySelector("[data-js='t4-reset']")
  plus.addEventListener('click', () => {
    count.textContent++
  })
  minus.addEventListener('click', () => {
    count.textContent--
  })
  reset.addEventListener('click', () => {
    count.textContent = `0`
  })

  let fifthButton = document.querySelector("[data-js='t5-open']")
  let modal = document.querySelector("[data-js='t5-modal']")
  let close = document.querySelector("[data-js='t5-close']")
  fifthButton.addEventListener('click', () => {
    modal.hidden = false 
  })
  close.addEventListener('click', () => {
    modal.hidden = true
  })

  let a = document.querySelector("[data-tab='a']")
  let b = document.querySelector("[data-tab='b']")
  let c = document.querySelector("[data-tab='c']")
  let A = document.querySelector("[data-pane='a']")
  let B = document.querySelector("[data-pane='b']")
  let C = document.querySelector("[data-pane='c']")

  a.addEventListener('click', () => {
    A.classList.add('is-active')
    a.classList.add('is-active')
    B.classList.remove('is-active')
    b.classList.remove('is-active')
    C.classList.remove('is-active')
    c.classList.remove('is-active')
  })

  b.addEventListener('click', () => {
    A.classList.remove('is-active')
    a.classList.remove('is-active')
    B.classList.add('is-active')
    b.classList.add('is-active')
    C.classList.remove('is-active')
    c.classList.remove('is-active')
  })

  c.addEventListener('click', () => {
    A.classList.remove('is-active')
    a.classList.remove('is-active')
    B.classList.remove('is-active')
    b.classList.remove('is-active')
    C.classList.add('is-active')
    c.classList.add('is-active')
  })


  let sevenButton = document.querySelector("[data-js='t7-run']")
  let stroka = document.querySelector("[data-js='t7-input']")
  let reversed = document.querySelector("[data-js='t7-out']")
  
  sevenButton.addEventListener('click', () => {
    reversed.textContent = stroka.value.split('').reverse().join('')
  })

  let eightA = document.querySelector("[data-js='t8-a']")
  let eightB = document.querySelector("[data-js='t8-b']")
  let eightAdd = document.querySelector("[data-js='t8-add']")
  let eightMul = document.querySelector("[data-js='t8-mul']")
  let eightOut = document.querySelector("[data-js='t8-out']")


  eightAdd.addEventListener('click', () => {
    let f = parseInt(eightA.value)
    let s = parseInt(eightB.value)
    eightOut.textContent = f+s
    if (eightOut.textContent == "NaN") {
        eightOut.textContent = "?"
    }
  })
  eightMul.addEventListener('click', () => {
    let f = parseInt(eightA.value)
    let s = parseInt(eightB.value)
    eightOut.textContent = f*s
    if (eightOut.textContent == "NaN") {
        eightOut.textContent = "?"
    }
  })

  let nineButton = document.querySelector("[data-js='t9-toggle']")
  let nineText = document.querySelector("[data-js='t9-text']")

  nineButton.addEventListener('click', ()=>{
    nineText.hidden = !nineText.hidden
  })

  let tenInput = document.querySelector("[data-js='t10-range']")
  let tenBox = document.querySelector("[data-js='t10-box']")
  let tenText = document.querySelector("[data-js='t10-out']")

  tenInput.addEventListener('input', () => {
    let size = `${tenInput.value}px`
    tenBox.style.width = size
    tenBox.style.height = size
    tenText.textContent = size
  })

  let elevenInput = document.querySelector("[data-js='t11-seconds']")
  let elevenBtnStart = document.querySelector("[data-js='t11-start']")
  let elevenBtnStop = document.querySelector("[data-js='t11-stop']")
  let elevenText = document.querySelector("[data-js='t11-out']")

  let timerInterval = null;
  let sec = 0;

  elevenBtnStart.addEventListener('click', () => {
    if (timerInterval) return;

    if (elevenInput.value !== "") {
      sec = parseInt(elevenInput.value);
      elevenInput.value = "";
    }

    if (sec <= 0) return;

    elevenText.textContent = sec;

    timerInterval = setInterval(() => {
      sec--;
      elevenText.textContent = sec;

      if (sec <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }, 1000);
  });

  elevenBtnStop.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
  });

  let twelveBtn = document.querySelector("[data-js='t12-plus']")
  let twelveText = document.querySelector("[data-js='t12-label']")
  let twelveBar = document.querySelector("[data-js='t12-bar']")

  twelveBtn.addEventListener('click', () => {
    text = parseInt(twelveText.textContent)
    if (text<100) {
      twelveText.textContent = `${text+10}%`
      twelveBar.style.width = `${text+10}%`
    }
    
  })

  let thirteeninput = document.querySelector("[data-js='t13-input']")
  let thirteentext = document.querySelector("[data-js='t13-out']")

  document.addEventListener('keydown', (event) => {
      if (event.metaKey && event.key.toLowerCase() === 'k') {
          thirteentext.textContent = 'Command + K'
          thirteeninput.focus()
      }
      if (event.metaKey && event.key.toLowerCase() === 'c') {
          thirteentext.textContent = 'Command + C'
      }
  })

  let forteenBtn = document.querySelector("[data-js='t14-next']")
  let forteenText = document.querySelector("[data-js='t14-out']")

  let quotes = [
      "Вы же не сами по себе живете, а если и отгородились от мира, то мир-то от вас не отгораживался!",
      "Сознание творит действительность, а вы творите свое сознание",
      "Если соблюдаешь мелкие правила, можно нарушать большие. ",
      "Любопытство никого не губило. Скорее наоборот, это одна из лучших вещей в жизни.",
      "С тех пор Женино сердце на конце иглы, игла в яйце, яйцо в утке, утка в зайце, а заяц убежал."]

  forteenBtn.addEventListener('click', () => {
      forteenText.textContent = quotes[Math.floor(Math.random() * quotes.length)]
  })
  let fifteenItem = document.querySelector("[data-js='t15-item']")
  let fifteenArea = document.querySelector("[data-js='t15-area']")
  let coords15 = document.querySelector("[data-js='t15-coords']")

  let isDraggable = false
  let offsetX = 0
  let offsetY = 0

  fifteenItem.addEventListener('pointerdown', (e) => {
    isDraggable = true

    const rect = fifteenItem.getBoundingClientRect()

    offsetX = e.clientX - rect.left
    offsetY = e.clientY - rect.top

    fifteenItem.setPointerCapture(e.pointerId)
  })

  document.addEventListener('pointermove', (e) => {
    if (!isDraggable) return
    const parentRect = fifteenItem.parentElement.getBoundingClientRect()
    const itemRect = fifteenItem.getBoundingClientRect()

    let left = e.clientX - parentRect.left - offsetX
    let top = e.clientY - parentRect.top - offsetY

    left = Math.max(0, Math.min(left, parentRect.width - itemRect.width))
    top = Math.max(0, Math.min(top, parentRect.height - itemRect.height))
    coords15.textContent = `x: ${Math.floor(left)}, y: ${Math.floor(top)}`
    fifteenItem.style.left = `${left}px`
    fifteenItem.style.top = `${top}px`
  })
  window.addEventListener('pointerup', () => {
      isDraggable = false
  })

  let box16 = document.querySelector("[data-js='t16-box']")
  let btn16 = document.querySelector("[data-js='t16-animate']")

  btn16.addEventListener('click', () => {
      box16.classList.add('anim')
  })

  function getRandomCoord(max) {
    return Math.floor(Math.random() * max);
  }

  let seventeen= document.querySelector("[data-js='t17-area']")
  const mainSize = seventeen.getBoundingClientRect()
  setInterval(() =>{
    let newCube = document.createElement(`div`)
    let left = getRandomCoord(mainSize.width-100)
    let top = getRandomCoord(mainSize.height-100)
    newCube.style.left = `${left}px`
    newCube.style.top = `${top}px`
    newCube.classList.add('cube')
    seventeen.append(newCube)
  }, 1000)

  
  let eighteen = document.querySelector("[data-js='t18-area']")
  let size = eighteen.getBoundingClientRect()
  let sizeWidth = size.width

  setInterval(createDiv, 2500)
  function createDiv(){
    let newDiv = document.createElement("div")
    newDiv.classList.add("cube")
    eighteen.append(newDiv)
    newDiv.style.left = `${sizeWidth}px`
    requestAnimationFrame(() => animateDiv(newDiv))
  }

  function animateDiv(newDiv){
    let currentLeft = parseInt(newDiv.style.left)
    let nextLeft = currentLeft - 1
    newDiv.style.left = `${nextLeft}px`
    if (nextLeft + newDiv.offsetWidth <=0){
      newDiv.remove()
      return
    }
    requestAnimationFrame(() => animateDiv(newDiv))
  }

  function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
  
  let t19Area = document.querySelector("[data-js='t19-area']")
  let t19AreaHeight = t19Area.getBoundingClientRect().height
  let t19AreaWidth = t19Area.getBoundingClientRect().width

  setInterval(createDivAndMove19, 2000);

  function createDivAndMove19() {
      let newDiv19 = document.createElement("div");
      newDiv19.classList.add('cube')
      t19Area.append(newDiv19);
      let randomHeight = getRandomInt(t19AreaHeight - 100);
      newDiv19.style.top = `${randomHeight}px`;
      newDiv19.style.left = `${t19AreaWidth}px`;
      requestAnimationFrame(() => animateDiv19(newDiv19));
  }
  function animateDiv19(newDiv19) {
      let currentLeft = parseInt(newDiv19.style.left);
      let nextLeft = currentLeft - 1;
      newDiv19.style.left = `${nextLeft}px`;
      if (nextLeft + newDiv19.offsetWidth <= 0) {
          newDiv19.remove();
          return;
      }

      requestAnimationFrame(() => animateDiv19(newDiv19));
  }

  let twentySpace = document.querySelector("[data-js='t20-area']")
  let twentySpaceHeight = twentySpace.getBoundingClientRect().height
  let twentySpaceWidth = twentySpace.getBoundingClientRect().width
  let counter20 = document.querySelector("[data-js='t20-score']")

  setInterval(createDivAndMove20, 5000);

  function createDivAndMove20() {
      let newDiv20 = document.createElement("div");
      newDiv20.classList.add('cube')
      twentySpace.append(newDiv20);
      let randomHeight = getRandomInt(twentySpaceHeight - 100);
      newDiv20.style.top = `${randomHeight}px`;
      newDiv20.style.left = `${twentySpaceWidth}px`;
      requestAnimationFrame(() => animateDiv20(newDiv20));
      newDiv20.addEventListener('click', () => {
          newDiv20.remove()
          counter20.textContent++
      })
  }
  function animateDiv20(newDiv20) {
      let currentLeft = parseInt(newDiv20.style.left);
      let nextLeft = currentLeft - 1;
      newDiv20.style.left = `${nextLeft}px`;
      if (nextLeft + newDiv20.offsetWidth <= 0) {
          newDiv20.remove();
          return;
      }

      requestAnimationFrame(() => animateDiv20(newDiv20));
  }

  let twentyOneSpace = document.querySelector("[data-js='t21-area']")
  let twentyOneSpaceHeight = twentyOneSpace.getBoundingClientRect().height
  let twentyOneSpaceWidth = twentyOneSpace.getBoundingClientRect().width
  let counter21 = document.querySelector("[data-js='t21-score']")
  let lives21 = document.querySelector("[data-js='t21-lives']")
  let gameOver21 = document.querySelector("[data-js='t21-game-over']")
  let btnRestart21 = document.querySelector("[data-js='t21-restart']")

  let interval21 = setInterval(createDivAndMove21, 2000);
  let isGameOver21 = false;

  function createDivAndMove21() {
      let newDiv21 = document.createElement("div");
      newDiv21.classList.add('cube')
      twentyOneSpace.append(newDiv21);
      let randomHeight = getRandomInt(twentyOneSpaceHeight - 100);
      newDiv21.style.top = `${randomHeight}px`;
      newDiv21.style.left = `${twentyOneSpaceWidth}px`;
      requestAnimationFrame(() => animateDiv21(newDiv21));
      newDiv21.addEventListener('click', () => {
          newDiv21.remove()
          counter21.textContent++
      })
  }
  function animateDiv21(newDiv21) {
    if (isGameOver21) return;
    if (!newDiv21.isConnected) return; 

    let currentLeft = parseInt(newDiv21.style.left);
    let nextLeft = currentLeft - 1;
    newDiv21.style.left = `${nextLeft}px`;
      if (nextLeft + newDiv21.offsetWidth <= 0) {
        newDiv21.remove();
        lives21.textContent--
        if (lives21.textContent === "0") {
            isGameOver21 = true;
            gameOver21.hidden = false
            clearInterval(interval21);
            btnRestart21.addEventListener('click', () => {
              isGameOver21 = false;
              counter21.textContent = "0"
              lives21.textContent = "3"
              gameOver21.hidden = true
              document.querySelectorAll("[data-js='t21-area'] .cube")
                  .forEach(cube => cube.remove());
              clearInterval(interval21);
              interval21 = setInterval(createDivAndMove21, 5000);
            })
        }
        return;
      }
    if (nextLeft + newDiv21.offsetWidth <= 0) {
        newDiv21.remove();
        lives21.textContent--;

        if (lives21.textContent === "0") {

        }
        return;
    }
    
    requestAnimationFrame(() => animateDiv21(newDiv21));
  }
});
