// Reducer para atualizar o estado dos termos visualizados
import { ADD_TERM } from '../types';

const initialState: { terms: string[], selectedTerm: string | null } = {
    terms: [],
    selectedTerm: null,
};

const termReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TERM:
            return {
                ...state,
                terms: [...state.terms, action.payload],
                selectedTerm: action.payload,
            };
        default:
            return state;
    }
};

export default termReducer;

