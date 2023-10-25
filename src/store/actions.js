import axiosClient from '../axiosClient';

export  function serachMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchedMeals', data.meals)
        })
}

export  function serachMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            commit('setMealsByLetter', data.meals)
        })
}

export  function serachMealsByIngredients({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
        .then(({data}) => {
            commit('setMealsByIngredients', data.meals)
        })
}