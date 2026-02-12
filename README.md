## Valentine App

High-end, responsive Valentine’s Day web experience built with **React**, **Tailwind CSS**, and **Framer Motion**.

### Quick start

1. Install dependencies (from this folder):

```bash
npm install
npm run dev
```

> If `npm install` fails because of network restrictions inside Cursor, run it in your own terminal outside Cursor instead.

2. Open the printed `localhost` URL in your browser.

### Customizing the experience

- **Secret question (Stage 1)**  
  Open `src/components/Stage1Gatekeeper.jsx` and update the `correctAnswer` string inside the `handleUnlock` function to your real inside joke or first meeting place.

- **Flowers & reasons (Stage 2)**  
  Edit the `flowers` array in `src/components/Stage2Bouquet.jsx` to change flower names, colors, and the reasons you love her.

- **Memories & photos (Stage 3)**  
  1. Drop your own images into `public/images` (for example: `public/images/memory-1.jpg`).  
  2. Update the `src`, `title`, and `caption` fields of each item in the `memories` array in `src/components/Stage3MemoryGallery.jsx`.

- **Final plan (Stage 4)**  
  Open `src/components/Stage4FinalReveal.jsx` and replace the `[Location you'll take her]` and `[Time you'll meet]` placeholders with the real details.

### Floating heart background

The soft floating heart animation lives in `src/components/FloatingHeartsBackground.jsx`.  
You can tweak:

- Positions (`left`)
- Sizes (`size`)
- Animation speed (`duration`) and height (`y`)

to match exactly how subtle or dramatic you want it to feel.

