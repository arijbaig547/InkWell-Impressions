// ============================================================
// SWEETALERT2 CONFIG
// ============================================================
const swal = Swal;

// Success Toast
function showSuccessToast(message) {
    swal.fire({
        icon: 'success',
        title: 'Success!',
        text: message,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        background: '#ffffff',
        iconColor: '#C81F45',
        customClass: {
            popup: 'rounded-xl shadow-lg'
        }
    });
}

// Error Toast
function showErrorToast(message) {
    swal.fire({
        icon: 'error',
        title: 'Error!',
        text: message,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        background: '#ffffff',
        iconColor: '#C81F45',
        customClass: {
            popup: 'rounded-xl shadow-lg'
        }
    });
}

// Warning Alert
function showWarningAlert(message) {
    swal.fire({
        icon: 'warning',
        title: '⚠️ Validation Error',
        text: message,
        confirmButtonColor: '#C81F45',
        confirmButtonText: 'Got it!',
        background: '#ffffff',
        iconColor: '#C81F45',
        customClass: {
            popup: 'rounded-xl shadow-lg',
            confirmButton: 'btn-crimson px-6 py-2 rounded font-medium'
        }
    });
}

// Success Alert with redirect
function showSuccessAlert(message, callback) {
    swal.fire({
        icon: 'success',
        title: '✅ Success!',
        text: message,
        confirmButtonColor: '#C81F45',
        confirmButtonText: 'OK',
        background: '#ffffff',
        iconColor: '#C81F45',
        customClass: {
            popup: 'rounded-xl shadow-lg',
            confirmButton: 'btn-crimson px-6 py-2 rounded font-medium'
        }
    }).then(() => {
        if (callback) callback();
    });
}

// Error Alert
function showErrorAlert(message) {
    swal.fire({
        icon: 'error',
        title: '❌ Oops!',
        text: message,
        confirmButtonColor: '#C81F45',
        confirmButtonText: 'Try Again',
        background: '#ffffff',
        iconColor: '#C81F45',
        customClass: {
            popup: 'rounded-xl shadow-lg',
            confirmButton: 'btn-crimson px-6 py-2 rounded font-medium'
        }
    });
}

// ============================================================
// VALIDATION FUNCTIONS
// ============================================================

function isValidEmail(email) {
    if (!email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    if (!phone) return true;
    return /^[0-9]+$/.test(phone);
}

function isValidZip(zip) {
    if (!zip) return true;
    return /^[a-zA-Z0-9\s\-]+$/.test(zip);
}

function isValidAsi(asi) {
    if (!asi) return true;
    return /^[0-9]+$/.test(asi);
}

function isValidItem(item) {
    if (!item) return false;
    return /^[a-zA-Z0-9\-_]+$/.test(item);
}

function isValidQuantity(qty) {
    const num = Number(qty);
    return Number.isInteger(num) && num >= 1;
}

function isValidDate(dateStr) {
    if (!dateStr) return true;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
    const parts = dateStr.split('-');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);
    if (year < 2020 || year > 2100) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        return false;
    }
    return true;
}

function isValidText(text) {
    if (!text) return false;
    return /^[a-zA-Z0-9\s\-.,']+$/.test(text);
}

// ============================================================
// SHOW/HIDE ERROR FUNCTIONS
// ============================================================

function showError(input, message) {
    if (!input) return;
    const parent = input.closest('div');
    if (!parent) return;
    const errorEl = parent.querySelector('.error-message');
    if (errorEl) {
        errorEl.textContent = message || errorEl.textContent || 'Please fill this field correctly.';
        errorEl.classList.add('show');
    }
    input.classList.remove('success');
    input.classList.add('error');
}

function hideError(input) {
    if (!input) return;
    const parent = input.closest('div');
    if (!parent) return;
    const errorEl = parent.querySelector('.error-message');
    if (errorEl) {
        errorEl.classList.remove('show');
    }
    input.classList.remove('error');
    input.classList.add('success');
}

function clearError(input) {
    if (!input) return;
    const parent = input.closest('div');
    if (!parent) return;
    const errorEl = parent.querySelector('.error-message');
    if (errorEl) {
        errorEl.classList.remove('show');
        errorEl.textContent = '';
    }
    input.classList.remove('error', 'success');
}

// ============================================================
// VALIDATE INDIVIDUAL FIELD
// ============================================================

function validateField(input) {
    if (!input) return true;
    
    const name = input.getAttribute('name');
    const value = input.value || '';
    const isRequired = input.hasAttribute('required');
    
    if (isRequired && !value.trim()) {
        showError(input, 'This field is required.');
        return false;
    }
    
    if (!isRequired && !value.trim()) {
        clearError(input);
        return true;
    }
    
    let isValid = true;
    let errorMsg = '';
    
    switch (name) {
        case 'email':
        case 'po_email':
        case 'po_email_2':
            isValid = isValidEmail(value);
            errorMsg = 'Please enter a valid email address.';
            break;
            
        case 'phone':
        case 'telephone':
            isValid = isValidPhone(value);
            errorMsg = 'Phone number should contain only digits.';
            break;
            
        case 'zip_code':
        case 'zip':
        case 'zip_1':
        case 'zip_2':
            isValid = isValidZip(value);
            errorMsg = 'Please enter a valid ZIP code (e.g. 12345 or 12345-6789).';
            break;
            
        case 'asi_ppai_sage':
        case 'asi_number':
            isValid = isValidAsi(value);
            errorMsg = 'ASI/PPAI/SAGE # should contain only numbers.';
            break;
            
        case 'item':
            isValid = isValidItem(value);
            errorMsg = 'Item should contain only letters, numbers, dash or underscore.';
            break;
            
        case 'item_qty':
        case 'quantity':
            isValid = isValidQuantity(value);
            errorMsg = 'Please enter a valid quantity (minimum 1).';
            break;
            
        case 'company':
        case 'company_name':
        case 'business_name':
        case 'contact_person':
            isValid = isValidText(value);
            errorMsg = 'Please enter a valid name.';
            break;
            
        case 'in_hand_date':
        case 'date':
        case 'signature_date':
            isValid = isValidDate(value);
            errorMsg = 'Please select a valid date (2020-2100).';
            break;
            
        case 'cvv_1':
        case 'cvv_2':
            isValid = /^[0-9]+$/.test(value) && value.length >= 3 && value.length <= 4;
            errorMsg = 'CVV should contain 3-4 digits only.';
            break;
            
        case 'logo_colors':
            const num = Number(value);
            isValid = Number.isInteger(num) && num >= 1 && num <= 10;
            errorMsg = 'Please enter a valid number between 1 and 10.';
            break;
            
        case 'color':
            isValid = value !== '';
            errorMsg = 'Please select a color.';
            break;
            
        case 'country':
        case 'state':
            isValid = value !== '';
            errorMsg = 'Please select an option.';
            break;
            
        default:
            if (input.type === 'text' || input.type === 'tel' || input.type === 'number') {
                if (isRequired && !value.trim()) {
                    isValid = false;
                    errorMsg = 'This field is required.';
                }
            }
            break;
    }
    
    if (!isValid) {
        showError(input, errorMsg);
        return false;
    } else {
        hideError(input);
        return true;
    }
}

// ============================================================
// SETUP REAL-TIME VALIDATION ON INPUTS
// ============================================================

function setupValidation(form) {
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.type === 'file' || input.type === 'checkbox' || input.type === 'radio') return;
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            const parent = this.closest('div');
            if (parent) {
                const errorEl = parent.querySelector('.error-message');
                if (errorEl) {
                    errorEl.classList.remove('show');
                }
                this.classList.remove('error');
            }
        });
        
        input.addEventListener('change', function() {
            validateField(this);
        });
    });
}

// ============================================================
// VALIDATE ENTIRE FORM BEFORE SUBMIT
// ============================================================

function validateForm(form) {
    if (!form) return false;
    if (form.classList.contains('hidden')) return true;
    
    let allValid = true;
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.type === 'file' || input.type === 'checkbox' || input.type === 'radio') return;
        if (input.disabled) return;
        if (!validateField(input)) {
            allValid = false;
        }
    });
    
    const checkboxes = form.querySelectorAll('input[type="checkbox"][required]');
    checkboxes.forEach(cb => {
        if (!cb.checked) {
            allValid = false;
            const parent = cb.closest('div');
            if (parent) {
                const errorEl = parent.querySelector('.error-message');
                if (errorEl) {
                    errorEl.textContent = 'Please check this box to continue.';
                    errorEl.classList.add('show');
                }
            }
        } else {
            const parent = cb.closest('div');
            if (parent) {
                const errorEl = parent.querySelector('.error-message');
                if (errorEl) {
                    errorEl.classList.remove('show');
                }
            }
        }
    });
    
    if (!allValid) {
        const firstError = form.querySelector('.input-premium.error');
        if (firstError) {
            firstError.focus();
        }
        showWarningAlert('Please fix all the errors before submitting.');
    }
    
    return allValid;
}

// ============================================================
// FILE UPLOAD HANDLERS
// ============================================================

const quoteFileInput = document.getElementById('quoteFileInput');
if (quoteFileInput) {
    const dropzone = quoteFileInput.closest('.file-dropzone');
    if (dropzone) {
        dropzone.addEventListener('click', () => quoteFileInput.click());
        quoteFileInput.addEventListener('change', function(e) {
            const fileName = document.getElementById('quoteFileNames');
            if (this.files.length > 0) {
                const names = Array.from(this.files).map(f => f.name).join(', ');
                fileName.textContent = '📎 ' + names;
                fileName.classList.remove('hidden');
            } else {
                fileName.classList.add('hidden');
            }
        });
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('border-brand-crimson', 'bg-brand-crimson/5');
        });
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('border-brand-crimson', 'bg-brand-crimson/5');
        });
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('border-brand-crimson', 'bg-brand-crimson/5');
            if (e.dataTransfer.files.length > 0) {
                quoteFileInput.files = e.dataTransfer.files;
                const fileName = document.getElementById('quoteFileNames');
                const names = Array.from(e.dataTransfer.files).map(f => f.name).join(', ');
                fileName.textContent = '📎 ' + names;
                fileName.classList.remove('hidden');
            }
        });
    }
}

const mockupFileInput = document.getElementById('mockupFileInput');
if (mockupFileInput) {
    const dropzone = mockupFileInput.closest('.file-dropzone');
    if (dropzone) {
        dropzone.addEventListener('click', () => mockupFileInput.click());
        mockupFileInput.addEventListener('change', function(e) {
            const fileName = document.getElementById('mockupFileName');
            if (this.files.length > 0) {
                const names = Array.from(this.files).map(f => f.name).join(', ');
                fileName.textContent = '📎 ' + names;
                fileName.classList.remove('hidden');
            } else {
                fileName.classList.add('hidden');
            }
        });
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('border-brand-crimson', 'bg-brand-crimson/5');
        });
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('border-brand-crimson', 'bg-brand-crimson/5');
        });
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('border-brand-crimson', 'bg-brand-crimson/5');
            if (e.dataTransfer.files.length > 0) {
                mockupFileInput.files = e.dataTransfer.files;
                const fileName = document.getElementById('mockupFileName');
                const names = Array.from(e.dataTransfer.files).map(f => f.name).join(', ');
                fileName.textContent = '📎 ' + names;
                fileName.classList.remove('hidden');
            }
        });
    }
}

const poFileInput = document.getElementById('poFileInput');
if (poFileInput) {
    const dropzone = poFileInput.closest('.file-dropzone');
    if (dropzone) {
        dropzone.addEventListener('click', () => poFileInput.click());
        poFileInput.addEventListener('change', function(e) {
            const fileName = document.getElementById('poFileName');
            if (this.files.length > 0) {
                fileName.textContent = '📎 ' + this.files[0].name;
                fileName.classList.remove('hidden');
            } else {
                fileName.classList.add('hidden');
            }
        });
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('border-brand-crimson', 'bg-brand-crimson/5');
        });
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('border-brand-crimson', 'bg-brand-crimson/5');
        });
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('border-brand-crimson', 'bg-brand-crimson/5');
            if (e.dataTransfer.files.length > 0) {
                poFileInput.files = e.dataTransfer.files;
                const fileName = document.getElementById('poFileName');
                fileName.textContent = '📎 ' + e.dataTransfer.files[0].name;
                fileName.classList.remove('hidden');
            }
        });
    }
}

// ============================================================
// DYNAMIC STATE/PROVINCE DROPDOWN
// ============================================================

const stateData = {
    us: [
        { value: 'AL', label: 'Alabama' },
        { value: 'AK', label: 'Alaska' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'CA', label: 'California' },
        { value: 'CO', label: 'Colorado' },
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'HI', label: 'Hawaii' },
        { value: 'ID', label: 'Idaho' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IN', label: 'Indiana' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NV', label: 'Nevada' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'OH', label: 'Ohio' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'OR', label: 'Oregon' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'TX', label: 'Texas' },
        { value: 'UT', label: 'Utah' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia' },
        { value: 'WA', label: 'Washington' },
        { value: 'WV', label: 'West Virginia' },
        { value: 'WI', label: 'Wisconsin' },
        { value: 'WY', label: 'Wyoming' }
    ],
    pk: [
        { value: 'PB', label: 'Punjab' },
        { value: 'SD', label: 'Sindh' },
        { value: 'KP', label: 'Khyber Pakhtunkhwa' },
        { value: 'BL', label: 'Balochistan' },
        { value: 'GB', label: 'Gilgit-Baltistan' },
        { value: 'AJK', label: 'Azad Jammu & Kashmir' },
        { value: 'IS', label: 'Islamabad Capital Territory' }
    ],
    ca: [
        { value: 'AB', label: 'Alberta' },
        { value: 'BC', label: 'British Columbia' },
        { value: 'MB', label: 'Manitoba' },
        { value: 'NB', label: 'New Brunswick' },
        { value: 'NL', label: 'Newfoundland and Labrador' },
        { value: 'NS', label: 'Nova Scotia' },
        { value: 'ON', label: 'Ontario' },
        { value: 'PE', label: 'Prince Edward Island' },
        { value: 'QC', label: 'Quebec' },
        { value: 'SK', label: 'Saskatchewan' },
        { value: 'NT', label: 'Northwest Territories' },
        { value: 'NU', label: 'Nunavut' },
        { value: 'YT', label: 'Yukon' }
    ],
    uk: [
        { value: 'ENG', label: 'England' },
        { value: 'SCT', label: 'Scotland' },
        { value: 'WAL', label: 'Wales' },
        { value: 'NIR', label: 'Northern Ireland' }
    ],
    in: [
        { value: 'AP', label: 'Andhra Pradesh' },
        { value: 'BR', label: 'Bihar' },
        { value: 'DL', label: 'Delhi' },
        { value: 'GJ', label: 'Gujarat' },
        { value: 'HR', label: 'Haryana' },
        { value: 'KA', label: 'Karnataka' },
        { value: 'KL', label: 'Kerala' },
        { value: 'MH', label: 'Maharashtra' },
        { value: 'PB', label: 'Punjab' },
        { value: 'RJ', label: 'Rajasthan' },
        { value: 'TN', label: 'Tamil Nadu' },
        { value: 'UP', label: 'Uttar Pradesh' },
        { value: 'WB', label: 'West Bengal' },
        { value: 'TL', label: 'Telangana' }
    ],
    au: [
        { value: 'NSW', label: 'New South Wales' },
        { value: 'VIC', label: 'Victoria' },
        { value: 'QLD', label: 'Queensland' },
        { value: 'WA', label: 'Western Australia' },
        { value: 'SA', label: 'South Australia' },
        { value: 'TAS', label: 'Tasmania' },
        { value: 'ACT', label: 'Australian Capital Territory' },
        { value: 'NT', label: 'Northern Territory' }
    ],
    de: [
        { value: 'BW', label: 'Baden-Württemberg' },
        { value: 'BY', label: 'Bavaria' },
        { value: 'BE', label: 'Berlin' },
        { value: 'BB', label: 'Brandenburg' },
        { value: 'HB', label: 'Bremen' },
        { value: 'HH', label: 'Hamburg' },
        { value: 'HE', label: 'Hesse' },
        { value: 'MV', label: 'Mecklenburg-Vorpommern' },
        { value: 'NI', label: 'Lower Saxony' },
        { value: 'NW', label: 'North Rhine-Westphalia' },
        { value: 'RP', label: 'Rhineland-Palatinate' },
        { value: 'SL', label: 'Saarland' },
        { value: 'SN', label: 'Saxony' },
        { value: 'ST', label: 'Saxony-Anhalt' },
        { value: 'SH', label: 'Schleswig-Holstein' },
        { value: 'TH', label: 'Thuringia' }
    ],
    fr: [
        { value: 'ARA', label: 'Auvergne-Rhône-Alpes' },
        { value: 'BFC', label: 'Bourgogne-Franche-Comté' },
        { value: 'BRE', label: 'Brittany' },
        { value: 'CVL', label: 'Centre-Val de Loire' },
        { value: 'COR', label: 'Corsica' },
        { value: 'GES', label: 'Grand Est' },
        { value: 'HDF', label: 'Hauts-de-France' },
        { value: 'IDF', label: 'Île-de-France' },
        { value: 'NOR', label: 'Normandy' },
        { value: 'NAQ', label: 'Nouvelle-Aquitaine' },
        { value: 'OCC', label: 'Occitanie' },
        { value: 'PDL', label: 'Pays de la Loire' },
        { value: 'PAC', label: 'Provence-Alpes-Côte d\'Azur' }
    ],
    ae: [
        { value: 'AD', label: 'Abu Dhabi' },
        { value: 'AJ', label: 'Ajman' },
        { value: 'DU', label: 'Dubai' },
        { value: 'FU', label: 'Fujairah' },
        { value: 'RK', label: 'Ras Al Khaimah' },
        { value: 'SH', label: 'Sharjah' },
        { value: 'UQ', label: 'Umm Al Quwain' }
    ]
};

function updateStates(countryCode) {
    const stateSelect = document.getElementById('freightState');
    if (!stateSelect) return;

    // Clear existing options
    stateSelect.innerHTML = '<option value="">Select State/Province</option>';

    // Get states for selected country
    const states = stateData[countryCode] || [];

    if (states.length === 0) {
        // If no states available, show input field instead of select
        const parent = stateSelect.closest('div');
        if (parent) {
            const label = parent.querySelector('label');
            const errorEl = parent.querySelector('.error-message');

            // Replace select with input
            const input = document.createElement('input');
            input.type = 'text';
            input.name = 'state';
            input.id = 'freightState';
            input.className = 'w-full input-premium';
            input.placeholder = 'Enter State/Province';
            input.required = true;

            // Add validation for text input
            input.addEventListener('blur', function() {
                validateField(this);
            });
            input.addEventListener('input', function() {
                const parent = this.closest('div');
                if (parent) {
                    const errorEl = parent.querySelector('.error-message');
                    if (errorEl) {
                        errorEl.classList.remove('show');
                    }
                    this.classList.remove('error');
                }
            });

            stateSelect.replaceWith(input);
        }
        return;
    }

    // Add new options
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.value;
        option.textContent = state.label;
        stateSelect.appendChild(option);
    });

    // If it was replaced with input, restore select
    const parent = stateSelect.closest('div');
    if (parent && stateSelect.tagName === 'INPUT') {
        const select = document.createElement('select');
        select.name = 'state';
        select.id = 'freightState';
        select.className = 'w-full input-premium appearance-none cursor-pointer';
        select.required = true;

        // Copy options
        stateSelect.querySelectorAll('option').forEach(opt => {
            select.appendChild(opt.cloneNode(true));
        });

        stateSelect.replaceWith(select);
    }

    // Re-apply validation
    const newSelect = document.getElementById('freightState');
    if (newSelect) {
        newSelect.addEventListener('change', function() {
            validateField(this);
        });
        newSelect.addEventListener('blur', function() {
            validateField(this);
        });
    }
}

// Country change handler
document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('freightCountry');
    if (countrySelect) {
        // Initial load
        if (countrySelect.value) {
            updateStates(countrySelect.value);
        }

        // On change
        countrySelect.addEventListener('change', function() {
            updateStates(this.value);
        });
    }
});

// ============================================================
// 1. QUOTE FORM
// ============================================================
const quoteForm = document.getElementById('form-quote');
if (quoteForm) {
    setupValidation(quoteForm);
    
    quoteForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm(this)) {
            return;
        }
        
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';
        
        try {
            const formData = new FormData();
            formData.append('request_type', 'quotation');
            formData.append('color', this.querySelector('select[name="color"]')?.value || '');
            formData.append('quantity', this.querySelector('input[name="quantity"]')?.value || '');
            formData.append('zip_code', this.querySelector('input[name="zip_code"]')?.value || '');
            formData.append('company', this.querySelector('input[name="company"]')?.value || '');
            formData.append('email', this.querySelector('input[name="email"]')?.value || '');
            formData.append('phone', this.querySelector('input[name="phone"]')?.value || '');
            formData.append('asi_ppai_sage', this.querySelector('input[name="asi_ppai_sage"]')?.value || '');
            formData.append('item', this.querySelector('input[name="item"]')?.value || '');
            formData.append('item_qty', this.querySelector('input[name="item_qty"]')?.value || '');
            formData.append('in_hand_date', this.querySelector('input[name="in_hand_date"]')?.value || '');
            formData.append('freight_estimate', this.querySelector('input[name="freight_estimate"]:checked')?.value || 'No');
            formData.append('project_details', this.querySelector('textarea[name="project_details"]')?.value || '');
            
            const fileInput = document.getElementById('quoteFileInput');
            if (fileInput && fileInput.files.length > 0) {
                for (let i = 0; i < fileInput.files.length; i++) {
                    formData.append('attachments', fileInput.files[i]);
                }
            }
            
            const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Failed');
            
            showSuccessToast('Quote Request Sent Successfully!');
            this.reset();
            const fileName = document.getElementById('quoteFileNames');
            fileName.classList.add('hidden');
            fileName.textContent = '';
            
            this.querySelectorAll('.input-premium').forEach(el => {
                el.classList.remove('error', 'success');
            });
            
        } catch (error) {
            console.error(error);
            showErrorToast('Failed to send. Please try again.');
        } finally {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    });
}

// ============================================================
// 2. MOCKUP FORM
// ============================================================
const mockupForm = document.getElementById('form-mockup');
if (mockupForm) {
    setupValidation(mockupForm);
    
    mockupForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm(this)) {
            return;
        }
        
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';
        
        try {
            const formData = new FormData();
            formData.append('request_type', 'mockup');
            formData.append('color', this.querySelector('select[name="color"]')?.value || '');
            formData.append('asi_ppai_sage', this.querySelector('input[name="asi_ppai_sage"]')?.value || '');
            formData.append('item', this.querySelector('input[name="item"]')?.value || '');
            formData.append('item_qty', this.querySelector('input[name="item_qty"]')?.value || '');
            formData.append('placement', this.querySelector('select[name="placement"]')?.value || 'front');
            formData.append('method', this.querySelector('select[name="method"]')?.value || 'spot');
            formData.append('quantity', this.querySelector('input[name="quantity"]')?.value || '');
            formData.append('logo_colors', this.querySelector('input[name="logo_colors"]')?.value || '');
            formData.append('email', this.querySelector('input[name="email"]')?.value || '');
            formData.append('phone', this.querySelector('input[name="phone"]')?.value || '');
            formData.append('mockup_freight', this.querySelector('input[name="mockup_freight"]:checked')?.value || 'no');
            formData.append('instructions', this.querySelector('textarea[name="instructions"]')?.value || '');
            
            const fileInput = document.getElementById('mockupFileInput');
            if (fileInput && fileInput.files.length > 0) {
                for (let i = 0; i < fileInput.files.length; i++) {
                    formData.append('logo_files', fileInput.files[i]);
                }
            }
            
            const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Failed');
            
            showSuccessToast('Mockup Request Sent Successfully!');
            this.reset();
            const fileName = document.getElementById('mockupFileName');
            fileName.classList.add('hidden');
            fileName.textContent = '';
            
            this.querySelectorAll('.input-premium').forEach(el => {
                el.classList.remove('error', 'success');
            });
            
        } catch (error) {
            console.error(error);
            showErrorToast('Failed to send. Please try again.');
        } finally {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    });
}

// ============================================================
// 3. FREIGHT FORM
// ============================================================
const freightForm = document.getElementById('form-freight');
if (freightForm) {
    setupValidation(freightForm);
    
    freightForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm(this)) {
            return;
        }
        
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';
        
        try {
            const formData = new FormData();
            formData.append('request_type', 'freight');
            formData.append('email', this.querySelector('input[name="email"]')?.value || '');
            formData.append('asi_number', this.querySelector('input[name="asi_number"]')?.value || '');
            formData.append('item', this.querySelector('input[name="item"]')?.value || '');
            formData.append('item_qty', this.querySelector('input[name="item_qty"]')?.value || '');
            formData.append('country', this.querySelector('select[name="country"]')?.value || '');
            formData.append('state', this.querySelector('select[name="state"]')?.value || '');
            formData.append('zip', this.querySelector('input[name="zip"]')?.value || '');
            formData.append('residential', this.querySelector('input[name="residential"]:checked')?.value || 'no');
            formData.append('instructions', this.querySelector('textarea[name="instructions"]')?.value || '');
            
            const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Failed');
            
            showSuccessToast('Freight Estimate Request Sent Successfully!');
            this.reset();
            this.querySelectorAll('.input-premium').forEach(el => {
                el.classList.remove('error', 'success');
            });
            
        } catch (error) {
            console.error(error);
            showErrorToast('Failed to send. Please try again.');
        } finally {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    });
}

// ============================================================
// 4. NET 30 SUBMIT
// ============================================================
async function submitNet30() {
    const btn = event.target;
    const originalText = btn.innerHTML;
    
    const net30Section = document.getElementById('net30-section');
    if (!net30Section) return;
    
    const net30Inputs = net30Section.querySelectorAll('input, select, textarea');
    let allValid = true;
    
    net30Inputs.forEach(input => {
        if (input.type === 'checkbox') {
            if (input.hasAttribute('required') && !input.checked) {
                allValid = false;
                const parent = input.closest('div');
                if (parent) {
                    const errorEl = parent.querySelector('.error-message');
                    if (errorEl) {
                        errorEl.textContent = 'Please agree to the terms.';
                        errorEl.classList.add('show');
                    }
                }
            }
            return;
        }
        if (input.type === 'file' || input.type === 'submit' || input.type === 'button') return;
        if (!validateField(input)) {
            allValid = false;
        }
    });
    
    if (!allValid) {
        const firstError = net30Section.querySelector('.input-premium.error');
        if (firstError) firstError.focus();
        showWarningAlert('Please fix all the errors before submitting.');
        return;
    }
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting...';
    
    try {
        const formData = new FormData();
        formData.append('request_type', 'net30');
        
        const businessName = net30Section.querySelector('input[name="business_name"]');
        if (businessName) formData.append('business_name', businessName.value);
        
        const date = net30Section.querySelector('input[name="date"]');
        if (date) formData.append('date', date.value);
        
        const address = net30Section.querySelector('input[name="address"]');
        if (address) formData.append('address', address.value);
        
        const city = net30Section.querySelector('input[name="city"]');
        if (city) formData.append('city', city.value);
        
        const state = net30Section.querySelector('input[name="state"]');
        if (state) formData.append('state', state.value);
        
        const zip = net30Section.querySelector('input[name="zip"]');
        if (zip) formData.append('zip', zip.value);
        
        const telephone = net30Section.querySelector('input[name="telephone"]');
        if (telephone) formData.append('telephone', telephone.value);
        
        const fax = net30Section.querySelector('input[name="fax"]');
        if (fax) formData.append('fax', fax.value);
        
        const taxId = net30Section.querySelector('input[name="tax_id"]');
        if (taxId) formData.append('tax_id', taxId.value);
        
        const duns = net30Section.querySelector('input[name="duns"]');
        if (duns) formData.append('duns', duns.value);
        
        const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Failed');
        
        showSuccessToast('Net 30 Application Submitted Successfully!');
        
        net30Section.querySelectorAll('input').forEach(input => {
            if (input.type !== 'checkbox' && input.type !== 'submit' && input.type !== 'button') {
                input.value = '';
            }
            if (input.type === 'checkbox') {
                input.checked = false;
            }
        });
        net30Section.querySelectorAll('.input-premium').forEach(el => {
            el.classList.remove('error', 'success');
        });
        const agreement = document.getElementById('net30-agreement');
        if (agreement) agreement.checked = false;
        
    } catch (error) {
        console.error(error);
        showErrorToast('Failed to submit. Please try again.');
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
}

// ============================================================
// 5. CREDIT CARD SUBMIT
// ============================================================
async function submitCreditCard() {
    const btn = event.target;
    const originalText = btn.innerHTML;
    
    const ccSection = document.getElementById('cc-section');
    if (!ccSection) return;
    
    const ccInputs = ccSection.querySelectorAll('input, select, textarea');
    let allValid = true;
    
    ccInputs.forEach(input => {
        if (input.type === 'checkbox') {
            if (input.hasAttribute('required') && !input.checked) {
                allValid = false;
                const parent = input.closest('div');
                if (parent) {
                    const errorEl = parent.querySelector('.error-message');
                    if (errorEl) {
                        errorEl.textContent = 'Please confirm.';
                        errorEl.classList.add('show');
                    }
                }
            }
            return;
        }
        if (input.type === 'file' || input.type === 'submit' || input.type === 'button') return;
        if (!validateField(input)) {
            allValid = false;
        }
    });
    
    if (!allValid) {
        const firstError = ccSection.querySelector('.input-premium.error');
        if (firstError) firstError.focus();
        showWarningAlert('Please fix all the errors before submitting.');
        return;
    }
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting...';
    
    try {
        const formData = new FormData();
        formData.append('request_type', 'credit_card');
        
        const poEmail = ccSection.querySelector('input[name="po_email"]');
        if (poEmail) formData.append('po_email', poEmail.value);
        const cardName1 = ccSection.querySelector('input[name="card_name_1"]');
        if (cardName1) formData.append('card_name_1', cardName1.value);
        const billingAddress1 = ccSection.querySelector('input[name="billing_address_1"]');
        if (billingAddress1) formData.append('billing_address_1', billingAddress1.value);
        const city1 = ccSection.querySelector('input[name="city_1"]');
        if (city1) formData.append('city_1', city1.value);
        const state1 = ccSection.querySelector('input[name="state_1"]');
        if (state1) formData.append('state_1', state1.value);
        const zip1 = ccSection.querySelector('input[name="zip_1"]');
        if (zip1) formData.append('zip_1', zip1.value);
        const cardNumber1 = ccSection.querySelector('input[name="card_number_1"]');
        if (cardNumber1) formData.append('card_number_1', cardNumber1.value);
        const cvv1 = ccSection.querySelector('input[name="cvv_1"]');
        if (cvv1) formData.append('cvv_1', cvv1.value);
        const expiry1 = ccSection.querySelector('input[name="expiry_1"]');
        if (expiry1) formData.append('expiry_1', expiry1.value);
        const poNumber1 = ccSection.querySelector('input[name="po_number_1"]');
        if (poNumber1) formData.append('po_number_1', poNumber1.value);
        const authValue1 = ccSection.querySelector('input[name="auth_value_1"]');
        if (authValue1) formData.append('auth_value_1', authValue1.value);
        
        const poEmail2 = ccSection.querySelector('input[name="po_email_2"]');
        if (poEmail2) formData.append('po_email_2', poEmail2.value);
        const cardName2 = ccSection.querySelector('input[name="card_name_2"]');
        if (cardName2) formData.append('card_name_2', cardName2.value);
        const billingAddress2 = ccSection.querySelector('input[name="billing_address_2"]');
        if (billingAddress2) formData.append('billing_address_2', billingAddress2.value);
        const city2 = ccSection.querySelector('input[name="city_2"]');
        if (city2) formData.append('city_2', city2.value);
        const state2 = ccSection.querySelector('input[name="state_2"]');
        if (state2) formData.append('state_2', state2.value);
        const zip2 = ccSection.querySelector('input[name="zip_2"]');
        if (zip2) formData.append('zip_2', zip2.value);
        const cardNumber2 = ccSection.querySelector('input[name="card_number_2"]');
        if (cardNumber2) formData.append('card_number_2', cardNumber2.value);
        const cvv2 = ccSection.querySelector('input[name="cvv_2"]');
        if (cvv2) formData.append('cvv_2', cvv2.value);
        const expiry2 = ccSection.querySelector('input[name="expiry_2"]');
        if (expiry2) formData.append('expiry_2', expiry2.value);
        const poNumber2 = ccSection.querySelector('input[name="po_number_2"]');
        if (poNumber2) formData.append('po_number_2', poNumber2.value);
        const authValue2 = ccSection.querySelector('input[name="auth_value_2"]');
        if (authValue2) formData.append('auth_value_2', authValue2.value);
        
        const sigName = document.getElementById('signature-name');
        const sigField = document.getElementById('signature-field');
        const sigDate = document.getElementById('signature-date');
        
        if (sigName) formData.append('signature_name', sigName.value);
        if (sigField) formData.append('signature', sigField.value);
        if (sigDate) formData.append('signature_date', sigDate.value);
        
        const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Failed');
        
        showSuccessToast('Credit Card Authorization Submitted Successfully!');
        
        ccSection.querySelectorAll('input').forEach(input => {
            if (input.type !== 'checkbox' && input.type !== 'submit' && input.type !== 'button') {
                input.value = '';
            }
            if (input.type === 'checkbox') {
                input.checked = false;
            }
        });
        ccSection.querySelectorAll('.input-premium').forEach(el => {
            el.classList.remove('error', 'success');
        });
        
        const globalAgreement = document.getElementById('global-agreement');
        if (globalAgreement) globalAgreement.checked = false;
        if (sigName) sigName.value = '';
        if (sigField) sigField.value = '';
        if (sigDate) sigDate.value = '';
        
    } catch (error) {
        console.error(error);
        showErrorToast('Failed to submit. Please try again.');
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
}

// ============================================================
// 6. PURCHASE ORDER FORM
// ============================================================
const poForm = document.getElementById('form-po');
if (poForm) {
    setupValidation(poForm);
    
    poForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm(this)) {
            return;
        }
        
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';
        
        try {
            const formData = new FormData();
            formData.append('request_type', 'po');
            
            const inputs = this.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (input.type === 'file') return;
                if (input.type === 'checkbox') {
                    formData.append(input.id || 'checkbox', input.checked ? 'true' : 'false');
                    return;
                }
                if (input.name) {
                    formData.append(input.name, input.value);
                }
            });
            
            const poFileInput = document.getElementById('poFileInput');
            if (poFileInput && poFileInput.files.length > 0) {
                formData.append('po_file', poFileInput.files[0]);
            }
            
            const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Failed');
            
            showSuccessToast('Purchase Order Submitted Successfully!');
            this.reset();
            
            const poFileName = document.getElementById('poFileName');
            if (poFileName) {
                poFileName.classList.add('hidden');
                poFileName.textContent = '';
            }
            const poAgreement = document.getElementById('po-agreement');
            if (poAgreement) poAgreement.checked = false;
            
            this.querySelectorAll('.input-premium').forEach(el => {
                el.classList.remove('error', 'success');
            });
            
        } catch (error) {
            console.error(error);
            showErrorToast('Failed to submit. Please try again.');
        } finally {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    });
}

// ============================================================
// HAMBURGER MENU
// ============================================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');

if (hamburgerBtn && mobileMenu && hamburgerIcon) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('fa-bars');
        hamburgerIcon.classList.toggle('fa-xmark');
    });
    
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.add('fa-bars');
            hamburgerIcon.classList.remove('fa-xmark');
        });
    });
}

// ============================================================
// TAB SWITCHING
// ============================================================
function showForm(formId) {
    document.querySelectorAll('.form-panel').forEach(form => {
        form.classList.add('hidden');
        form.classList.remove('opacity-100');
        form.classList.add('opacity-0');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn w-full flex items-center justify-between text-left px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3.5 rounded-lg transition-all duration-200 text-brand-textSecondary hover:text-brand-text hover:bg-brand-bg/30";
        const svg = btn.querySelector('svg');
        if (svg) svg.classList.add('opacity-0');
    });
    
    const activeForm = document.getElementById('form-' + formId);
    if (activeForm) {
        activeForm.classList.remove('hidden');
        setTimeout(() => {
            activeForm.classList.remove('opacity-0');
            activeForm.classList.add('opacity-100');
        }, 10);
    }
    
    const activeTab = document.getElementById('tab-' + formId);
    if (activeTab) {
        activeTab.className = "tab-btn active w-full flex items-center justify-between text-left px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3.5 rounded-lg transition-all duration-200 text-brand-text bg-brand-bg/50 border-l-3 border-brand-crimson";
        const activeSvg = activeTab.querySelector('svg');
        if (activeSvg) activeSvg.classList.remove('opacity-0');
    }
}