const plans = {
  relaxed: [
    {
      date: "6/2",
      weekday: "周二",
      title: "合肥飞三亚，入住椰梦长廊",
      text: "到凤凰机场后打车到椰梦长廊入住。21:30 后到不安排正餐海鲜，吃清补凉或粉汤，早点睡。",
      meta: ["住椰梦长廊", "机场近", "今晚不赶景点"],
    },
    {
      date: "6/3",
      weekday: "周三",
      title: "蜈支洲岛（6-8h）+ 椰梦长廊日落",
      text: "8:00 第一班上岛，玩水上项目或环岛观光。16:00 前下岛，打车 1h 回椰梦长廊≈17:00，正好赶橘子海日落。后海村不用去。",
      meta: ["果冻海天花板", "水上项目全包", "椰梦长廊日落"],
    },
    {
      date: "6/4",
      weekday: "周四",
      title: "太阳湾+亚龙湾+鹿回头",
      text: "可选早起去太阳湾看日出（6:00）→ 太阳湾公路拍照 → 亚龙湾海滩（2-3h）→ 16:30 鹿回头俯瞰三亚日落。大东海小东海跳过，帆船港顺路拍照。",
      meta: ["太阳湾日出可选", "亚龙湾沙滩", "鹿回头日落"],
    },
    {
      date: "6/5",
      weekday: "周五",
      title: "西岛（4-6h）+ 椰梦长廊最后一场日落",
      text: "文艺渔村小岛，玻璃海+网红打卡点。下午回椰梦长廊，导航'凤凰岛桥头公园'或'美丽新海岸公交站'看橘子海。西岛不用再买水上项目，纯拍照闲逛。",
      meta: ["西岛文艺渔村", "椰梦日落", "慢节奏收尾"],
    },
    {
      date: "6/6",
      weekday: "周六",
      title: "三亚湾+天涯小镇 → 中午高铁去海口",
      text: "上午三亚湾散步拍照+天涯小镇（白墙蓝窗）。中午三亚站→海口东站高铁。下午骑楼老街→云洞图书馆→海大南门夜市。",
      meta: ["天涯小镇拍照", "中午高铁海口", "下午骑楼+云洞+夜市"],
    },
    {
      date: "6/7",
      weekday: "周日",
      title: "日月广场免税 + 海口 → 合肥 17:15",
      text: "自然醒，日月广场免税（香化主战场）或市区早午餐。中午退房，15:00 前到美兰机场。17:15 起飞回合肥。",
      meta: ["日月广场香化最划算", "机场提货提前6h下单", "17:15起飞"],
    },
  ],
  compact: [
    {
      date: "6/2",
      weekday: "周二",
      title: "合肥飞三亚，入住椰梦长廊",
      text: "晚到不排景点，酒店选椰梦长廊近海房。下飞机后只做入住、宵夜和补水。",
      meta: ["近海房", "轻宵夜", "早点休息"],
    },
    {
      date: "6/3",
      weekday: "周三",
      title: "蜈支洲岛 + 椰梦长廊日落",
      text: "三亚海水天花板，水上项目或环岛观光。16:00 下岛回椰梦长廊看日落。",
      meta: ["果冻海", "水上项目全", "椰梦日落"],
    },
    {
      date: "6/4",
      weekday: "周四",
      title: "亚龙湾/太阳湾 + 鹿回头",
      text: "上午太阳湾公路+亚龙湾海滩，下午鹿回头俯瞰三亚。",
      meta: ["太阳湾公路", "亚龙湾沙滩", "鹿回头日落"],
    },
    {
      date: "6/5",
      weekday: "周五",
      title: "西岛渔村 + 椰梦长廊",
      text: "西岛拍照闲逛，下午回椰梦长廊最后一场日落。",
      meta: ["西岛渔村", "椰梦日落", "慢节奏"],
    },
    {
      date: "6/6",
      weekday: "周六",
      title: "三亚湾+天涯小镇 → 中午高铁海口 → 骑楼+云洞",
      text: "上午三亚湾+天涯小镇，中午高铁海口，下午逛骑楼和云洞。",
      meta: ["天涯小镇", "中午高铁", "下午海口"],
    },
    {
      date: "6/7",
      weekday: "周日",
      title: "日月广场免税，15:00前到机场，17:15回合肥",
      text: "日月广场免税买香化，中午退房去美兰机场。",
      meta: ["日月广场免税", "15:00前到机场", "17:15起飞"],
    },
  ],
};

const budgets = {
  low: [
    ["机票/动车", "¥1,300-2,000", "早晚航班、少托运行李，三亚到海口坐动车。"],
    ["住宿", "¥900-1,500", "近海但不追一线海景，三亚 3 晚、海口 1 晚。"],
    ["餐饮", "¥600-900", "海鲜控制一顿，其他用粉面、老爸茶和夜市补齐。"],
    ["门票/项目/购物", "¥500-1,200+", "蜈支洲可选套票、西岛、鹿回头为主；免税香化另算。"],
  ],
  comfort: [
    ["机票/动车", "¥1,600-2,500", "优先少折腾的航班，动车按返程机场衔接。"],
    ["住宿", "¥1,500-2,500", "三亚 3 晚住海景/近海，海口 1 晚住骑楼老街或海口湾。"],
    ["餐饮", "¥800-1,300", "椰梦长廊周边吃饭方便，三亚海鲜一到两顿，海口留老爸茶和夜市。"],
    ["门票/项目/购物", "¥800-2,000+", "蜈支洲套票、西岛、鹿回头、直升机可选；免税香化另算。<br><em>⚠ 以上为粗略估计，实际波动大，以预订时价格为准</em>"],
  ],
  plus: [
    ["机票/动车", "¥2,000-3,200", "选择更好时段，减少红眼和长等待。"],
    ["住宿", "¥2,400-4,000", "三亚一线海景或带泳池 3 晚，海口住海口湾。"],
    ["餐饮", "¥1,200-1,800", "海鲜、糟粕醋、椰子鸡都安排，但避免连续重餐。"],
    ["门票/项目/购物", "¥1,500-3,500+", "蜈支洲极限套票+直升机+游艇+旅拍；免税另算。"],
  ],
};

const timeline = document.querySelector("#timeline");
const planButtons = document.querySelectorAll(".plan-toggle");
const budgetButtons = document.querySelectorAll(".budget-toggle");
const budgetGrid = document.querySelector("#budgetGrid");
const scrollProgress = document.querySelector("#scrollProgress");
const copyButton = document.querySelector("#copyLink");
const copyStatus = document.querySelector("#copyStatus");
const noteInput = document.querySelector("#tripNote");
const noteCount = document.querySelector("#noteCount");
const noteStatus = document.querySelector("#noteStatus");
const clearNoteButton = document.querySelector("#clearNote");
const copyNoteButton = document.querySelector("#copyNote");
const submitIssueButton = document.querySelector("#submitIssue");
const noteStorageKey = "hainan-trip-note";
const feedbackRepo = "self-reward/hainan";

const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 },
      )
    : null;

function observeReveals(nodes) {
  nodes.forEach((node) => {
    if (!node.classList.contains("reveal")) {
      node.classList.add("reveal");
    }

    if (revealObserver) {
      revealObserver.observe(node);
    } else {
      node.classList.add("visible");
    }
  });
}

function renderPlan(planName) {
  timeline.innerHTML = plans[planName]
    .map(
      (day) => `
        <article class="day-card reveal">
          <div class="day-date">
            <span>${day.weekday}</span>
            <strong>${day.date}</strong>
          </div>
          <div>
            <h3>${day.title}</h3>
            <p>${day.text}</p>
            <ul class="day-meta">
              ${day.meta.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </article>
      `,
    )
    .join("");
  observeReveals(timeline.querySelectorAll(".reveal"));
}

function renderBudget(mode) {
  budgetGrid.innerHTML = budgets[mode]
    .map(
      ([title, range, note]) => `
        <article class="budget-card reveal">
          <h3>${title}</h3>
          <span class="budget-number">${range}</span>
          <p>${note}</p>
        </article>
      `,
    )
    .join("");
  observeReveals(budgetGrid.querySelectorAll(".reveal"));
}

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    planButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPlan(button.dataset.plan);
  });
});

budgetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    budgetButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderBudget(button.dataset.budget);
  });
});

renderPlan("relaxed");
renderBudget("comfort");
observeReveals(
  document.querySelectorAll(
    ".signal, .map-shell, .route-cards article, .vibe-card, .pick, .food-board article, .prep-grid article, .note-card",
  ),
);

function updateScrollProgress() {
  if (!scrollProgress) {
    return;
  }

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

async function copyShareLink() {
  const text = window.location.href;

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "已复制";
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    copyStatus.textContent = "已复制";
  }

  window.setTimeout(() => {
    copyStatus.textContent = "";
  }, 1800);
}

if (copyButton) {
  copyButton.addEventListener("click", copyShareLink);
}

function setNoteStatus(text) {
  if (!noteStatus) {
    return;
  }

  noteStatus.textContent = text;
}

function updateNoteCount() {
  if (!noteInput || !noteCount) {
    return;
  }

  noteCount.textContent = `${noteInput.value.length}/900`;
}

function saveNote() {
  if (!noteInput) {
    return;
  }

  localStorage.setItem(noteStorageKey, noteInput.value);
  updateNoteCount();
  setNoteStatus("已保存在本机浏览器。");
}

async function copyNote() {
  if (!noteInput) {
    return;
  }

  const text = noteInput.value.trim();
  if (!text) {
    setNoteStatus("先写一点备注，再复制。");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    noteInput.select();
    document.execCommand("copy");
  }

  setNoteStatus("备注已复制。");
}

function clearNote() {
  if (!noteInput) {
    return;
  }

  noteInput.value = "";
  localStorage.removeItem(noteStorageKey);
  updateNoteCount();
  setNoteStatus("已清空本机备注。");
}

function openIssueDraft() {
  if (!noteInput) {
    return;
  }

  const note = noteInput.value.trim();
  const body = [
    "我对海南旅行计划的备注：",
    "",
    note || "（这里写路线建议、想吃的店、要带的东西）",
    "",
    `页面：${window.location.href}`,
  ].join("\n");
  const params = new URLSearchParams({
    title: "海南旅行计划备注",
    body,
  });
  const issueUrl = `https://github.com/${feedbackRepo}/issues/new?${params.toString()}`;
  window.open(issueUrl, "_blank", "noopener,noreferrer");
  setNoteStatus("已打开 GitHub Issue 草稿，登录后提交即可公开给我。");
}

if (noteInput) {
  noteInput.value = localStorage.getItem(noteStorageKey) || "";
  updateNoteCount();
  noteInput.addEventListener("input", saveNote);
}

if (copyNoteButton) {
  copyNoteButton.addEventListener("click", copyNote);
}

if (clearNoteButton) {
  clearNoteButton.addEventListener("click", clearNote);
}

if (submitIssueButton) {
  submitIssueButton.addEventListener("click", openIssueDraft);
}

/* ── Map Image Zoom (Lightbox) ── */
function initImageZoom() {
  const zoomImages = document.querySelectorAll(".zoomable-img");
  if (!zoomImages.length) return;

  let lightbox = document.querySelector(".image-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.innerHTML = '<button class="lightbox-close" aria-label="关闭">&#10005;</button>';
    document.body.appendChild(lightbox);
  }

  const lightboxImg = document.createElement("img");
  lightbox.appendChild(lightboxImg);

  const closeBtn = lightbox.querySelector(".lightbox-close");

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
    lightboxImg.src = "";
  }

  zoomImages.forEach((img) => {
    img.addEventListener("click", () => {
      openLightbox(img.src);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("show")) {
      closeLightbox();
    }
  });
}

document.addEventListener("DOMContentLoaded", initImageZoom);

if (window.lucide) {
  window.lucide.createIcons();
}
