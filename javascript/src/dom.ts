/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file is a collection of risky functions that interact with elements.
 * BudouX does not apply any HTML sanitization by default, but this is the place
 * to install a sanitizer if needed.
 */
import {DOMParser, parseHTML} from 'linkedom';

/**
 * Parses an html string and returns a parsed html document.
 * @param html An HTML string.
 * @return A Document.
 */
export const parseFromString = (html: string) => {
  return new DOMParser().parseFromString(
    `<!doctype html><html><body>${html}</body></html>`,
    'text/html'
  );
};

/**
 * Sets an innerHTML on a given Element or ShadowRoot.
 * @param element An Element or ShadowRoot.
 * @param html An HTML string to set.
 */
export const setInnerHtml = (element: Element | ShadowRoot, html: string) => {
  element.innerHTML = html;
};

/**
 * Creates an HTML document.
 * @returns Document
 */
export const createDocument = () => {
  const {document} = parseHTML('<!doctype html><html></html>');
  return document;
};

/**
 * Whether the running environment is a Web browser.
 */
export const isBrowser = false;
