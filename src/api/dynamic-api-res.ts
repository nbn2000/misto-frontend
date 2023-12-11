/* eslint-disable spaced-comment */
import { ErrorHandle } from "@/utils/handleErorrs";
import { showUserMessage } from "@/utils/showUserMessage";

import api from "./index";
import { DYNAMICURL } from "./urls";

// auth api
export const dynamicApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    userEdit: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${DYNAMICURL.USER}${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["EDITUSER"],
      transformErrorResponse: (err: any) => ErrorHandle(err),
      transformResponse: (res: any) => {
        showUserMessage(res);
        return res;
      },
    }),
  }),
});

export const { useUserEditMutation } = dynamicApiReq;
