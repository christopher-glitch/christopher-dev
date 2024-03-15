import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
import type { EntryModel, EntryResponse } from "./model";

const client = createClient({
	serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const getEntryResponse = async (queries: MicroCMSQueries = {limit: 99}) => {
	return await client.get<EntryResponse>({ endpoint: "entries", queries });
};

export const getEntryDetail = async (
	contentId: string,
	queries?: MicroCMSQueries
) => {
	return await client.getListDetail<EntryModel>({
		endpoint: "entries",
		contentId,
		queries,
	});
};