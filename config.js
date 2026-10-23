// Supabase-Verbindung für den Küchenbestand
window.KB_CONFIG = {
  SUPABASE_URL: "https://eujraxtespziyrqkfwut.supabase.co",
  SUPABASE_KEY: "sb_publishable_-C3WYozpXv6dOBY-brpDCA_iWRrxBJF",
  VAPID_PUBLIC_KEY: "BFSyYeGdefB0ivrTWvHazdryUyw9V5OXfGilq0-eKWDzV6rYDr3aqY0IcLQmkmqsuzyYsfmX8LVdqMMX0dXs4EU",
  WARN_DAYS: 7
};


// Fester Haushalt: alle Geräte nutzen automatisch denselben Bestand
try { localStorage.setItem("kb_household", "o-0Y7IuCyyc9FfM70zQ7PLG4"); } catch (e) {}
