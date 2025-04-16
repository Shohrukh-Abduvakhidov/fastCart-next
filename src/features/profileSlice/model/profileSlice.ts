import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
}
const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		openModalProfile: (state, action) => {
			state.isOpen = action.payload
		},
	},
})

export const { openModalProfile } = profileSlice.actions
export default profileSlice.reducer
