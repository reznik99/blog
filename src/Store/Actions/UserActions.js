import SelectInput from '@mui/material/Select/SelectInput'
import { API_URL } from '../../Vars/Globals'

export function loadPost() {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: "SET_LOADING", payload: true })
            // fake delay for testing
            const sleep = (milliseconds) => {
                return new Promise(resolve => setTimeout(resolve, milliseconds))
            }
            await sleep(1000)
        } catch (err) {
            console.log(`Couldn't find post in store: ${err}`)
        } finally {
            dispatch({ type: "SET_LOADING", payload: false })
        }
    }
}