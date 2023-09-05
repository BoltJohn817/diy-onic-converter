const PREFIX_LENGTH = 3;
const BLOCK_TAGS = [
  'address',
  'article',
  'aside',
  'blockquote',
  'canvas',
  'dd',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hr',
  'li',
  'main',
  'nav',
  'noscript',
  'ol',
  'p',
  'pre',
  'section',
  'table',
  'tfoot',
  'ul',
  'video',
];

/**
 * Create a DIY-onic element with static prefix length. The text parameter may not contains space.
 *
 * @param {string} text
 * @returns HTMLSpanElement
 * @example
 *  createDIYOnicElement('TestAlphaBet')
 *  => <span class="diyonic"><b>Tes</b>tAlphaBet</span>
 */

const createDIYOnicElement = (text) => {
  const normalText = text.substring(PREFIX_LENGTH);
  const emphasisText = text.substring(0, PREFIX_LENGTH);

  const emphasisElement = document.createElement('b');
  emphasisElement.textContent = emphasisText;

  const element = document.createElement('span');
  element.className = 'diyonic';
  element.appendChild(emphasisElement);
  element.append(normalText + ' ');

  return element;
};

/**
 * Process the container by selecting all paragraphs and applying a createDIYOnicElement to each paragraph.
 *
 * @param {HTMLElement} container - The container element to process.
 */
const processTag = (tag) => {
  const words = tag.textContent.split(' ');

  tag.innerHTML = '';
  words.forEach((word) => {
    tag.appendChild(createDIYOnicElement(word));
  });
};

/**
 * Process the given container by selecting all elements and process paragraphs one by one.
 *
 * @param {HTMLElement} container - The container element to process.
 */
const processContainer = (container) => {
  const paragraphs = [...container.children];

  paragraphs.forEach(processTag);
};

const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  console.log('Performing bionic reading conversion on:', container);

  processContainer(container);
};
// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
