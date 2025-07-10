// scroll button //
let btn = document.getElementById("btn");
window.onscroll = function(){
  if (scrollY >= 300) {
    btn.classList.add("show");
  }else{
    btn.classList.remove("show");
  }
}
btn.onclick = function(){
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth"
  })
}
// Animation scroll //
const items = document.querySelectorAll(".item");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});
items.forEach(item => observer.observe(item));