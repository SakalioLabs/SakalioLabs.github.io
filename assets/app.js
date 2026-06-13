(() => {
  const themeToggle=document.getElementById("themeToggle");
  const root=document.documentElement;
  const stored=localStorage.getItem("sakalio-theme");
  if(stored){root.classList.add(stored)}

  if(themeToggle){
    themeToggle.addEventListener("click",()=>{
      const isLight=root.classList.toggle("light");
      localStorage.setItem("sakalio-theme", isLight ? "light" : "");
    });
  }
})();