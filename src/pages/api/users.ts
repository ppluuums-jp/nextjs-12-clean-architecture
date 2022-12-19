import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "../../di/inversify.config";
import { TYPES } from "../../di/types";
import { CreateUserUseCase } from "../../domain/usecases/create-user-usecase";
import { ReadAllUsersUseCase } from "../../domain/usecases/read-all-users-usecase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const usecase = container.get<ReadAllUsersUseCase>(
        TYPES.ReadAllUsersUseCase
      );
      const data = await usecase.execute({});
      res.status(200);
      res.send(data);
      break;
    }
    case "POST": {
      const body: CreateUserRequestBody = req.body;
      const usecase = container.get<CreateUserUseCase>(TYPES.CreateUserUseCase);
      await usecase.execute({ name: body.name, gender: body.gender });
      res.status(200);
      res.send(1);
      break;
    }
    default:
      res.status(400);
      break;
  }
}

export type CreateUserRequestBody = {
  name: string;
  gender: "male" | "female" | "other";
};
