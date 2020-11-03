import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCarServices from '@modules/cars/services/CreateCarServices';

export default class CarsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, brand, daily_value } = request.body;

    const user_id = request.user.id;

    const createCar = container.resolve(CreateCarServices);

    const car = await createCar.execute({ user_id, name, brand, daily_value });

    return response.json(car);
  }
}