import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-loging-component',
  templateUrl: './loging-component.component.html',
  styleUrls: ['./loging-component.component.css'],
  providers: [LoggingService]
})
export class LogingComponentComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.loggingService.log('Logging Service is being used.');
  }

}
