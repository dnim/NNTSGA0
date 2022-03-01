# NNTSGA0
NodeJS + NestJS + TS + GraphQL + Auth0



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ docker-compose up
$ npm run typeorm migration:run
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Terraform

* run `terraform validate`
* run `terraform fmt`
* run `terraform plan` to check errors and analyze changes
* run `terraform init` initize necessary instances
* run `terraform apply` create/update instances/configuration

!!! If testing - run `terraform destroy` after check. Don't use for Stage or PROD

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
