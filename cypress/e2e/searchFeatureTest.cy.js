import {HomePage} from './pages/homePage';
import { WikiPage } from './pages/wikiPage';

describe('Search Feature', function() {
	const homePage = new HomePage(),
		wikiPage = new WikiPage();
	it('verify that user gets to ${searchTest} page. ', function() {
		homePage.navigateToUrl('https://www.wikipedia.org/');
		homePage.typeinSearchTextBox('Apollo 11');
		homePage.clickOntheSearchButton();
		homePage.verifyTitleOfPage('Apollo 11');
		wikiPage.verifyH3title('Apollo 11');

	});
});