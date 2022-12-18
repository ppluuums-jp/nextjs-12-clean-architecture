// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "../../di/inversify.config";
import { TYPES } from "../../di/types";
import { ReadAllUsersUseCase } from "../../domain/usecases/read-all-users-usecase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const usecase = container.get<ReadAllUsersUseCase>(
        TYPES.ReadAllUsersUseCase
      );
      const data = await usecase.execute({});
      res.status(200);
      res.send(data);
      break;
    default:
      res.status(400);
  }
}
