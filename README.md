# Replay

AI sports podcasts. Pulls live scores from ESPN, writes a script with Claude, and turns it into audio with ElevenLabs.

## Put it online with GitHub Pages (no coding needed)

You'll need a free GitHub account: https://github.com/signup

### Step 1. Make a repository
1. Sign in to GitHub and click the **+** at the top right, then **New repository**.
2. Name it exactly **replay** (all lowercase). This matters, see "Using a different name" below.
3. Choose **Public**. Leave the other boxes unchecked. Click **Create repository**.

### Step 2. Upload the files
1. Unzip the `replay.zip` you downloaded. Open the unzipped `replay` folder.
2. On your new repository page, click **uploading an existing file**.
3. Select everything INSIDE the `replay` folder (not the folder itself) and drag it into the browser window.
   - `.github` is a hidden folder. On Mac press Cmd+Shift+. in Finder, on Windows turn on "Hidden items" in the View menu, so you can see it. Without it, your site won't publish.
4. Wait for the uploads to finish, then click **Commit changes**.

### Step 3. Turn on Pages
1. In your repository, click **Settings**, then **Pages** in the left menu.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Step 4. Wait for it to publish
1. Click the **Actions** tab. You'll see a job called "Deploy to GitHub Pages" running. It takes about 1 to 2 minutes. A green check means it worked.
2. If you uploaded before Step 3, click that job and then **Re-run all jobs**.
3. Your site is at: `https://YOUR-GITHUB-USERNAME.github.io/replay/`

## First time using the app

Click **Add API keys** (top right) and paste in:
- **Anthropic API key** (required). Get one at https://console.anthropic.com. This writes the script. It costs about a cent per episode.
- **ElevenLabs API key** (optional). Get one at https://elevenlabs.io. This turns the script into audio. Without it you still get the script.

Your keys are saved only in your own browser. They are never part of the website files, so nobody else can see them. Because of that, only enter keys on your own computer, and don't share them.

## If something goes wrong

- **Blank white page:** the repository name doesn't match `vite.config.js`. See below.
- **Actions tab shows a red X:** click the job to see why, or ask Claude and paste in the error.
- **No games showing:** that sport may be in its off-season. Click "Jump to the latest games".

## Using a different name

If your repository isn't called `replay`, open `vite.config.js` on GitHub (click the file, then the pencil icon) and change `base: "/replay/"` to `base: "/your-name/"`. Keep both slashes. Then commit the change.

## Running it on your computer (optional)

Install Node.js (https://nodejs.org), then in this folder run `npm install` and `npm run dev`.
