import { API_URL } from "@Constants/envs";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

export type TDefaultResponse<T> = {
	status: number;
	message?: string;
	data: T;
};

class HttpClient {
	requestConfig: AxiosInstance;
	constructor() {
		this.requestConfig = axios.create({
			baseURL: API_URL,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": "true",
				accept: "application/json",
			},
			withCredentials: true,
		});
		this.requestConfig.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error.response) {
					console.log(error.response.data.message);
				}
				return Promise.reject(error);
			},
		);
	}

	async get<T>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<TDefaultResponse<T>> {
		const response = await this.requestConfig
			.get(url, config)
			.then((response) => response)
			.catch((error) => error);
		return response.data;
	}
	async post<T, K = never>(url: string, data?: K, config?: AxiosRequestConfig) {
		const response = await this.requestConfig.post(url, data, config);
		return response.data as TDefaultResponse<T>;
	}
	async put<T, K = never>(url: string, data?: K, config?: AxiosRequestConfig) {
		const response = await this.requestConfig.put(url, data, config);
		return response.data as TDefaultResponse<T>;
	}
	async delete<T>(url: string, config?: AxiosRequestConfig) {
		const response = await this.requestConfig.delete(url, config);
		return response.data as TDefaultResponse<T>;
	}
}

const HTTP_REQUEST = new HttpClient();
export default HTTP_REQUEST;
