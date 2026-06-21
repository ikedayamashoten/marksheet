// ============================================================
// Supabase 接続設定（全画面共通）
// ★★ ここの2行を、あなたのSupabaseの値に書き換えてください ★★
//   SUPABASE_URL  : Supabase管理画面の Settings > API の「Project URL」
//   SUPABASE_ANON : 同じ画面の「anon public」キー
//
// ※ この2つはブラウザに出てよい公開用の値です（GitHubに載せてOK）。
// ※ Gemini APIキーはここには書きません。Supabaseのサーバー側(Secret)に
//    登録し、grade-marksheet Edge Function 経由で安全に使います。
// ============================================================
const SUPABASE_URL  = "https://jprsjjpsnkkbkntzxinu.supabase.co";
const SUPABASE_ANON = "sb_publishable_2bnCANmbw1--68WUpoZL5w_jSS1XDHc";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
