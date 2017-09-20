/* @flow */

declare type GraphQLResponseRoot = {
  data?: Query;
  errors?: Array<GraphQLResponseError>;
}

declare type GraphQLResponseError = {
  message: string;            // Required for all errors
  locations?: Array<GraphQLResponseErrorLocation>;
  [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
}

declare type GraphQLResponseErrorLocation = {
  line: number;
  column: number;
}

declare type Break = {
  startTime: any;
  endTime: any;
  duration: any;
  entryType: ScheduleEntryType;
}

declare type Lunch = {
  startTime: any;
  endTime: any;
  duration: any;
  entryType: ScheduleEntryType;
}

declare type Registration = {
  startTime: any;
  endTime: any;
  duration: any;
  entryType: ScheduleEntryType;
}

declare type Address = {
  country: string;
  city: string;
  zipCode: string;
  streetName: string;
  houseNumber: string;
  latitude: number;
  longitude: number;
}

declare type Conference = {
  name: string;
  edition: Edition;
  tagLine: string;
  year: number;
  venue: ?Venue;
  dateStart: ?any;
  dateEnd: ?any;
  tickets: Array<Ticket>;
  url: string;
  speakers: Array<Speaker>;
  team: Array<TeamMember>;
  schedule: Array<ScheduleEntry>;
  sponsors: Array<Sponsor>;
  talks: Array<Talk>;
}

declare type Direction = {
  type: DirectionType;
  from: string;
  description: string;
}

declare type DirectionType = "Car" | "TrainStation" | "Airport";

declare type Edition = "Berlin2017";

declare type Query = {
  conferences: Array<Conference>;
  conference: ?Conference;
}

declare type ScheduleEntry = Break | Lunch | Registration | Talk;

declare type ScheduleEntryType = "Lunch" | "Break" | "Talk" | "Registration";

declare type Speaker = {
  name: string;
  photoUrl: ?string;
  company: ?string;
  twitter: ?string;
  github: ?string;
  description: ?string;
  url: string;
  talks: Array<Talk>;
}

declare type Sponsor = {
  name: string;
  sponsorType: SponsorType;
  url: string;
  logoUrl: string;
  description: ?string;
  twitter: ?string;
  github: ?string;
}

declare type SponsorType = "Bronze" | "Silver" | "Gold" | "Platinum" | "Opportunity" | "Partner" | "Organiser";

declare type Talk = {
  title: string;
  description: string;
  cardUrl: string;
  format: TalkFormat;
  startTime: any;
  endTime: any;
  duration: any;
  speakers: Array<Speaker>;
  slidesUrl: ?string;
  url: string;
  entryType: ScheduleEntryType;
}

declare type TalkFormat = "Lightning" | "Standard" | "PanelDiscussion" | "Special";

declare type TeamMember = {
  name: string;
  photoUrl: ?string;
  teamSection: TeamSection;
  description: ?string;
  twitter: ?string;
  github: ?string;
}

declare type TeamSection = "SpecialThanks" | "Core";

declare type Ticket = {
  name: string;
  price: string;
  availableUntil: any;
  url: string;
  soldOut: boolean;
  available: boolean;
}

declare type Venue = {
  name: string;
  url: string;
  phone: string;
  address: Address;
  directions: Array<Direction>;
}