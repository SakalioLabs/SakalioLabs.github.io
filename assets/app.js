(() => {
  const onScroll = () => {
    document.body.classList.toggle('nav-scrolled', window.scrollY > 18);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
