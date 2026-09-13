/* ---------------------------------------------------------------
   Feedback form.

   SET THIS UP (2 minutes):
   1. Go to formspree.io, sign up free, create a form.
   2. It gives you an endpoint like https://formspree.io/f/abcdwxyz
   3. Paste it below, replacing the empty string.

   Until you do that, the form falls back to opening the reader's
   email app with their message pre-filled, sent to YOUR_EMAIL below.
   So it works from the moment you deploy — just less smoothly.
   --------------------------------------------------------------- */

const FORMSPREE_ENDPOINT = "";          // e.g. "https://formspree.io/f/abcdwxyz"
const YOUR_EMAIL = "you@example.com";   // used only for the fallback

/* --------------------------------------------------------------- */

const form = document.getElementById("feedback-form");
const statusEl = document.getElementById("status");
const submitBtn = document.getElementById("submit-btn");
const messageEl = document.getElementById("message");
const messageErr = document.getElementById("message-err");

messageEl.addEventListener("input", () => {
  if (messageEl.value.trim()) messageErr.hidden = true;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = messageEl.value.trim();

  if (!message) {
    messageErr.hidden = false;
    messageEl.focus();
    return;
  }

  if (!FORMSPREE_ENDPOINT) {
    const body =
      message +
      "\n\n—\n" +
      (name ? "From: " + name + "\n" : "") +
      (email ? "Reply to: " + email + "\n" : "");
    window.location.href =
      "mailto:" + YOUR_EMAIL +
      "?subject=" + encodeURIComponent("Thoughts on the essay") +
      "&body=" + encodeURIComponent(body);
    statusEl.textContent = "Opening your email app.";
    return;
  }

  submitBtn.disabled = true;
  statusEl.textContent = "Sending.";

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (!res.ok) throw new Error("Request failed");

    form.innerHTML =
      '<p class="status">Sent. Thank you for taking the time — I read all of these.</p>';
  } catch (err) {
    submitBtn.disabled = false;
    statusEl.textContent =
      "That didn't send. Email it to " + YOUR_EMAIL + " instead and it'll reach me.";
  }
});
