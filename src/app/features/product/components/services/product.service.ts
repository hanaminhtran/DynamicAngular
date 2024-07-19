import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetOptionProductGQL, GetOptionProductMutation, GetOptionProductMutationVariables } from '../../../../graphql/generated';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private getOptionProductGQL: GetOptionProductGQL) {}

  getProductOptions(id: string): Observable<GetOptionProductMutation['getOptionProduct']> {
    return this.getOptionProductGQL.mutate({ _id: id })
      .pipe(map(result => result.data?.getOptionProduct || []));
  }
}
