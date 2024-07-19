structure :
src/
|-- app/
|   |-- core/
|   |   |-- services/
|   |   |   |-- graphql/
|   |   |   |   |-- graphql.service.ts
|   |-- features/
|   |   |-- product/
|   |   |   |-- components/
|   |   |   |   |-- product-list/
|   |   |   |   |   |-- product-list.component.ts
|   |   |   |   |   |-- product-list.component.html
|   |   |   |-- services/
|   |   |   |   |-- product.service.ts
|   |-- graphql/
|   |   |-- generated.ts
|   |   |-- queries.graphql
|   |-- shared/
|   |   |-- models/
|   |   |   |-- product.model.ts
|-- environments/
|-- main.ts



npm install -D @graphql-codegen/cli
npm install @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-apollo-angular
npx graphql-codegen
