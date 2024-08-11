export default class VolunteerService {
  readonly volunteerRepository;

  constructor({ volunteerRepository }) {
    this.volunteerRepository = volunteerRepository;
  }
}
