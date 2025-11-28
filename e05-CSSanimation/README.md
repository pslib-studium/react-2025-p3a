# CSS Animation

## Co demonstruje
GPU-akcelerované CSS animations/transitions s React event handlery (`onTransitionEnd`, `onAnimationEnd`).

## Use case
- **Jednoduché UI animace** (fade in/out, slide, scale)
- **Deklarativní animace** definované v CSS
- Detekce dokončení animace pro state machine (fáze UI)

## Kdy se hodí použít
- **První volba pro běžné UI animace**
- Animace buttons, modals, tooltips, page transitions
- Kdy nepotřebujete runtime kontrolu nad animací

## Výhody
- **GPU akcelerované** vykreslování bez CPU overhead
- **Automatická optimalizace** prohlížečem
- `onTransitionEnd` / `onAnimationEnd` – detekce dokončení
- **Minimální kód**, vysoký výkon
- **Deklarativní** – oddělení animace od logiky

## Nevýhody
- Omezená kontrola za běhu (nelze snadno měnit cílové hodnoty)
- Složitější orchestrovat (provázat) více animací
- Pro komplexní interaktivní animace nevhodné

## Best practices
- Pro transform/opacity použít `will-change` nebo `transform: translateZ(0)` pro GPU layer
- Vyhýbat se animaci `width`, `height`, `top`, `left` (způsobuje reflow)
- Preferovat `transform` a `opacity`

---

# Doporučený přístup dle use case

| Typ animace | Doporučená technika | Alternativa |
|-------------|---------------------|-------------|
| UI transitions (buttons, modals) | **CSS animations** | React Spring |
| Jednoduché pohyby | **CSS animations** | Framer Motion |
| Canvas hry (2D) | **Konva + rAF** | raw Canvas |
| High-performance particles | **raw Canvas + rAF** | WebGL |
| Data visualization | **Canvas** nebo **SVG** | D3.js |
| Physics simulations | **rAF + physics engine** | Matter.js |
| Page transitions | **CSS** nebo **View Transitions API** | React Router transitions |
