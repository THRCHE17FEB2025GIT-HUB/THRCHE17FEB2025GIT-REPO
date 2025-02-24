import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { AddEmpComponent } from './app/add-emp/add-emp.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(AddEmpComponent, appConfig)
  .catch((err) => console.error(err));

