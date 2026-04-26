// Lista numerów REGON, 
// do sprawdzania w testach, jak aplikacja radzi sobie 
// gdy podamy REGON, który nie istnieje w systemach GUS
// Typ danych nonExistingRegons - tablica mogąca zawierać różne wartości,
export const nonExistingShortRegons = [

    {
        regon: '162537906',
        description: '9-cyfrowy poprawny REGON, bez powiązań z istniejacymi podmiotami'
    } 
]

export const nonExistingLongRegons = [

    {
        regon: '03458707137040',
        description: '14-cyfrowy poprawny REGON, bez powiązań z istniejacymi podmiotami'
    }   

]