/*!
 * @license
 * Copyright 2017 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ElementFinder, element, by, ExpectedConditions as EC, browser } from 'protractor';
import { BROWSER_WAIT_TIMEOUT } from '../configs';

export abstract class Component {
    component: ElementFinder;

    constructor(selector: string, ancestor?: ElementFinder) {
        const locator = by.css(selector);

        this.component = ancestor
            ? ancestor.element(locator)
            : element(locator);
    }

    wait() {
        return browser.wait(EC.presenceOf(this.component), BROWSER_WAIT_TIMEOUT);
    }
}