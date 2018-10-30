(function () {
  var beginAC = 80,
    endAC = 320,
    beginB = 80,
    endB = 320;

  function inAC(s) {
    s.draw('80% - 240', '80%', 0.3, {
      delay: 0.1,
      callback: function () {
        inAC2(s)
      }
    });
  }

  function inAC2(s) {
    s.draw('100% - 545', '100% - 305', 0.6, {
      easing: ease.ease('elastic-out', 1, 0.3)
    });
  }

  function inB(s) {
    s.draw(beginB - 60, endB + 60, 0.1, {
      callback: function () {
        inB2(s)
      }
    });
  }

  function inB2(s) {
    s.draw(beginB + 120, endB - 120, 0.3, {
      easing: ease.ease('bounce-out', 1, 0.3)
    });
  }

  function outAC(s) {
    s.draw('90% - 240', '90%', 0.1, {
      easing: ease.ease('elastic-in', 1, 0.3),
      callback: function () {
        outAC2(s)
      }
    });
  }

  function outAC2(s) {
    s.draw('20% - 240', '20%', 0.3, {
      callback: function () {
        outAC3(s)
      }
    });
  }

  function outAC3(s) {
    s.draw(beginAC, endAC, 0.7, {
      easing: ease.ease('elastic-out', 1, 0.3)
    });
  }

  function outB(s) {
    s.draw(beginB, endB, 0.7, {
      delay: 0.1,
      easing: ease.ease('elastic-out', 2, 0.4)
    });
  }

  function addScale(m) {
    m.className = 'scaled';
  }

  function removeScale(m) {
    m.className = '';
  }

  var pathD = document.getElementById('pathD'),
    pathE = document.getElementById('pathE'),
    pathF = document.getElementById('pathF'),
    segmentD = new Segment(pathD, beginAC, endAC),
    segmentE = new Segment(pathE, beginB, endB),
    segmentF = new Segment(pathF, beginAC, endAC),
    wrapper = document.getElementById('menu-icon-wrapper'),
    trigger = document.getElementById('menu-icon-trigger'),
    toCloseIcon = true,
    nav = document.getElementById('menu');

  wrapper.style.visibility = 'visible';

  trigger.onclick = function () {
    addScale(wrapper);
    if (toCloseIcon) {
      inAC(segmentD);
      inB(segmentE);
      inAC(segmentF);
      nav.style.display = 'block';
    } else {
      outAC(segmentD);
      outB(segmentE);
      outAC(segmentF);
      nav.style.display = 'none';
    }
    toCloseIcon = !toCloseIcon;
    setTimeout(function () {
      removeScale(wrapper)
    }, 450);
  };
})();
