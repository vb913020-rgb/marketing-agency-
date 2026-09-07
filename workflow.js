/* TIV AI WORKFLOW INTERACTIVE VISUALIZER */
document.addEventListener('DOMContentLoaded', () => {
  const workflowNodes = document.querySelectorAll('.workflow-node');
  const stepDetailTitle = document.getElementById('workflow-step-title');
  const stepDetailDesc = document.getElementById('workflow-step-desc');
  const playWorkflowBtn = document.getElementById('btn-play-workflow');

  const workflowDetails = [
    {
      title: "1. Customer Enquiry",
      desc: "A prospective customer fills out a form on your website, sends a message on WhatsApp, or submits a lead form on Meta Ads."
    },
    {
      title: "2. AI Reads & Analyzes Enquiry",
      desc: "Our AI Agent instantly processes natural language, understands intent, evaluates urgency, and extracts key buyer intent signals."
    },
    {
      title: "3. Lead Categorized Automatically",
      desc: "The enquiry is classified into specific service categories (e.g. High Priority SEO Lead, AI Agent Custom Build, Urgent Web Audit)."
    },
    {
      title: "4. Customer Information Added to CRM",
      desc: "Contact details, requirements, source channel, and interaction history are structured and synced directly into your CRM database."
    },
    {
      title: "5. Automated Response Sent",
      desc: "A personalized, context-aware reply or WhatsApp message is sent immediately to confirm receipt and answer preliminary FAQs."
    },
    {
      title: "6. Sales Team Notified",
      desc: "The appropriate account manager or sales executive receives instant notification on Slack, WhatsApp, or Email with complete lead context."
    },
    {
      title: "7. Follow-Up Scheduled",
      desc: "An automated calendar invite, reminder task, or nurture sequence is scheduled automatically so no lead is ever missed."
    }
  ];

  let currentStepIndex = 0;
  let autoPlayTimer = null;

  function setActiveStep(index) {
    workflowNodes.forEach((node, idx) => {
      if (idx === index) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    if (stepDetailTitle && stepDetailDesc && workflowDetails[index]) {
      stepDetailTitle.innerText = workflowDetails[index].title;
      stepDetailDesc.innerText = workflowDetails[index].desc;
    }

    currentStepIndex = index;
  }

  workflowNodes.forEach((node, idx) => {
    node.addEventListener('click', () => {
      stopAutoPlay();
      setActiveStep(idx);
    });
  });

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      let nextStep = (currentStepIndex + 1) % workflowNodes.length;
      setActiveStep(nextStep);
    }, 2800);
    if (playWorkflowBtn) {
      playWorkflowBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause Simulation`;
    }
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
    if (playWorkflowBtn) {
      playWorkflowBtn.innerHTML = `<i class="fa-solid fa-play"></i> Simulate AI Workflow`;
    }
  }

  if (playWorkflowBtn) {
    playWorkflowBtn.addEventListener('click', () => {
      if (autoPlayTimer) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    });
  }

  // Initialize with step 0
  setActiveStep(0);
});
