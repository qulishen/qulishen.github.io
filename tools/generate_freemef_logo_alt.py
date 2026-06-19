from pathlib import Path
import math

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "images" / "papers"
PNG_OUT = OUT_DIR / "freemef-logo-alt-3x2.png"
SVG_OUT = OUT_DIR / "freemef-logo-alt-3x2.svg"

W, H = 1500, 1000
S = 3


def font(size):
    for path in [
        "/System/Library/Fonts/SFNS.ttf",
        "/System/Library/Fonts/SFCompact.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def p(v):
    if isinstance(v, tuple):
        return tuple(int(round(x * S)) for x in v)
    return int(round(v * S))


def rounded(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(p(box), radius=p(radius), fill=fill, outline=outline, width=p(width))


def polygon(draw, pts, fill):
    draw.polygon([p(pt) for pt in pts], fill=fill)


def draw_alt_mark(draw, cx, cy, scale=1.0):
    ink = (20, 31, 46)
    blue = (32, 123, 207)
    teal = (28, 158, 136)
    gold = (242, 166, 48)
    pale = (246, 250, 252)

    # A clean aperture diamond: fusion without using arrows.
    r = 150 * scale
    diamond = [(cx, cy - r), (cx + r, cy), (cx, cy + r), (cx - r, cy)]
    polygon(draw, diamond, pale)
    draw.line([p(diamond[i]) for i in [0, 1, 2, 3, 0]], fill=ink, width=p(9 * scale), joint="curve")

    # Three exposure rays converge into a shared bright state.
    rays = [
        ((cx - 210 * scale, cy - 82 * scale), (cx - 22 * scale, cy - 24 * scale), blue),
        ((cx - 228 * scale, cy), (cx - 18 * scale, cy), teal),
        ((cx - 210 * scale, cy + 82 * scale), (cx - 22 * scale, cy + 24 * scale), gold),
    ]
    for start, end, color in rays:
        draw.line([p(start), p(end)], fill=color, width=p(18 * scale))
        sx, sy = start
        rounded(draw, (sx - 62 * scale, sy - 18 * scale, sx + 36 * scale, sy + 18 * scale), 18 * scale, color)

    # Interior exposure facets.
    facets = [
        [(cx, cy - 116 * scale), (cx + 92 * scale, cy - 22 * scale), (cx + 10 * scale, cy - 12 * scale)],
        [(cx + 116 * scale, cy), (cx + 18 * scale, cy + 72 * scale), (cx + 10 * scale, cy + 12 * scale)],
        [(cx, cy + 116 * scale), (cx - 92 * scale, cy + 22 * scale), (cx - 10 * scale, cy + 12 * scale)],
        [(cx - 116 * scale, cy), (cx - 18 * scale, cy - 72 * scale), (cx - 10 * scale, cy - 12 * scale)],
    ]
    for pts, color in zip(facets, [(215, 232, 247), (222, 244, 239), (254, 236, 198), (238, 243, 248)]):
        polygon(draw, pts, color)

    draw.ellipse(p((cx - 30 * scale, cy - 30 * scale, cx + 30 * scale, cy + 30 * scale)), fill=(255, 255, 255), outline=ink, width=p(7 * scale))
    draw.ellipse(p((cx - 12 * scale, cy - 12 * scale, cx + 12 * scale, cy + 12 * scale)), fill=gold)


def build_png():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    img = Image.new("RGB", (W * S, H * S), "white")
    draw = ImageDraw.Draw(img)

    draw_alt_mark(draw, 545, 420, 1.12)

    ink = (20, 31, 46)
    muted = (87, 99, 114)
    draw.text(p((790, 386)), "FreeMEF", font=font(150 * S), fill=ink, anchor="lm")
    draw.text(p((800, 493)), "Flexible Multi-Exposure Fusion", font=font(42 * S), fill=muted, anchor="lm")

    # Minimal exposure-stop signature.
    for i, (label, color) in enumerate([("low", (32, 123, 207)), ("mid", (28, 158, 136)), ("high", (242, 166, 48))]):
        x = 804 + i * 98
        rounded(draw, (x, 575, x + 58, 584), 4.5, color)
        draw.text(p((x + 29, 622)), label, font=font(24 * S), fill=(112, 121, 132), anchor="mm")

    img.resize((W, H), Image.Resampling.LANCZOS).save(PNG_OUT)


def build_svg():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    SVG_OUT.write_text(
        f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <rect width="{W}" height="{H}" fill="#fff"/>
  <g transform="translate(545 420) scale(1.12)">
    <path d="M0 -150L150 0L0 150L-150 0Z" fill="#f6fafc" stroke="#141f2e" stroke-width="9" stroke-linejoin="round"/>
    <path d="M-210 -82L-22 -24" stroke="#207bcf" stroke-width="18" stroke-linecap="round"/>
    <rect x="-272" y="-100" width="98" height="36" rx="18" fill="#207bcf"/>
    <path d="M-228 0L-18 0" stroke="#1c9e88" stroke-width="18" stroke-linecap="round"/>
    <rect x="-290" y="-18" width="98" height="36" rx="18" fill="#1c9e88"/>
    <path d="M-210 82L-22 24" stroke="#f2a630" stroke-width="18" stroke-linecap="round"/>
    <rect x="-272" y="64" width="98" height="36" rx="18" fill="#f2a630"/>
    <path d="M0 -116L92 -22L10 -12Z" fill="#d7e8f7"/>
    <path d="M116 0L18 72L10 12Z" fill="#def4ef"/>
    <path d="M0 116L-92 22L-10 12Z" fill="#feecc6"/>
    <path d="M-116 0L-18 -72L-10 -12Z" fill="#eef3f8"/>
    <circle cx="0" cy="0" r="30" fill="#fff" stroke="#141f2e" stroke-width="7"/>
    <circle cx="0" cy="0" r="12" fill="#f2a630"/>
  </g>
  <text x="790" y="418" font-family="SF Pro Display, Inter, Arial, sans-serif" font-size="150" font-weight="750" fill="#141f2e">FreeMEF</text>
  <text x="800" y="506" font-family="SF Pro Text, Inter, Arial, sans-serif" font-size="42" fill="#576372">Flexible Multi-Exposure Fusion</text>
  <g>
    <rect x="804" y="575" width="58" height="9" rx="4.5" fill="#207bcf"/>
    <rect x="902" y="575" width="58" height="9" rx="4.5" fill="#1c9e88"/>
    <rect x="1000" y="575" width="58" height="9" rx="4.5" fill="#f2a630"/>
    <text x="833" y="622" font-family="SF Pro Text, Inter, Arial, sans-serif" font-size="24" text-anchor="middle" fill="#707984">low</text>
    <text x="931" y="622" font-family="SF Pro Text, Inter, Arial, sans-serif" font-size="24" text-anchor="middle" fill="#707984">mid</text>
    <text x="1029" y="622" font-family="SF Pro Text, Inter, Arial, sans-serif" font-size="24" text-anchor="middle" fill="#707984">high</text>
  </g>
</svg>
'''
    )


if __name__ == "__main__":
    build_png()
    build_svg()
    print(PNG_OUT)
    print(SVG_OUT)
