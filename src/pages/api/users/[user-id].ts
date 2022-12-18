// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const q = req.query;
  // const router = useRouter();
  // パスパラメータから値を取得
  // const { userId } = router.query;
  // const usecase = container.get<ReadUserUseCase>(TYPES.ReadUserUseCase);
  // const users = await usecase.execute({ uuid: "dF3BnMurP0tRTio71Mxr" });
  res.json(q);
  res.status(200);
}
