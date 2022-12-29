import {HttpRequest, HttpResponse} from '../presentation/protocols/http'
import {MissingParamError} from '../presentation/errors/missing-param-error'
import {badRequest} from '../presentation/helpers/http-helpers';

export class SignUpController {
  // @ts-expect-error
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
