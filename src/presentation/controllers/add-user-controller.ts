import { Controller } from '../contracts/controller';
import { RequiredFieldError } from '../errors/required-field-error';
import { HttpRequest, HttpResponse } from '../types/http';

export class AddUserController implements Controller {
  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new RequiredFieldError('The name field is required'),
      };
    } else if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new RequiredFieldError('The email field is required'),
      };
    } else if (!httpRequest.body.password) {
      return {
        statusCode: 400,
        body: new RequiredFieldError('The password field is required'),
      };
    } else if (!httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new RequiredFieldError('The passwordConfirmation field is required'),
      };
    } else if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new Error('Password is different from passwordConfirmation'),
      };
    }
  }
}
