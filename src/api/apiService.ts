import { callAPI } from "@/config/api";
import { config } from "../config";
import { LoginDataType } from "@/interface";

const HOST = config.host;

export async function authLogin(data: LoginDataType) {
  const request = {
    url: `${HOST}/api/auth/login`,
    method: "POST",
    data,
  };

  const response = await callAPI(request);

  return response;
}
