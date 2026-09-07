/* TIV DIGITAL MARKETING FORMS & INTERACTION HANDLER */

function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
  const color = type === 'success' ? '#25d366' : '#F97101';
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}" style="color: ${color}; font-size: 1.2rem;"></i>
    <div>
      <h5 style="margin: 0; font-size: 0.9rem; font-weight: 700;">TIV Digital Marketing</h5>
      <p style="margin: 2px 0 0 0; font-size: 0.85rem; opacity: 0.9;">${message}</p>
    </div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Enquiry Sent Successfully!`;
        submitBtn.style.background = '#018B11';
        showToast('Thank you! Your enquiry has been received. Our strategist will contact you within 2 hours.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
      }, 1200);
    });
  }

  // Free Audit Form Handler
  const auditForm = document.getElementById('audit-form');
  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = auditForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Analyzing Website & Profile...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Audit Requested!`;
        submitBtn.style.background = '#018B11';
        showToast('Your Free Digital Audit Request is confirmed! Audit report will be sent to your email & WhatsApp.');
        auditForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
      }, 1500);
    });
  }

  // Consultation Modal Form Handler
  const consultationForm = document.getElementById('consultation-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = consultationForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Scheduling Consultation...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Consultation session booked! Check your email for meeting link.');
        consultationForm.reset();
        
        // Close modal
        const modalOverlay = document.getElementById('consultation-modal');
        if (modalOverlay) {
          modalOverlay.classList.remove('active');
        }

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1200);
    });
  }

  // Career Modal Form Handler
  const careerForm = document.getElementById('career-form');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = careerForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting Application...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Application submitted! Our recruitment team will review your application soon.');
        careerForm.reset();

        const modalOverlay = document.getElementById('career-modal');
        if (modalOverlay) {
          modalOverlay.classList.remove('active');
        }

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1200);
    });
  }
});
