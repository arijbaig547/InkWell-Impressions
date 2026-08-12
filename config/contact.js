
        // 1. QUOTE FORM
        const quoteForm = document.getElementById('form-quote');
        if (quoteForm) {
            quoteForm.addEventListener('submit', async function (e) {
                e.preventDefault();
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;

                btn.disabled = true;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

                try {
                    const formData = new FormData();
                    formData.append('request_type', 'quotation');
                    formData.append('first_name', this.querySelector('input[placeholder="John"]').value);
                    formData.append('last_name', this.querySelector('input[placeholder="Doe"]').value);
                    formData.append('company', this.querySelector('input[placeholder="Acme Corp"]').value);
                    formData.append('email', this.querySelector('input[placeholder="john@acmecorp.com"]').value);
                    formData.append('phone', this.querySelector('input[placeholder="+1 (555) 000-0000"]').value);

                    // ====== NEW FIELDS ======
                    formData.append('asi_number', this.querySelector('input[placeholder="Enter ASI/PPAI/SAGE number"]').value);
                    formData.append('item', this.querySelector('input[placeholder="e.g. IB29, MQIB6000"]').value);
                    formData.append('item_qty', this.querySelector('input[placeholder="Enter quantity"]').value);
                    // ====== END NEW FIELDS ======

                    formData.append('category', this.querySelector('select').value);
                    formData.append('quantity', this.querySelector('input[placeholder="e.g. 500"]').value);
                    formData.append('date', this.querySelector('input[type="date"]').value);
                    formData.append('details', this.querySelector('textarea').value);

                    const fileInput = this.querySelector('input[type="file"]');
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

                    alert('✅ Quote Request Sent Successfully!');
                    this.reset();
                } catch (error) {
                    console.error(error);
                    alert('❌ Failed to send. Please try again.');
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }
            });
        }

        // 2. MOCKUP FORM
        // 2. MOCKUP FORM
        const mockupForm = document.getElementById('form-mockup');
        if (mockupForm) {
            mockupForm.addEventListener('submit', async function (e) {
                e.preventDefault();
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;

                btn.disabled = true;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

                try {
                    const formData = new FormData();
                    formData.append('request_type', 'mockup');
                    formData.append('company', this.querySelector('input[placeholder="Acme Corp"]').value);
                    formData.append('name', this.querySelector('input[placeholder="John Doe"]').value);
                    formData.append('email', this.querySelector('input[type="email"]').value);

                    // ====== NEW FIELDS ======
                    formData.append('asi_number', this.querySelector('input[placeholder="Enter ASI/PPAI/SAGE number"]').value);
                    formData.append('item', this.querySelector('input[placeholder="e.g. IB29, MQIB6000"]').value);
                    formData.append('item_qty', this.querySelector('input[placeholder="Enter quantity"]').value);
                    // ====== END NEW FIELDS ======

                    formData.append('product', this.querySelector('input[placeholder="e.g., Matte Black Tumbler, Cotton Tote Bag"]').value);
                    formData.append('instructions', this.querySelector('textarea').value);

                    const fileInput = this.querySelector('input[type="file"]');
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

                    alert('✅ Mockup Request Sent Successfully!');
                    this.reset();
                } catch (error) {
                    console.error(error);
                    alert('❌ Failed to send. Please try again.');
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }
            });
        }

        // 3. FREIGHT FORM
        const freightForm = document.getElementById('form-freight');
        if (freightForm) {
            freightForm.addEventListener('submit', async function (e) {
                e.preventDefault();
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;

                btn.disabled = true;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

                try {
                    const formData = new FormData();
                    formData.append('request_type', 'freight');  // ✅ FIXED
                    formData.append('name', this.querySelector('input[placeholder="John Doe"]').value);
                    formData.append('email', this.querySelector('input[type="email"]').value);
                    formData.append('address', this.querySelector('input[placeholder="123 Main St"]').value);
                    formData.append('city', this.querySelector('input[placeholder="New York"]').value);
                    formData.append('state', this.querySelector('input[placeholder="NY"]').value);
                    formData.append('zip', this.querySelector('input[placeholder="10001"]').value);
                    formData.append('country', this.querySelector('input[placeholder="USA"]').value);
                    formData.append('volume', this.querySelector('input[placeholder="e.g., 2 Pallets, ~500 lbs"]').value);
                    formData.append('delivery_type', this.querySelector('select').value);

                    const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
                        method: 'POST',
                        body: formData
                    });

                    const result = await response.json();
                    if (!response.ok) throw new Error(result.message || 'Failed');

                    alert('✅ Freight Estimate Request Sent Successfully!');
                    this.reset();
                } catch (error) {
                    console.error(error);
                    alert('❌ Failed to send. Please try again.');
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }
            });
        }

        // 4. CREDIT APPLICATION FORM
        const creditForm = document.getElementById('form-credit');
        if (creditForm) {
            creditForm.addEventListener('submit', async function (e) {
                e.preventDefault();
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;

                btn.disabled = true;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

                try {
                    const formData = new FormData();
                    formData.append('request_type', 'credit');  // ✅ FIXED

                    // Business Information
                    formData.append('business_name', document.querySelector('#form-credit input[placeholder="Acme Corp"]')?.value || '');
                    formData.append('date', document.querySelector('#form-credit input[type="date"]')?.value || '');
                    formData.append('address', document.querySelectorAll('#form-credit input[type="text"]')[2]?.value || '');
                    formData.append('city', document.querySelectorAll('#form-credit input[type="text"]')[3]?.value || '');
                    formData.append('state', document.querySelectorAll('#form-credit input[type="text"]')[4]?.value || '');
                    formData.append('zip', document.querySelectorAll('#form-credit input[type="text"]')[5]?.value || '');
                    formData.append('telephone', document.querySelector('#form-credit input[type="tel"]')?.value || '');
                    formData.append('fax', document.querySelectorAll('#form-credit input[type="text"]')[7]?.value || '');

                    // Card 1
                    formData.append('po_email', document.querySelector('#form-credit input[type="email"]')?.value || '');
                    formData.append('ap_email', document.querySelectorAll('#form-credit input[type="email"]')[1]?.value || '');
                    formData.append('finance_contact', document.querySelectorAll('#form-credit input[type="text"]')[8]?.value || '');
                    formData.append('card_name_1', document.querySelectorAll('#form-credit input[type="text"]')[9]?.value || '');
                    formData.append('billing_address_1', document.querySelectorAll('#form-credit input[type="text"]')[10]?.value || '');
                    formData.append('city_1', document.querySelectorAll('#form-credit input[type="text"]')[11]?.value || '');
                    formData.append('state_1', document.querySelectorAll('#form-credit input[type="text"]')[12]?.value || '');
                    formData.append('zip_1', document.querySelectorAll('#form-credit input[type="text"]')[13]?.value || '');

                    const card1Usage = document.querySelector('input[name="card1-usage"]:checked');
                    formData.append('card_usage_1', card1Usage ? card1Usage.value : '');
                    formData.append('po_number_1', document.querySelectorAll('#form-credit input[type="text"]')[14]?.value || '');
                    formData.append('auth_value_1', document.querySelectorAll('#form-credit input[type="text"]')[15]?.value || '');

                    // Card 2
                    formData.append('card_name_2', document.querySelectorAll('#form-credit input[type="text"]')[16]?.value || '');
                    formData.append('billing_address_2', document.querySelectorAll('#form-credit input[type="text"]')[17]?.value || '');
                    formData.append('city_2', document.querySelectorAll('#form-credit input[type="text"]')[18]?.value || '');
                    formData.append('state_2', document.querySelectorAll('#form-credit input[type="text"]')[19]?.value || '');
                    formData.append('zip_2', document.querySelectorAll('#form-credit input[type="text"]')[20]?.value || '');

                    const card2Usage = document.querySelector('input[name="card2-usage"]:checked');
                    formData.append('card_usage_2', card2Usage ? card2Usage.value : '');
                    formData.append('po_number_2', document.querySelectorAll('#form-credit input[type="text"]')[21]?.value || '');
                    formData.append('auth_value_2', document.querySelectorAll('#form-credit input[type="text"]')[22]?.value || '');

                    // Comments & Signature
                    formData.append('comments', document.querySelector('#form-credit textarea')?.value || '');
                    formData.append('card_holder_name', document.querySelectorAll('#form-credit input[type="text"]')[23]?.value || '');
                    formData.append('signature', document.querySelectorAll('#form-credit input[type="text"]')[24]?.value || '');
                    formData.append('signed_date', document.querySelectorAll('#form-credit input[type="date"]')[1]?.value || '');

                    const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
                        method: 'POST',
                        body: formData
                    });

                    const result = await response.json();
                    if (!response.ok) throw new Error(result.message || 'Failed');

                    alert('✅ Credit Application Submitted Successfully!');
                    this.reset();
                } catch (error) {
                    console.error(error);
                    alert('❌ Failed to submit. Please try again.');
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }
            });
        }

        // 5. PURCHASE ORDER FORM
        // 5. PURCHASE ORDER FORM - SIMPLIFIED
        const poForm = document.getElementById('form-po');
        if (poForm) {
            poForm.addEventListener('submit', async function (e) {
                e.preventDefault();
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;

                btn.disabled = true;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

                try {
                    const formData = new FormData();
                    formData.append('request_type', 'po');

                    // Company Information
                    const inputs = this.querySelectorAll('input');
                    formData.append('company_name', inputs[0]?.value || '');
                    formData.append('contact_person', inputs[1]?.value || '');
                    formData.append('email', inputs[2]?.value || '');
                    formData.append('phone', inputs[3]?.value || '');
                    formData.append('address', inputs[4]?.value || '');
                    formData.append('city', inputs[5]?.value || '');
                    formData.append('state', inputs[6]?.value || '');
                    formData.append('zip', inputs[7]?.value || '');
                    formData.append('country', inputs[8]?.value || '');
                    formData.append('tax_id', inputs[9]?.value || '');

                    // PO File
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

                    alert('✅ Purchase Order Submitted Successfully!');
                    this.reset();
                    document.getElementById('poFileName').classList.add('hidden');
                    document.getElementById('poFileName').textContent = '';

                } catch (error) {
                    console.error(error);
                    alert('❌ Failed to submit. Please try again.');
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }
            });
        }

        // PO File Input Handler - Show file name
        const poFileInput = document.getElementById('poFileInput');
        if (poFileInput) {
            poFileInput.addEventListener('change', function (e) {
                const fileName = document.getElementById('poFileName');
                if (this.files.length > 0) {
                    fileName.textContent = '📎 ' + this.files[0].name;
                    fileName.classList.remove('hidden');
                } else {
                    fileName.classList.add('hidden');
                }
            });

            // Click on dropzone to trigger file input
            const dropzone = poFileInput.closest('.flex');
            if (dropzone) {
                dropzone.addEventListener('click', () => poFileInput.click());
                // Drag and drop support
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
        // HAMBURGER MENU & TAB SWITCHING (Existing Code)
        // ============================================================
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburgerIcon = document.getElementById('hamburgerIcon');

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

        function showForm(formId) {
            document.querySelectorAll('.form-panel').forEach(form => {
                form.classList.add('hidden');
                form.classList.remove('opacity-100');
                form.classList.add('opacity-0');
            });

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.className = "tab-btn w-full flex items-center justify-between text-left px-5 py-3.5 rounded-lg transition-all duration-200 text-brand-textSecondary hover:text-brand-text hover:bg-brand-bg/30";
                const svg = btn.querySelector('svg');
                if (svg) svg.classList.add('opacity-0');
            });

            const activeForm = document.getElementById('form-' + formId);
            activeForm.classList.remove('hidden');
            setTimeout(() => {
                activeForm.classList.remove('opacity-0');
                activeForm.classList.add('opacity-100');
            }, 10);

            const activeTab = document.getElementById('tab-' + formId);
            activeTab.className = "tab-btn active w-full flex items-center justify-between text-left px-5 py-3.5 rounded-lg transition-all duration-200 text-brand-text bg-brand-bg/50 border-l-3 border-brand-crimson";
            const activeSvg = activeTab.querySelector('svg');
            if (activeSvg) activeSvg.classList.remove('opacity-0');
        }
        // ============================================================
        // NET 30 SUBMIT
        // ============================================================
        async function submitNet30() {
            const btn = event.target;
            const originalText = btn.innerHTML;

            // Check agreement
            const agreement = document.getElementById('net30-agreement');
            if (!agreement.checked) {
                alert('Please agree to the Net 30 terms and conditions.');
                return;
            }

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting...';

            try {
                const formData = new FormData();
                formData.append('request_type', 'net30');

                // Get all net30 fields
                document.querySelectorAll('.net30-field').forEach(input => {
                    formData.append(input.previousElementSibling?.textContent?.trim()?.toLowerCase() || input.name || 'field', input.value);
                });

                // Add signature fields
                formData.append('signature_name', document.getElementById('signature-name').value);
                formData.append('signature', document.getElementById('signature-field').value);
                formData.append('signature_date', document.getElementById('signature-date').value);

                const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();
                if (!response.ok) throw new Error(result.message || 'Failed');

                alert('✅ Net 30 Application Submitted Successfully!');

                // Clear only net30 fields
                document.querySelectorAll('.net30-field').forEach(input => input.value = '');
                agreement.checked = false;

            } catch (error) {
                console.error(error);
                alert('❌ Failed to submit. Please try again.');
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        }

        // ============================================================
        // CREDIT CARD SUBMIT
        // ============================================================
        async function submitCreditCard() {
            const btn = event.target;
            const originalText = btn.innerHTML;

            // Check global agreement
            const globalAgreement = document.getElementById('global-agreement');
            if (!globalAgreement.checked) {
                alert('Please confirm that all information is accurate.');
                return;
            }

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting...';

            try {
                const formData = new FormData();
                formData.append('request_type', 'credit_card');

                // Get all credit card fields
                document.querySelectorAll('.cc-field').forEach(input => {
                    formData.append(input.previousElementSibling?.textContent?.trim()?.toLowerCase() || input.name || 'field', input.value);
                });

                // Add signature fields
                formData.append('signature_name', document.getElementById('signature-name').value);
                formData.append('signature', document.getElementById('signature-field').value);
                formData.append('signature_date', document.getElementById('signature-date').value);

                const response = await fetch('https://inkwell-email-api.arijbaig97.workers.dev', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();
                if (!response.ok) throw new Error(result.message || 'Failed');

                alert('✅ Credit Card Authorization Submitted Successfully!');

                // Clear only credit card fields
                document.querySelectorAll('.cc-field').forEach(input => input.value = '');
                globalAgreement.checked = false;

            } catch (error) {
                console.error(error);
                alert('❌ Failed to submit. Please try again.');
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        }

        // File input handler
        document.querySelectorAll('input[type="file"]').forEach(input => {
            const dropzone = input.closest('.flex');
            if (dropzone) {
                dropzone.addEventListener('click', () => input.click());
                input.addEventListener('change', function (e) {
                    const name = e.target.files[0]?.name || '';
                    const label = dropzone.querySelector('span');
                    if (label && name) {
                        label.textContent = '✓ ' + name;
                        label.classList.add('text-brand-crimson');
                    }
                });
            }
        });
