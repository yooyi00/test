$(function () {
  Splitting();
  gsap.registerPlugin(ScrollTrigger);

  /*gsap 공통*/
  /*project*/
  gsap.utils.toArray(".project").forEach((project, i) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: "top top",
        pin: true,
        pinSpacing: false,
        pinSpacing: i === 2,
        true: false,
        //markers: true,
      },
    });
  });

  /*기획서 바로가기 클릭 시 모달창 구현*/
  $(".project .inner .cloneWrap .right .buttons li:last-child").on(
    "click",
    function () {
      $(".project.seoul .view").css({ display: "block" });
    }
  );

  $(".project.seoul .view .close").on("click", function () {
    $(".project.seoul .view").css({ display: "none" });
  });

  /*design li클릭 시 이미지 재배치*/
  $(".design .inner .imgWrap").on("click", function () {
    $(this).addClass("on");
  });

  /*design hover 시 뜨는 목업 보러가기 클릭 시 모달창*/
  $(".design .inner .imgWrap .ds01 .ds_txt .button").on("click", function () {
    $(".design .inner .view .popup").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds02 .ds_txt .button").on("click", function () {
    $(".design .inner .view .coupon").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds03 .ds_txt .button").on("click", function () {
    $(".design .inner .view .spring").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds04 .ds_txt .button").on("click", function () {
    $(".design .inner .view .bigsale").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds05 .ds_txt .button").on("click", function () {
    $(".design .inner .view .flea").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds06 .ds_txt .button").on("click", function () {
    $(".design .inner .view .sale").css({ display: "flex" });
  });

  $(".design .inner .view .close").on("click", function () {
    $(".design .inner .view li").css({ display: "none" });
  });

  /*bar 클릭 시 modal_menu 보이기*/
  $("header .menu_bar").on("click", function () {
    $("header .modal").css({ display: "block" });
  });

  /*close 클릭 시 modal_menu 숨기기*/
  $("header .modal .close").on("click", function () {
    $("header .modal").css({ display: "none" });
  });

  /*gsap 반응형*/
  ScrollTrigger.matchMedia({
    /*pc*/
    "(min-width:1220px)": function () {
      /*intro*/
      gsap.fromTo(
        ".intro .intro_inner .left .picture",
        { x: -2000 },
        { x: 0, duration: 1 }
      );

      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { x: 2000, y: -200 },
        { x: 0, y: -200, duration: 1 }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { y: 1000 },
        { y: -100, duration: 1 },
        1
      );

      /*about*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .con .left",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 2000 },
          { y: 0, duration: 10 }
        );

      /*design*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".design",
            start: "30% 50%",
            end: "50% 60%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".design li.ds01", { y: 400 }, { y: -50 }, 1)
        .fromTo(".design li.ds02", { y: 400 }, { y: -50 }, 1.2)
        .fromTo(".design li.ds03", { y: 400 }, { y: -50 }, 1.4)
        .fromTo(".design li.ds04", { y: 400 }, { y: -50 }, 1.6)
        .fromTo(".design li.ds05", { y: 400 }, { y: -50 }, 1.8)
        .fromTo(".design li.ds06", { y: 400 }, { y: -50 }, 2);

      /*contact*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            end: "70% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".contact .inner .con h2", { x: 1000 }, { x: 0 })
        .fromTo(".contact .inner .con .txtBox", { x: -1000 }, { x: 0 })
        .fromTo(
          ".contact .inner .con .icons li:first-child",
          { y: 100 },
          { y: 0 },
          1
        )
        .fromTo(
          ".contact .inner .con .icons li:nth-child(2)",
          { y: 100 },
          { y: 0 },
          1.2
        )
        .fromTo(
          ".contact .inner .con .icons li:last-child",
          { y: 100 },
          { y: 0 },
          1.4
        );
    },

    /*태블릿*/
    "(max-width:1219px)": function () {
      gsap.fromTo(
        /*intro*/
        ".intro .intro_inner .left .picture",
        { x: -1000 },
        { x: 0, duration: 1 }
      );

      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { x: 1000, y: -100 },
        { x: 50, y: -100, duration: 1 }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { x: 100, y: 1000 },
        { x: 100, y: 0, duration: 1 },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { x: 100, y: 1000 },
        { x: 100, y: 0, duration: 1 },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { x: 100, y: 1000 },
        { x: 100, y: 0, duration: 1 },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { x: 100, y: 1000 },
        { x: 100, y: 0, duration: 1 },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { x: 100, y: 1000 },
        { x: 100, y: 0, duration: 1 },
        1
      );

      /*about*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .con .left",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 2000 },
          { y: 0, duration: 10 }
        );

      /*design*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".design",
            start: "30% 50%",
            end: "50% 60%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".design li.ds01", { y: 400 }, { y: -50 }, 1)
        .fromTo(".design li.ds02", { y: 400 }, { y: -50 }, 1.2)
        .fromTo(".design li.ds03", { y: 400 }, { y: -50 }, 1.4)
        .fromTo(".design li.ds04", { y: 400 }, { y: -50 }, 1.6)
        .fromTo(".design li.ds05", { y: 400 }, { y: -50 }, 1.8)
        .fromTo(".design li.ds06", { y: 400 }, { y: -50 }, 2);

      /*contact*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            end: "70% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".contact .inner .con h2", { x: 1000 }, { x: 0 })
        .fromTo(".contact .inner .con .txtBox", { x: -1000 }, { x: 0 })
        .fromTo(
          ".contact .inner .con .icons li:first-child",
          { y: 200 },
          { y: 0 },
          1
        )
        .fromTo(
          ".contact .inner .con .icons li:nth-child(2)",
          { y: 200 },
          { y: 0 },
          1.2
        )
        .fromTo(
          ".contact .inner .con .icons li:last-child",
          { y: 200 },
          { y: 0 },
          1.4
        );
    },

    /*모바일*/
    "(max-width:599px)": function () {
      /*intro*/
      gsap.fromTo(
        ".intro .intro_inner .left .picture",
        { x: -2000 },
        { x: 0, duration: 1 }
      );

      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { x: 2000 },
        { x: 0, y: -120, duration: 1 }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { y: 1000 },
        { y: -100, duration: 1 },
        1
      );

      /*about*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .con .left",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 2000 },
          { y: 0, duration: 10 }
        );

      /*design*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".design",
            start: "30% 50%",
            end: "50% 60%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".design li.ds01", { y: 400 }, { y: -50 }, 1)
        .fromTo(".design li.ds02", { y: 400 }, { y: -50 }, 1.2)
        .fromTo(".design li.ds03", { y: 400 }, { y: -50 }, 1.4)
        .fromTo(".design li.ds04", { y: 400 }, { y: -50 }, 1.6)
        .fromTo(".design li.ds05", { y: 400 }, { y: -50 }, 1.8)
        .fromTo(".design li.ds06", { y: 400 }, { y: -50 }, 2);

      /*contact*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            end: "70% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".contact .inner .con h2", { x: 1000 }, { x: 0 })
        .fromTo(".contact .inner .con .txtBox", { x: -1000 }, { x: 0 })
        .fromTo(
          ".contact .inner .con .icons li:first-child",
          { y: 2000 },
          { y: 0 },
          1
        )
        .fromTo(
          ".contact .inner .con .icons li:nth-child(2)",
          { y: 2000 },
          { y: 0 },
          1.2
        )
        .fromTo(
          ".contact .inner .con .icons li:last-child",
          { y: 2000 },
          { y: 0 },
          1.4
        );
    },
  });
});
