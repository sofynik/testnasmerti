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

  let box16 = document.querySelector("[data-js='t16-box']")
  let btn16 = document.querySelector("[data-js='t16-animate']")

  btn16.addEventListener('click', () => {
      box16.classList.add('anim')
})
});
