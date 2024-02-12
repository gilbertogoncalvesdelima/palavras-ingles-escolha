// Actions para manipular os termos visualizados:
export const ADD_TERM = 'ADD_TERM';

export const addTerm = (term: string) => ({
    type: ADD_TERM,
    payload: term,
});
