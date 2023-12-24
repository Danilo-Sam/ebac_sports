import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from './../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const itemExistente = state.itens.find((p) => p.id === produto.id)
      if (itemExistente) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer

// const addToFavorites = (itens) => ({
//   type: ADD_FAVORITE,
//   payload: itens
// })

// const removeFavorites = (itensId) => ({
//   type: REMOVE_FAVORITE,
//   payload: itensId
// })

// const favoritesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FAVORITE:
//       return {
//         ...state,
//         favoriteItens: [...state.favoriteItens, action.payload]
//       }
//     case REMOVE_FAVORITE:
//       return {
//         ...state,
//         favoriteitens: state.favoriteItens.filter(
//           (item) => item.id !== action.payload
//         )
//       }
//     default:
//       return state
//   }
// }

// type FavoritosState = {
//   itens: Produto[]
// }

// const initialState: FavoritosState = {
//   itens: []
// }

// const favoritoSlice = createSlice({
//   name: 'favorito',
//   initialState: [],
//   reducers: {
//     favorito: (state, action: PayloadAction<number>) => {
//       const favoritos = action.payload
//       state = state.push((itens) => itens.id !== favoritos)
//       const ADD_FAVORITE = 'ADD_FAVORITE'
//       const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

//       const addFavorites = (itens: any) => ({
//         type: ADD_FAVORITE,
//         payload: itens
//       })

//       const removeFavorites = (itensId: any) => ({
//         type: REMOVE_FAVORITE,
//         payload: itensId
//       })

//       const favoritesReducer = (state = initialState) => {
//         switch (action.type) {
//           case ADD_FAVORITE:
//             return {
//               ...state,
//               favoriteItens: [...state.itens, action.payload]
//             }
//           case REMOVE_FAVORITE:
//             return {
//               ...state,
//               favoriteitens: state.itens.filter(
//                 (itens) => (itens.id = action.payload)
//               )
//             }
//           default:
//             return state
//         }
//       }

//       // if (state.itens.find((f) => f.id === favoritos.id)) {
//       //   state.itens.push(favoritos)
//       // } else {
//       //   return state
//       // }
//     }
//   }
// })

// export const { favorito } = favoritoSlice.actions
// export default favoritoSlice.reducer

// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
