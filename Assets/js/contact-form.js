// ========================================
// CONTACT FORM FUNCTIONALITY
// Graveyard Studios
// ========================================

// Paste your new Google Apps Script Web App URL for the Contact Form here:
const CONTACT_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxBfb6VGR7rEfLdXfUNs9tm9iwDERAhIjrzEp5lC2kerFdZO8Cl6yzOgjGBbrzGNIK7/exec";

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", async function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector(".contact-submit-btn");
            const originalBtnContent = submitBtn ? submitBtn.innerHTML : "Send Message";

            // 1. Extract values using your exact HTML element IDs
            const firstName = document.getElementById("firstName")?.value.trim() || "";
            const lastName = document.getElementById("lastName")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const phone = document.getElementById("phone")?.value.trim() || "";
            
            const subjectSelect = document.getElementById("subject");
            // Grabs the human-readable text of the selected option (e.g., "Piercing Inquiry" instead of "piercing")
            const subject = subjectSelect && subjectSelect.selectedIndex > 0 
                ? subjectSelect.options[subjectSelect.selectedIndex].text 
                : "";
            
            const message = document.getElementById("message")?.value.trim() || "";

            // 2. Validate Required Fields
            if (!firstName || !lastName || !email || !subject || !message) {
                alert("Please fill in all required fields and select a subject.");
                return;
            }

            // 3. UI Loading State
            if (submitBtn) {
                submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
                submitBtn.disabled = true;
            }

            // 4. Construct Payload
            const payload = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phone,
                subject: subject,
                message: message
            };

            try {
                // 5. Send Payload to Google Apps Script Web App
                await fetch(CONTACT_SHEET_WEB_APP_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });

                // 6. Success State
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();

            } catch (error) {
                console.error("Contact form submission error:", error);
                alert("There was an issue sending your message. Please try again.");
            } finally {
                // Restore Button State
                if (submitBtn) {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                }
            }
        });
    }
});