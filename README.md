# Peninsula Disc Golf Club — Website

Production website for [peninsuladgc.org](https://peninsuladgc.org)

## 🗂 Site Structure

```
/
├── index.html          → Homepage
├── 404.html            → Custom 404 page
├── css/
│   └── style.css       → All site styles
├── js/
│   ├── shared-root.js  → Nav/footer for homepage
│   └── shared-sub.js   → Nav/footer for subpages
├── events/
│   └── index.html      → Events calendar
├── about/
│   └── index.html      → About & board members
└── blog/
    └── index.html      → News & blog
```

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository named `peninsuladgc-website` (or similar)
2. Upload all files, maintaining the folder structure above
3. Go to **Settings → Pages**
4. Set Source to `main` branch, root folder `/`
5. Save — your site will be live at `https://yourusername.github.io/peninsuladgc-website`

## 🌐 Connecting peninsuladgc.org (via Cloudflare)

1. Create a free account at cloudflare.com
2. Add `peninsuladgc.org` as a site
3. In Cloudflare DNS, add these records:
   - **A** `@` → `185.199.108.153`
   - **A** `@` → `185.199.109.153`
   - **A** `@` → `185.199.110.153`
   - **A** `@` → `185.199.111.153`
   - **CNAME** `www` → `yourusername.github.io`
4. In Squarespace Domains → Advanced → set nameservers to Cloudflare's
5. In GitHub Pages settings, enter `peninsuladgc.org` as custom domain
6. Enable "Enforce HTTPS" once DNS propagates (up to 24 hrs)

## ✏️ Updating Content

### Adding/editing events
Edit `/events/index.html` — copy an existing `.event-card` block and update the content.

### Adding a blog post
Edit `/blog/index.html` — copy an existing `.news-card` block and update the title, tag, date, and author.

### Updating board members
Edit `/about/index.html` — find the `.board-grid` section and update the name/role in each `.board-card`.

### Changing contact email
Search for `info@peninsuladgc.org` across all files and replace.

## 👥 Giving a Co-Director Access

In GitHub:
1. Go to your repo → **Settings → Collaborators**
2. Click "Add people"
3. Enter their GitHub username
4. Set role to **Write**

They can then edit files directly in GitHub's web editor or push changes via Git.

## 🎨 Design Notes

- **Primary color (lime green):** `#b5d44a`
- **Forest dark:** `#0f2218`
- **Fonts:** Barlow Condensed (headings) + Barlow (body) + Lora (italic accents)
- Photos are from Unsplash — replace with real club photos for production
