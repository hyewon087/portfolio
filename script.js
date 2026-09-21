const header = document.querySelector(".site-header");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// # 두번째 수정
