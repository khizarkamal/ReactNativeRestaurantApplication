import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ausFmuiDJY71WofEe-lNzjWIEWtufnbh7I9nLQv-VCKwx7cCHa1Fhi_6olP_KAEIII2FeMqdS6xIBMEWFjrc5PqsrkQDHdnjHL1sagfTjODHJkrnOcvtVVxuCydGZXYx'
    }
})