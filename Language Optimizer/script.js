document.addEventListener('DOMContentLoaded', () => {
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');
    const analysisActions = document.getElementById('analysis-actions');
    const emptyPreview = document.getElementById('empty-preview');
    const docContent = document.getElementById('doc-content');
    const fileStatus = document.getElementById('file-status');
    const removeFileBtn = document.getElementById('remove-file');
    const filenameDisplay = document.getElementById('filename-display');
    const summaryBox = document.getElementById('summary-box');
    
    // Buttons
    const optionBtns = {
        'btn-pii': '.pii-issue',
        'btn-cyber': '.cyber-issue',
        'btn-grammar': '.grammar-issue',
        'btn-tone': '.tone-issue',
        'btn-rephrase': '.rephrase-issue',
        'btn-duplicate': '.duplicate-issue',
        'btn-sequence': '.sequence-issue'
    };

    // Popover
    const popover = document.getElementById('suggestion-popover');
    const closePopover = document.getElementById('close-popover');
    let activeHighlight = null;
    let currentReplacementText = '';
    const highlights = document.querySelectorAll('.highlight');
    const rightPanel = document.querySelector('.preview-panel');

    // Profile Dropdown
    const userProfileBtn = document.getElementById('user-profile-btn');
    const profileDropdown = document.getElementById('profile-dropdown');

    if(userProfileBtn) {
        userProfileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('hidden');
        });
    }

    // Slider State
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide-card');
    const sliderTrack = document.getElementById('slider-track');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const progressDotsContainer = document.getElementById('progress-dots');
    
    // Initialize slider dots
    function initSlider() {
        progressDotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            progressDotsContainer.appendChild(dot);
        });
        updateSliderView();
    }
    
    function updateSliderView() {
        // Move track
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        const dots = progressDotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.className = `dot ${index === currentSlide ? 'active' : ''}`;
        });
        
        // Button states
        btnPrev.classList.toggle('hidden', currentSlide === 0);
        
        if (currentSlide === slides.length - 1) {
            btnNext.innerHTML = 'Finish Review <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        } else {
            btnNext.innerHTML = 'Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
        }
        
        // Cleanup UI when sliding
        popover.classList.add('hidden');
        resetHighlights();
    }

    if(slides.length > 0) {
        initSlider();
    }

    btnNext.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSliderView();
        } else {
            // Reached End
            alert('Document review completed successfully!');
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSliderView();
        }
    });

    // --- Upload Logic ---
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

    function handleFile(file) {
        if (!file.name.endsWith('.docx')) {
            alert('Please upload a .docx file.');
            return;
        }
        
        // Hide standard upload UI parts except the status
        uploadZone.querySelector('h3').classList.add('hidden');
        uploadZone.querySelector('p').classList.add('hidden');
        uploadZone.querySelector('.btn-primary').classList.add('hidden');
        uploadZone.querySelector('.upload-icon').classList.add('hidden');
        
        filenameDisplay.textContent = file.name;
        fileStatus.classList.remove('hidden');
        uploadZone.style.padding = "1rem";

        // Show Actions & Preview
        analysisActions.classList.remove('hidden');
        emptyPreview.classList.add('hidden');
        docContent.classList.remove('hidden');
        summaryBox.classList.remove('hidden');
        
        // Reset slider
        currentSlide = 0;
        updateSliderView();

        // Animate the circle score
        setTimeout(() => {
            const circle = document.querySelector('.progress-ring__circle-fill');
            circle.style.strokeDashoffset = '65'; // 85% of 326
        }, 300);
    }

    removeFileBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent clicking upload zone
        
        fileInput.value = '';
        
        uploadZone.querySelector('h3').classList.remove('hidden');
        uploadZone.querySelector('p').classList.remove('hidden');
        uploadZone.querySelector('.btn-primary').classList.remove('hidden');
        uploadZone.querySelector('.upload-icon').classList.remove('hidden');
        fileStatus.classList.add('hidden');
        uploadZone.style.padding = "2.5rem 1.5rem";

        analysisActions.classList.add('hidden');
        emptyPreview.classList.remove('hidden');
        docContent.classList.add('hidden');
        summaryBox.classList.add('hidden');
        
        popover.classList.add('hidden');
        resetHighlights();
        
        // Remove active states from buttons
        Object.keys(optionBtns).forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.classList.remove('active');
        });
    });

    // --- Actions Logic ---
    Object.keys(optionBtns).forEach(btnId => {
        const btnElement = document.getElementById(btnId);
        if (btnElement) {
            btnElement.addEventListener('click', () => {
                btnElement.classList.toggle('active');
                const issueClass = optionBtns[btnId];
                const highlights = document.querySelectorAll(issueClass);
                highlights.forEach(h => {
                    h.style.backgroundColor = btnElement.classList.contains('active') ? '' : 'transparent';
                });
            });
        }
    });

    // --- Highlights & Popover Logic ---

    highlights.forEach(h => {
        h.addEventListener('click', (e) => {
            // Remove active from any other
            resetHighlights();
            h.classList.add('active');
            activeHighlight = h;

            // Get tooltip info
            const tooltipContent = h.getAttribute('data-tooltip');
            let type = 'Issue';
            let color = '';
            
            if (h.classList.contains('grammar-issue')) { type = 'Grammar'; color = 'var(--grammar)'; }
            else if (h.classList.contains('tone-issue')) { type = 'Tone'; color = 'var(--tone)'; }
            else if (h.classList.contains('rephrase-issue')) { type = 'Rephrase'; color = 'var(--rephrase)'; }
            else if (h.classList.contains('pii-issue')) { type = 'PII Masking'; color = 'var(--pii)'; }
            else if (h.classList.contains('cyber-issue')) { type = 'Cybersecurity'; color = 'var(--cyber)'; }
            else if (h.classList.contains('duplicate-issue')) { type = 'Duplicate'; color = 'var(--duplicate)'; }
            else if (h.classList.contains('sequence-issue')) { type = 'Sequence'; color = 'var(--sequence)'; }

            // Split suggestion (naive split for demo)
            let suggestionText = tooltipContent;
            let suggestionDesc = 'Review and accept/ignore.';
            if (tooltipContent.includes('Suggestion:')) {
                const parts = tooltipContent.split('Suggestion:');
                suggestionDesc = parts[0].trim();
                suggestionText = `Suggestion: <strong>${parts[1].trim()}</strong>`;
            } else if (tooltipContent.includes('->')) {
                const parts = tooltipContent.split('->');
                suggestionDesc = parts[0].trim();
                suggestionText = `Suggestion: <strong>${parts[1].trim()}</strong>`;
            } else {
                suggestionText = tooltipContent;
                suggestionDesc = '';
            }

            // Update Popover UI
            popover.querySelector('.type-badge').textContent = type;
            popover.querySelector('.type-badge').style.color = color;
            
            // Generate a lightweight transparent background for the badge based on its color
            // This relies on CSS variables being extracted, but since we map the color directly and can't easily parse CSS vars in inline styles perfectly for rgb alpha, 
            // we will just set it to a very light gray or rely on a standard backdrop
            popover.querySelector('.type-badge').style.backgroundColor = '#f1f5f9';
            
            popover.querySelector('.suggestion-text').innerHTML = suggestionText;
            popover.querySelector('.suggestion-desc').textContent = suggestionDesc;

            // Get replacement specific text
            currentReplacementText = h.getAttribute('data-replacement');

            // Position Popover
            const rect = h.getBoundingClientRect();
            const panelRect = rightPanel.getBoundingClientRect();

            let top = rect.bottom - panelRect.top + 10;
            let left = rect.left - panelRect.left;

            popover.style.top = top + 'px';
            popover.style.left = left + 'px';
            popover.classList.remove('hidden');
        });
    });

    closePopover.addEventListener('click', () => {
        popover.classList.add('hidden');
        resetHighlights();
    });

    // Dismiss popovers if clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.highlight') && !e.target.closest('.suggestion-popover')) {
            popover.classList.add('hidden');
            resetHighlights();
        }
        
        if (profileDropdown && !e.target.closest('#user-profile-btn')) {
            profileDropdown.classList.add('hidden');
        }
    });

    function resetHighlights() {
        highlights.forEach(h => h.classList.remove('active'));
        activeHighlight = null;
    }

    // Accept/Reject demo buttons
    document.querySelector('.btn-accept').addEventListener('click', () => {
        if (activeHighlight && currentReplacementText !== null) {
            const parent = activeHighlight.parentNode;
            
            // Create a span to hold the accepted text and flash it in green
            const acceptedSpan = document.createElement('span');
            acceptedSpan.className = 'accepted-text';
            // if replacing with empty string, we can just insert a space or remove it. 
            // the demo data-replacement handles this
            acceptedSpan.textContent = currentReplacementText;
            
            parent.replaceChild(acceptedSpan, activeHighlight);
            
            // Hide popover
            popover.classList.add('hidden');
            activeHighlight = null;
            
            // Fade out the green flash
            setTimeout(() => {
                acceptedSpan.classList.remove('accepted-text');
                // if it's completely empty (like removing redundant phrase), clear the text entirely
                if (!currentReplacementText) {
                    acceptedSpan.textContent = '';
                }
            }, 1000);
        }
    });

    document.querySelector('.btn-reject').addEventListener('click', () => {
        if (activeHighlight) {
            // Remove highlight classes, making it look like regular text
            activeHighlight.className = '';
            
            // Remove the inline styling and tooltips
            activeHighlight.removeAttribute('style');
            activeHighlight.removeAttribute('data-tooltip');
            activeHighlight.removeAttribute('data-replacement');
            
            popover.classList.add('hidden');
            activeHighlight = null;
        }
    });

});
