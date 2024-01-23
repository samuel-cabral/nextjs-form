import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

export function AsyncAutoCompleteInput() {
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState<string[]>([])

  const handleInputChange = (
    event: React.ChangeEvent<{}>,
    newInputValue: string,
  ) => {
    setInputValue(newInputValue)
  }

  const handleFetchOptions = async (inputValue: string) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${inputValue}`,
    )
    const data = await response.json()
    setOptions(data.items.map((item: any) => item.full_name))
  }

  return (
    <Autocomplete
      freeSolo
      options={options}
      onInputChange={handleInputChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Repositories"
          variant="outlined"
          onChange={(event) => handleFetchOptions(event.target.value)}
        />
      )}
    />
  )
}
