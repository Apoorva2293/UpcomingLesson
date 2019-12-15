import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-timezone';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'rangeTime'
})

export class MomentDatePipe extends DatePipe implements PipeTransform {
    transform(
      value: string | Date,
      format: string = 'shortTime',
      timezone: string = 'America/New_York'
    ): string {
      const timezoneOffset = moment(value).tz(timezone).format().toString();
      return super.transform(value, format, timezoneOffset).toLocaleString();
      }
    }