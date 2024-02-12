// Componente para listar os termos em inglês:
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTerm } from '../redux/actions/termActions';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Term = styled.Text`
    margin: 8px;
    font-size: 18px;
`;

const TermList = () => {
    const terms = useSelector((state: any) => state.terms);
    const dispatch = useDispatch();

    const handleSelectTerm = (term: string) => {
        dispatch(addTerm(term));
    };

    return (
        <Container>
            {terms.map((term: string, index: number) => (
                <Term key={index} onPress={() => handleSelectTerm(term)}>
                    {term}
                </Term>
            ))}
        </Container>
    );
};

export default TermList;
