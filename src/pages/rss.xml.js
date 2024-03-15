import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getEntryResponse } from '../lib/client';

export async function GET(context) {
	const posts = (await getEntryResponse()).contents;
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post,
			link: `/entry/${post.id}/`,
		})),
	});
}
