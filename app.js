const tl = gsap.timeline({
  defaults: {
    duration: 0.35,
    ease: "Power2.easeOut",
  },
});

// HOME
const home = document.querySelector(".home");
// NOTIFICATION
const notification = document.querySelector(".notification");

gsap.set(".feather", { scale: 0, transfromOrgin: "center" });

home.addEventListener("click", () => {
  gsap.fromTo(
    ".home-svg",
    {
      scale: 1,
    },
    {
      scale: 0.9,
      yoyo: true,
      repeat: 1,
    }
  );

  gsap.fromTo(
    ".feather",
    {
      y: -5,
      scale: 0,
    },
    {
      y: 20,
      scale: 1.5,
      duration: 3,
      stagger: 0.4,
    }
  );
  gsap.fromTo(
    ".right-feather",
    {
      x: 0,
    },
    {
      x: 5,
    }
  );
});

// NOTIFICATION
gsap.set(".bell", {
  transfromOrgin: "top center",
});
// SETTING THE TRANSFORMORGIN
gsap.set(".ringer", {
  transfromOrgin: "top center",
});
gsap.set(".wave", {
  opacity: 0,
  transfromOrgin: "bottom",
});

notification.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    {
      rotation: -5,
    },
    {
      rotation: 0,
      duration: 2,
      ease: "elastic.out(5, 0.2)",
    }
  );
  gsap.fromTo(
    ".ringer",
    {
      rotation: -3,
      x: 0.5,
    },
    {
      rotation: 0,
      x: 0,
      duration: 1,
      ease: "elastic.out(5, 0.2)",
    }
  );
  gsap.fromTo(
    ".wave",
    {
      scale: 0,
      opacity: 1,
    },
    {
      scale: 1.3,
      opacity: 0,
      duration: 1.2,
    }
  );
});
