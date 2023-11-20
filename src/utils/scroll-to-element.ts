export function scrollToElement(dataScroll: string) {
  const $section = document.querySelector(`#${dataScroll}`);

  if (!$section) {
    return;
  }

  $section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
