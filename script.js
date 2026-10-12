const header = document.querySelector(".site-header");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const projectDetails = {
  morrow: {
    name: "Morrow",
    description: "더 나은 내일을 위한 웰니스 브랜드 경험을 기획하고 디자인한 프로젝트입니다.",
    role: "브랜드 전략, UX/UI 디자인, 웹 퍼블리싱",
    technology: "Figma, HTML, CSS, JavaScript",
    result: "브랜드 메시지와 온라인 구매 흐름을 일관되게 정리했습니다."
  },
  focusly: {
    name: "Focusly",
    description: "사용자가 자신의 집중 리듬을 발견하도록 돕는 생산성 앱 프로젝트입니다.",
    role: "사용자 조사, 제품 설계, 인터랙션 디자인",
    technology: "Figma, React Native, Firebase",
    result: "집중 기록과 진행 상황을 한눈에 확인할 수 있는 경험을 설계했습니다."
  },
  "off-grid": {
    name: "Off the Grid",
    description: "도시 곳곳의 새로운 문화를 기록하고 소개하는 디지털 미디어 프로젝트입니다.",
    role: "아트 디렉션, 비주얼 아이덴티티, 웹 디자인",
    technology: "Figma, HTML, CSS, JavaScript",
    result: "콘텐츠를 쉽게 탐색하고 공유할 수 있는 편집형 웹 경험을 만들었습니다."
  }
};

const projectDialog = document.querySelector("#project-dialog");
const projectCards = document.querySelectorAll("[data-project]");
const dialogCloseButton = projectDialog.querySelector(".dialog-close");
let previouslyFocusedElement;

// 선택한 프로젝트의 예시 정보를 표시하고 포커스를 모달로 이동합니다.
function openProjectDialog(project) {
  const details = projectDetails[project];
  if (!details) return;

  previouslyFocusedElement = document.activeElement;
  projectDialog.querySelector("#dialog-title").textContent = details.name;
  projectDialog.querySelector("#dialog-description").textContent = details.description;
  projectDialog.querySelector("#dialog-role").textContent = details.role;
  projectDialog.querySelector("#dialog-technology").textContent = details.technology;
  projectDialog.querySelector("#dialog-result").textContent = details.result;
  projectDialog.showModal();
  dialogCloseButton.focus();
}

// 모달을 닫고, 열기 전 선택했던 프로젝트 카드로 포커스를 돌려보냅니다.
function closeProjectDialog() {
  projectDialog.close();
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => openProjectDialog(card.dataset.project));
});

dialogCloseButton.addEventListener("click", closeProjectDialog);

projectDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeProjectDialog();
  }
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeProjectDialog();
});

projectDialog.addEventListener("close", () => {
  previouslyFocusedElement?.focus();
});
