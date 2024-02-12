//   Componente para exibir a definição de um termo em inglês

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchDefinition } from '../services/DictionaryService';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const DefinitionText = styled.Text`
    font-size: 16px;
    margin: 16px;
    text-align: center;
`;

const TermDefinition = () => {
    const selectedTerm = useSelector((state: any) => state.terms.selectedTerm);
    const [definition, setDefinition] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (selectedTerm) {
            setLoading(true);
            fetchDefinition(selectedTerm)
                .then((data: any) => {
                    const firstDefinition = data[0]?.meanings[0]?.definitions[0]?.definition;
                    setDefinition(firstDefinition || 'Definition not found');
                })
                .catch((error: any) => {
                    console.error('Error fetching definition:', error);
                    setDefinition('Error fetching definition');
                })
                .finally(() => setLoading(false));
        }
    }, [selectedTerm]);

    return (
        <Container>
            {loading ? (
                <ActivityIndicator />
            ) : (
                <DefinitionText>
                    {selectedTerm ? (definition || 'No definition available') : 'No term selected'}
                </DefinitionText>
            )}
        </Container>
    );
};

export default TermDefinition;
