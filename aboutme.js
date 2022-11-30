const cursor = document.querySelector(".cursor");
    var timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 8000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });

    var textWrapper = document.querySelector('.about1');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: false })
            .add({
                targets: '.about1 .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 100 * (i + 1)
            })

            var textWrapper = document.querySelector('.art1');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: false })
            .add({
                targets: '.art1 .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 100 * (i + 1)
            })

            var textWrapper = document.querySelector('.about2');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            anime.timeline({ loop: false })
                .add({
                    targets: '.about2 .letter',
                    opacity: [0, 1],
                    easing: "easeInOutQuad",
                    duration: 2250,
                    delay: (el, i) => 30 * (i + 1)
                })

            var textWrapper = document.querySelector('.about3');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            anime.timeline({ loop: false })
                .add({
                    targets: '.about3 .letter',
                    opacity: [0, 1],
                    easing: "easeInOutQuad",
                    duration: 2250,
                    delay: (el, i) => 30 * (i + 1)
                })

                var textWrapper = document.querySelector('.about4');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                anime.timeline({ loop: false })
                    .add({
                        targets: '.about4 .letter',
                        opacity: [0, 1],
                        easing: "easeInOutQuad",
                        duration: 2250,
                        delay: (el, i) => 30 * (i + 1)
                    })

                    var textWrapper = document.querySelector('.about5');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                anime.timeline({ loop: false })
                    .add({
                        targets: '.about5 .letter',
                        opacity: [0, 1],
                        easing: "easeInOutQuad",
                        duration: 2250,
                        delay: (el, i) => 30 * (i + 1)
                    })