import type { MicroCMSImage } from 'microcms-js-sdk';

export type EntryModel = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	description: string;
	content: string;
	tags: TagModel[];
	heroImage?: MicroCMSImage;
};

export type TagModel = {
	name : string
};

export type EntryResponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: EntryModel[];
};

export type TagResponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: TagModel[];
};