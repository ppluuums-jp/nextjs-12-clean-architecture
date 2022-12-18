import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "../../../di/inversify.config";
import { TYPES } from "../../../di/types";
import { DeleteUserUseCase } from "../../../domain/usecases/delete-user-usecase";
import { ReadUserUseCase } from "../../../domain/usecases/read-user-usecase";
import { UpdateUserUseCase } from "../../../domain/usecases/update-user-usecase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const q = req.query;
  const userId = q["user-id"] as string;
  switch (req.method) {
    case "GET": {
      const usecase = container.get<ReadUserUseCase>(TYPES.ReadUserUseCase);
      const user = await usecase.execute({ uuid: userId });
      res.status(200);
      res.send(user);
      break;
    }
    case "PUT": {
      const body: UpdateUserRequestBody = req.body;
      const usecase = container.get<UpdateUserUseCase>(TYPES.UpdateUserUseCase);
      await usecase.execute({
        uuid: userId,
        name: body.name,
        gender: body.gender,
      });
      res.status(200);
      res.send(1);
      break;
    }
    case "DELETE": {
      const usecase = container.get<DeleteUserUseCase>(TYPES.DeleteUserUseCase);
      await usecase.execute({
        uuid: userId,
      });
      res.status(200);
      res.send(1);
      break;
    }
    default:
      res.status(400);
      break;
  }
}

export type UpdateUserRequestBody = {
  name: string;
  gender: "male" | "female" | "other";
};
