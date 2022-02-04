const pathing = {
    main: [
        'main',                             // name of the path
        'Główna aktualna dolegliwość',      // header in Problems
        'Wpisz objaw główny',               // text in placeholder
        'Dolegliwość główna',               // header in table component
    ],
    actual: [
        'actual',
        'Pozostałe aktualne dolegliwości',
        'Wpisz aktualne dolegliwości',
        'Dolegliwość aktualna'
    ],
    chronic: [
        'chronic',
        'Pozostałe przewlekłe/towarzyszące dolegliwośc',
        'Wpisz przewlekłe/towarzyszące dolegliwośc',
        'Dolegliwość przewlekła/towarzysząca '
    ]
}

const tableColumnValues = [              // 
    'Miejsce dolegliwości',
    'Czas trwania',
    'Opis początku (cechy charakterystyczne; nagły/powolny)',
    'Przebieg w czasie',
    'Opis charakteru dolegliwości (np. kaszel suchy)',
    'Promieniowanie (ból)',
    'Czynniki nasilające',
    'Czynniki łagodzące',
    'Nasilenie/siła',
    'Dotychczasowe leczenie i jego efekt',
    'Jak pacjent opisze tą dolegliwość/ zwroty, słowa kluczowe',
    
]

const tableDataNames = [                   // data names of all the table inputs
    'miejsceDolegliwosci',
    'czasTrawania',
    'opisPoczatkowy',
    'przebiegWCzasie',
    'opisCharakteru',
    'promieniowanie',
    'czynnikiNasilajace',
    'czynnikiLagodzace',
    'nasilenie',
    'dotychczasoweLeczenie',
    'jakPacjentOpisze'
]


export { pathing, tableColumnValues, tableDataNames}
