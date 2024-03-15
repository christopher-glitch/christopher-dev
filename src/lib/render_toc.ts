import * as cheerio from 'cheerio';

export const renderToc = (body: string) => {
	const $ = cheerio.load(body);
	const headings = $('h1, h2, h3, h4').toArray();

	const toc = headings.map((data: any) => {
		return({
			text: data.childNodes[0].data,
			id: data.attribs.id,
			name: data.name,
	})});

	return toc;
};