import HTTP_REQUEST, { type TDefaultResponse } from "@Api/index";

export default class TestApi {
	static async getPosts(): Promise<
		TDefaultResponse<unknown> | TDefaultResponse<never>
	> {
		return await HTTP_REQUEST.get("/posts").then((response) => response);
	}
}
