import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRentalService from '@modules/rentals/services/CreateRentalService';

export default class RentalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { start_date, end_date } = request.body;

    const { car_id } = request.params;

    const client_id = request.user.id;

    const createRental = container.resolve(CreateRentalService);

    const rental = await createRental.execute({
      client_id,
      car_id,
      start_date,
      end_date,
    });

    return response.json(rental);
  }
}
