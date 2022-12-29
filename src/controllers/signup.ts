import {HttpRequest, HttpResponse} from '../presentation/protocols/http'
import {MissingParamError} from '../presentation/errors/missing-param-error'
import {badRequest} from '../presentation/helpers/http-helpers';

export class SignUpController {
  // @ts-expect-error
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
