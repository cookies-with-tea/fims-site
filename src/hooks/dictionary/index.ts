const dictionary = [] // TODO: redux

// TODO: добавить взаимодействие с Redux для хранения и изменения словаря
// TODO: добавить взаимодействие с API для получения новых словарных пар

// Для перевода использовать тип Record<string, string>
// Остальные будут такие, какие будут. Например, сортировка будет прилетать в виде sort.reviews, sort.blog и т.д.
// хук, в котором содержатся переводы, ключи и значения для работы приложения
export const useDictionary = () => {
  const getData = () => {
    // Fetch data from dictionary API
    // Return fetched data

    console.log('FETCH DICTIONARY')
  }

  return {
    getData,
  }
}
