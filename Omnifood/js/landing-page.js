const iconSvgs = {
  calories: `<svg xmlns="http://www.w3.org/2000/svg" class="icon-css" viewBox="0 0 512 512"><path d="M112 320c0-93 124-165 96-272 66 0 192 96 192 272a144 144 0 01-288 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80 40-86 32-128c42 0 96 70.29 96 128z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`,
  nutriscore: `<svg xmlns="http://www.w3.org/2000/svg" class="icon-css" viewBox="0 0 512 512"><path d="M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`,
  rating: `<svg xmlns="http://www.w3.org/2000/svg" class="icon-css" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>`,
  checkmark: `<svg xmlns="http://www.w3.org/2000/svg" class="icon-css" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" class="icon-css" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`,
  dash: `<svg xmlns="http://www.w3.org/2000/svg" class="icon-css" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"/></svg>`,
  rightarrow: `<svg xmlns="http://www.w3.org/2000/svg" class="icon-css" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>`,
  downarrow: `<svg xmlns="http://www.w3.org/2000/svg" class="icon-css" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 268l144 144 144-144M256 392V100"/></svg>`,
};

document.querySelectorAll('.icon-js').forEach((iconContainer) => {
  const iconName = iconContainer.dataset.iconName;
  if (!Object.hasOwn(iconSvgs, iconName)) return;
  iconContainer.innerHTML = iconSvgs[iconContainer.dataset.iconName];
});
