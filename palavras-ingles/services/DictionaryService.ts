// Serviço para fazer solicitações à API de Dicionário

export const fetchDefinition = async (word: string) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching definition:', error);
        throw error;
    }
};
