const tablinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

tablinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    // Remove active classes from all links and contents
    tabContents.forEach((content) => content.classList.remove("active-tab"));
    tablinks.forEach((link) => link.classList.remove("active-link"));

    // Add active class to clicked tab link
    e.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    const tabId = e.currentTarget.dataset.tab;
    console.log(tabId)
    const tab = document.getElementById(tabId);
    if (tab) {
      tab.classList.add("active-tab");
    }
  })
);
