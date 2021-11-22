import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginpagesampleSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [LoginpagesampleSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
