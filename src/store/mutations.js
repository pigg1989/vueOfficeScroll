import types from './mutation-types';

const mutation = {
  [types.EDITINGT_ACTIVE_INDEX](state, payload) {
    state.activeIndex = payload.activeIndex;
  },
  [types.SHOW_JOIN](state, payload) {
    state.showJoin = payload.showJoin;
  },
  [types.M_ABOUT_HEIGHT](state, payload) {
    state.aboutHeight = payload.aboutHeight;
  },
  [types.M_CONTACT_HEIGHT](state, payload) {
    state.contactHeight = payload.contactHeight;
  },
  [types.M_COOPERATE_HEIGHT](state, payload) {
    state.cooperateHeight = payload.cooperateHeight;
  },
  [types.M_JOIN_HEIGHT](state, payload) {
    state.joinHeight = payload.joinHeight;
  },
  [types.M_VOCATIONAL_HEIGHT](state, payload) {
    state.vocationalHeight = payload.vocationalHeight;
  },
  [types.M_BANNER_HEIGHT](state, payload) {
    state.bannerHeight = payload.bannerHeight;
  },
  [types.M_SCROLL_TOP](state, payload) {
    state.scrollTop = payload.scrollTop;
  },
  [types.M_APP_HEIGHT](state, payload) {
    state.appHeight = payload.appHeight;
  },
  [types.M_VOCATIONAL_OFFSET_TOP](state, payload) {
    state.vocationalOffsetTop = payload.vocationalOffsetTop;
  },
  [types.M_ABOUT_OFFSET_TOP](state, payload) {
    state.aboutOffsetTop = payload.aboutOffsetTop;
  },
  [types.M_COOPERATE_OFFSET_TOP](state, payload) {
    state.cooperateOffsetTop = payload.cooperateOffsetTop;
  },
  [types.M_JOIN_OFFSET_TOP](state, payload) {
    state.joinOffsetTop = payload.joinOffsetTop;
  },
  [types.M_CONTACT_OFFSET_TOP](state, payload) {
    state.contactOffsetTop = payload.contactOffsetTop;
  },
};

export default mutation;
