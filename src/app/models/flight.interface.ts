export class IFlight {
  [x: string]: any;
  flightId: number;
  flightNumber: string;
  scheduledDate: Date;
  originDestination: string;
  registration: string;

  constructor(
    flightId: number,
    flightNumber: string,
    scheduledDate: Date,
    originDestination: string,
    registration: string
  ) {
    this.flightId = flightId;
    this.flightNumber = flightNumber;
    this.scheduledDate = scheduledDate;
    this.originDestination = originDestination;
    this.registration = registration;
  }
}
