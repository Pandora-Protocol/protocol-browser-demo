export default {

    pandoraProtocolChangeReady ({ state, commit, rootState }, value) {
        commit('setReady', value);
    },

    pandoraProtocolChangeContact ({ state, commit, rootState }, contact ) {
        commit('setContact', contact);
    }


}