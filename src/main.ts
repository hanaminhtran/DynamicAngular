import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';

if (environment.production) {
  enableProdMode();
}

const apolloClientFactory = (httpLink: HttpLink): ApolloClientOptions<any> => ({
  link: httpLink.create({ uri: 'http://208.118.127.100:3005/graphql' }),
  cache: new InMemoryCache(),
});

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    importProvidersFrom(HttpClientModule, ApolloModule),
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloClientFactory,
      deps: [HttpLink],
    },
  ],
})
  .catch(err => console.error(err));
