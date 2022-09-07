import {HomePage} from './pages/homePage';
import { WikiPage } from './pages/wikiPage';

describe('Search Feature', function() {
	const searchTexts = [
		'Apollo 11',
		'Apollo 13',
		'Apollo 12',
	];
	const homePage = new HomePage(),
		wikiPage = new WikiPage();
	
	beforeEach(function() {
		homePage.navigateToUrl('https://www.wikipedia.org/');
	});
	
	after(async function () {
		wikiPage.clearCookies();
	});
	searchTexts.forEach(searchText=>{
		it(`verify that user gets to ${searchText} page.`, function() {
		
			homePage.typeinSearchTextBox(searchText);
			homePage.clickOntheSearchButton();
			homePage.verifyTitleOfPage(searchText);
			wikiPage.verifyH3title(searchText);
		});

	});
	
});