import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-vue';

const apiUrl = import.meta.env.VITE_APP_API_URL;
const state = {
  meetings: []
};

const mutations = {

  SET_MEETINGS(state, meetings) {
    state.meetings = meetings;
  },
  ADD_MEETING(state, meeting) {
    state.meetings.push(meeting);
  },
  UPDATE_MEETING(state, updatedMeeting) {
    const index = state.meetings.findIndex(meeting => meeting.id === updatedMeeting.id);
    if (index !== -1) {
      state.meetings.splice(index, 1, updatedMeeting);
    }
  },
  DELETE_MEETING(state, meetingId) {
    state.meetings = state.meetings.filter(meeting => meeting.id !== meetingId);
  },
  
};

const actions = {
  async fetchMeetings({ commit }, query = {}) {
    const { getAccessTokenSilently } = useAuth0();
    try {
      const token = await getAccessTokenSilently();
    console.log('token', token)
      const response = await axios.get(`${apiUrl}/meetings`, {
        params: query,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const transformedMeetings = response.data.map(meeting => ({
        ...meeting,
        start: meeting.date,
        end: meeting.endDate,
        url: meeting.url,
        title: meeting.title || 'Default Title',
        extendedProps: {
          description: meeting.description || 'No description provided'
        }
      }));

      commit('SET_MEETINGS', transformedMeetings);
    } catch (error) {
      console.error('There was an error fetching the meetings:', error);
    }
  },


async addMeeting({ dispatch }, newEvent) {
    try {
      console.log("new meeting ", newEvent)
      const res = await axios.post(`${apiUrl}/meetings`, newEvent);
     
      await dispatch('fetchMeetings'); 
      return res.data
    } catch (error) {
      console.error('Error adding meeting:', error);
      throw error; 
    }
  },

};

const getters = {
  allMeetings: state => state.meetings
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
