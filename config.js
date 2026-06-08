// ============================================================
// Supabase 接続設定（全画面共通）
// ============================================================
const SUPABASE_URL  = "https://tcatrrncukiipogccdnc.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYXRycm5jdWtpaXBvZ2NjZG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNzA5ODcsImV4cCI6MjA4OTc0Njk4N30.pbcdWibNAI4r9UmJ4bsale_Lc11HusUH-cSoeAobfZQ";

// Gemini APIキー（マークシート読み取りに使用）
// Google AI Studio で取得したキーを貼り付けてください
const GEMINI_API_KEY = "あなたのGeminiAPIキーをここに貼り付け";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
