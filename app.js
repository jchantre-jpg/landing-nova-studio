const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
  { threshold: 0.15 }
);
document.querySelectorAll(".section, .hero-copy").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
document.querySelector(".hero-copy")?.classList.add("on");
