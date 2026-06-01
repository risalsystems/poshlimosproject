document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. Theme Toggle Logic (Light / Dark)
  // ==========================================================================
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Apply saved theme on load
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      let theme = "dark";
      if (document.body.classList.contains("light-theme")) {
        theme = "light";
      }
      localStorage.setItem("theme", theme);
    });
  }

  // ==========================================================================
  // 2. Mobile Menu Toggle
  // ==========================================================================
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Toggle body scroll locking when mobile menu is active
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // ==========================================================================
  // 2.5 Services Dropdown Toggle
  // ==========================================================================
  const navDropdown = document.querySelector(".nav-dropdown");
  const dropdownToggle = document.querySelector(".nav-dropdown-toggle");

  if (navDropdown && dropdownToggle) {
    // Toggle open on click (for touch & keyboard users)
    dropdownToggle.addEventListener("click", (e) => {
      const isOpen = navDropdown.classList.toggle("open");
      dropdownToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close when a dropdown item is clicked
    navDropdown.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", () => {
        navDropdown.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
        // Also close mobile nav if open
        if (hamburger && navMenu) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navDropdown.contains(e.target)) {
        navDropdown.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        navDropdown.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
        dropdownToggle.focus();
      }
    });
  }

  // ==========================================================================
  // 3. Scroll Reveal Animations (Intersection Observer)
  // ==========================================================================
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Trigger once
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null, // viewport
      threshold: 0.15, // 15% element visibility
      rootMargin: "0px 0px -50px 0px",
    });

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback: If browser doesn't support Observer, show all elements immediately
    revealElements.forEach((element) => {
      element.classList.add("active");
    });
  }

  // ==========================================================================
  // 4. Web3Forms AJAX Contact Form Submission
  // ==========================================================================
  const contactForm = document.getElementById("contact-form");
  const formSubmitBtn = document.getElementById("form-submit-btn");
  const formMessage = document.getElementById("form-response-msg");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Disable submit button and show loading state
      if (formSubmitBtn) {
        formSubmitBtn.disabled = true;
        formSubmitBtn.textContent = "Sending Message...";
      }

      // Gather form data
      const formData = new FormData(contactForm);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      // Hide previous messages
      if (formMessage) {
        formMessage.style.display = "none";
        formMessage.className = "form-message";
      }

      // Fetch request to Web3Forms API
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let result = await response.json();
          if (response.status == 200) {
            // Success state
            if (formMessage) {
              formMessage.textContent =
                "Thank you! Your request has been sent successfully. We will contact you shortly.";
              formMessage.classList.add("success");
            }
            contactForm.reset();
          } else {
            // Failure state from server
            console.error(result);
            if (formMessage) {
              formMessage.textContent =
                result.message || "Something went wrong. Please try again.";
              formMessage.classList.add("error");
            }
          }
        })
        .catch((error) => {
          // Network error state
          console.error(error);
          if (formMessage) {
            formMessage.textContent =
              "Network error. Please check your connection and try again.";
            formMessage.classList.add("error");
          }
        })
        .then(() => {
          // Reset submit button state
          if (formSubmitBtn) {
            formSubmitBtn.disabled = false;
            formSubmitBtn.textContent = "Send Booking Request";
          }
        });
    });
  }
});
