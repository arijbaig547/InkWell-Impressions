const { createClient } = supabase;

const SUPABASE_URL = "https://qzbgonpwkntqenhqhpyo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6YmdvbnB3a250cWVuaHFocHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMjAyODEsImV4cCI6MjA5OTc5NjI4MX0.xPBgRaJFP__QtSGUvBaRseuhMpaLiDgToFrdIr1fArY";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase connected", supabaseClient);

async function testInsert() {

    const { data, error } = await supabaseClient
        .from("purchase_orders")
        .insert({
            company_name: "Test Company",
            agent_name: "Arij Baig",
            email: "test@test.com",
            phone: "123456789",
            po_number: "PO-001",
            notes: "Supabase test order"
        });

    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Success:", data);
    }
}

testInsert();