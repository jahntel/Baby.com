
        // Modal functionality
        const modal = document.getElementById("authModal");
        const loginBtn = document.getElementById("loginBtn");
        const signupBtn = document.getElementById("signupBtn");
        const closeBtn = document.querySelector(".close");
        const switchToSignup = document.getElementById("switchToSignup");
        const switchToLogin = document.getElementById("switchToLogin");
        const tabs = document.querySelectorAll(".tab");
        const tabContents = document.querySelectorAll(".tab-content");
        
        // Open modal
        loginBtn.addEventListener("click", () => {
            modal.style.display = "block";
            switchTab("login");
        });
        
        signupBtn.addEventListener("click", () => {
            modal.style.display = "block";
            switchTab("signup");
        });
        
        // Close modal
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
        
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
        
        // Switch between login and signup
        switchToSignup.addEventListener("click", (e) => {
            e.preventDefault();
            switchTab("signup");
        });
        
        switchToLogin.addEventListener("click", (e) => {
            e.preventDefault();
            switchTab("login");
        });
        
        // Tab switching
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const tabId = tab.getAttribute("data-tab");
                switchTab(tabId);
            });
        });
        
        function switchTab(tabId) {
            // Update tabs
            tabs.forEach(tab => {
                if (tab.getAttribute("data-tab") === tabId) {
                    tab.classList.add("active");
                } else {
                    tab.classList.remove("active");
                }
            });
            
            // Update tab contents
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        }
        
        // Form submission
        document.getElementById("loginForm").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login functionality would be implemented here");
            modal.style.display = "none";
        });
        
        document.getElementById("signupForm").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Signup functionality would be implemented here");
            modal.style.display = "none";
        });
