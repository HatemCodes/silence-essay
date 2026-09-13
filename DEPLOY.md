# Putting this online

Your setup: GitHub as `HatemCodes`, Vercel Hobby as `hatemcodes`, VS Code, projects in `C:\Users\hatem\Documents`. These steps assume that.

There's nothing to build — it's plain HTML, CSS and JS. Vercel serves it as-is.

---

## Before you deploy: two edits

**1. Your email.** Open `script.js`. Line 18, change `you@example.com` to your real email. This is the fallback that makes the feedback form work immediately.

**2. Your name.** It appears in three places in `index.html` — the `author` meta tag, the byline under the title, and the footer. I used "Hatem Chehade" from your portfolio domain. Change it if that's not how you want to be credited, or remove the byline entirely if you'd rather publish it unsigned.

---

## Deploy

1. Copy the `silence-essay` folder into `C:\Users\hatem\Documents\`.
2. In VS Code: **File → Open Folder →** select it.
3. Terminal (Ctrl+`), then:

```
git init
git add .
git commit -m "Essay on silence and engineered stimulation"
```

4. Create a new empty repo on GitHub — call it `silence-essay`, don't add a README or .gitignore. Then:

```
git remote add origin https://github.com/HatemCodes/silence-essay.git
git branch -M main
git push -u origin main
```

5. On Vercel: **Add New → Project → Import** the repo. Leave every setting alone — framework preset "Other", no build command, root directory `./`. Hit **Deploy**.

You'll get `silence-essay.vercel.app` in about twenty seconds. Every `git push` after this redeploys automatically.

**Want a nicer URL?** In the Vercel project, **Settings → Domains** lets you rename it — something like `guardrails.vercel.app` if it's free.

---

## Turning on the feedback form properly

The mailto fallback works, but it's clunky on phones and a lot of readers won't follow through. Ten minutes of setup gets you a real form:

1. Sign up at **formspree.io** (free tier: 50 submissions a month).
2. Create a form. It hands you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Paste it into `FORMSPREE_ENDPOINT` at the top of `script.js`.
4. Push. Done — responses land in your inbox.

If 50/month turns out to be too few, that's a good problem, and you can swap in **Web3Forms** (free, unlimited) with the same one-line change.

**Alternative worth knowing about:** if you'd rather have *public* threaded comments instead of private notes, **giscus.app** runs comments on top of GitHub Discussions — free, no database, and you already have the repo. The trade-off is that readers need a GitHub account to post, which will lose you most non-technical readers. Given you're writing for elders as well as youth, I'd stay with the private form.

---

## Checking it before you share it

Open `index.html` locally by double-clicking it — everything works offline except the web font.

Then once deployed, on your phone:

- The opening screen should be mostly empty with the title sitting low. That's deliberate — the reader scrolls through a moment of nothing before the first word. If it looks broken to you, it's working.
- Check the Arabic transliteration renders (ṣ, ḥ, ā with their marks). If any show as boxes, tell me and I'll swap them for plain ASCII.
- Send the link to one person who disagrees with you before you send it to a hundred who agree.

---

## Notes on the content

Two things I'd sort before this gets wide circulation:

**Get the hadith section checked.** The gradings in Part Six and the chain discussion in Part Three are the parts where an error costs most — and where someone will correct you publicly. Ten minutes with an imam or a student of hadith is cheap insurance.

**Re-verify the market figures** at time of publishing. They move, and the piece's credibility rests on being the article that doesn't repeat unverified numbers.
