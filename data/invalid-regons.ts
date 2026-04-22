// Lista numerów REGON, 
// do sprawdzania w testach, jak aplikacja radzi sobie 
// gdy podamy REGON, który nie istnieje w systemach GUS
// Typ danych invalidRegons - tablica mogąca zawierać różne wartości,
export const invalidRegons = [

    {
        regon: '162537906',
        description: '9-cyfrowy poprawny REGON ale bez powiązań z istniejacymi podmiotami'
    },
    
    {
        regon: '03458707137040',
        description: '14-cyfrowy poprawny REGON ale bez powiązań z istniejacymi podmiotami'
    }   

]